"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-bold text-grey-dark">Message Sent</h3>
        <p className="mt-2 text-sm text-grey-muted">
          Thank you for reaching out. We will respond to your message as soon as
          possible. You can also email us directly at{" "}
          <a
            href="mailto:admin@phakamawomens.org"
            className="font-semibold text-pink-dark hover:underline"
          >
            admin@phakamawomens.org
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm text-grey-dark outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/15";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-grey-dark">
            Full Name
          </label>
          <input type="text" id="fullName" name="fullName" required className={inputClass} placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-grey-dark">
            Email Address
          </label>
          <input type="email" id="email" name="email" required className={inputClass} placeholder="you@example.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-grey-dark">
            Phone Number
          </label>
          <input type="tel" id="phone" name="phone" className={inputClass} placeholder="+263 ..." />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-grey-dark">
            Subject
          </label>
          <input type="text" id="subject" name="subject" required className={inputClass} placeholder="How can we help?" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-grey-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Tell us more about your inquiry..."
        />
      </div>

      <Button type="submit">Send Message</Button>
    </form>
  );
}
