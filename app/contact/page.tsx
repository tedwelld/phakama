import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Phakama Women's Organization by email, phone, WhatsApp, or our contact form. We welcome your questions, partnership ideas, and support.",
};

const socialLinks = [
  { label: "Facebook", href: SOCIAL_LINKS.facebook },
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
  { label: "X", href: SOCIAL_LINKS.x },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        eyebrow="Get in Touch"
        description="We would love to hear from you. Reach out with questions, partnership ideas, or to invite us to your community."
        compact
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-3">
            <SectionTitle
              eyebrow="Enquiry"
              title="Send us a message"
              subtitle="Fill out the form below and we will get back to you as soon as possible."
            />
            <div className="mt-8 rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactCard />

            <div className="mt-6 rounded-2xl border border-purple-light/70 bg-purple-light/20 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple">Location</p>
              <h3 className="mt-2 font-bold text-grey-dark">Zimbabwe</h3>
              <p className="mt-2 text-sm text-grey-muted">
                Detailed address coming soon.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-border-subtle bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple">Follow Us</p>
              <h3 className="mt-2 font-bold text-grey-dark">Social Media</h3>
              <ul className="mt-4 space-y-2">
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-pink-dark hover:underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted" className="py-12 md:py-14">
        <div className="text-center">
          <SectionTitle
            eyebrow="Direct Contact"
            title="Have a question?"
            subtitle="We are here to help."
            centered
          />
          <p className="mt-5 text-sm text-grey-muted">
            Email{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold text-pink-dark hover:underline">
              {CONTACT.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${CONTACT.phone}`} className="font-semibold text-purple hover:underline">
              {CONTACT.phoneDisplay}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
