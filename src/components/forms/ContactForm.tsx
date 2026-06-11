"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8 text-center">
        <i className="pi pi-check-circle mb-4 text-3xl text-[var(--accent)]" />
        <h3 className="mb-2 text-xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
          Message sent
        </h3>
        <p className="text-sm text-[var(--fg-60)]">
          Thank you for reaching out. We will respond within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-[var(--accent)] hover:text-[var(--accent-hover)]"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-sm border border-[var(--fg-10)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--fg-30)] focus:border-[var(--accent)] focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs tracking-widest text-[var(--fg-50)] uppercase">
            Name *
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs tracking-widest text-[var(--fg-50)] uppercase">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs tracking-widest text-[var(--fg-50)] uppercase">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-xs tracking-widest text-[var(--fg-50)] uppercase">
            Subject *
          </label>
          <input id="subject" name="subject" type="text" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs tracking-widest text-[var(--fg-50)] uppercase">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
