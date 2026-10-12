import { pageMetadata } from "@/lib/seo";
import { MEDICAL_DISCLAIMER, siteConfig } from "@/data/siteConfig";

export const metadata = pageMetadata("/terms-and-conditions");

const sections = [
  {
    title: "Using this website",
    text: "This website introduces Phakama Women’s Organization, our community work and ways to take part. Please use it respectfully and lawfully. Do not attempt to disrupt the website, gain unauthorised access or send harmful, misleading or abusive material through our contact channels.",
  },
  {
    title: "Information and health awareness",
    text: `${MEDICAL_DISCLAIMER} Website content does not provide a diagnosis, treatment plan or personalised medical advice. Do not delay seeking professional care because of information you read here.`,
  },
  {
    title: "Community activities and participation",
    text: "Details of programmes, meetings and volunteering opportunities may change. Please contact Phakama to confirm dates, availability, requirements and arrangements before travelling or taking part. Sending an enquiry does not confirm a place, partnership or volunteer role; arrangements should be agreed directly with our team.",
  },
  {
    title: "Content, photographs and sharing",
    text: "You are welcome to share links to our public pages. Please contact us before reproducing our text, photographs or branding, especially for promotional or commercial use. Respect the privacy and dignity of people shown in our community photographs, and do not imply that Phakama endorses another organisation, product or service without permission.",
  },
  {
    title: "Messages and personal information",
    text: "When contacting us, provide accurate details and share only information needed for your enquiry. Avoid sending sensitive medical information or someone else’s personal details without their permission. Email, WhatsApp and social media are separate services with their own terms and privacy practices.",
  },
  {
    title: "External links",
    text: "Our website may link to other websites and services for information or communication. Those services are managed by their respective providers. Please review their terms and check information independently before relying on it; a link does not mean that Phakama endorses all of its content.",
  },
  {
    title: "Updates and availability",
    text: "We aim to keep this website useful and accurate, but information may become outdated and access may occasionally be interrupted. Please let us know about errors or broken links. These terms may be updated as the website and our activities develop; the date below identifies the latest revision.",
  },
];

export default function TermsPage() {
  return (
    <article className="container-luxury pt-40 pb-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-xs tracking-widest text-[var(--accent)] uppercase">Website guidelines</p>
        <h1 className="font-display text-4xl sm:text-5xl">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-[var(--fg-60)]">Last updated: 12 October 2026</p>
        <p className="mt-8 leading-relaxed text-[var(--fg-70)]">These terms explain how to use the {siteConfig.name} website and what to expect from the information and opportunities shared here.</p>
        <div className="mt-10 space-y-8">
          {sections.map(({ title, text }) => (
            <section key={title}>
              <h2 className="mb-3 font-display text-2xl">{title}</h2>
              <p className="leading-relaxed text-[var(--fg-70)]">{text}</p>
            </section>
          ))}
          <section>
            <h2 className="mb-3 font-display text-2xl">Questions or concerns</h2>
            <p className="leading-relaxed text-[var(--fg-70)]">For questions about these terms, content permissions or corrections, email <a className="break-words text-[var(--accent)] underline underline-offset-4" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
