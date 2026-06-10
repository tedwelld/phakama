import Button from "@/components/Button";
import ContactCard from "@/components/ContactCard";
import Hero from "@/components/Hero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { CONTACT } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, partner, donate resources, or invite Phakama Women's Organization to your community. Join our mission for women's health and breast cancer awareness.",
};

const waysToHelp = [
  {
    title: "Become a Volunteer",
    description:
      "Share your time and skills at awareness events, outreach programs, and community health talks.",
  },
  {
    title: "Partner With Us",
    description:
      "Health organizations, schools, churches, and businesses can collaborate on awareness and education initiatives.",
  },
  {
    title: "Support Awareness Campaigns",
    description:
      "Help spread the word about breast cancer awareness and women's health in your community.",
  },
  {
    title: "Donate Resources",
    description:
      "Contribute materials, funding, or in-kind support to help us reach more women and families.",
  },
  {
    title: "Invite Us for a Health Talk",
    description:
      "Bring Phakama Women's Organization to your school, church, workplace, or community gathering.",
  },
  {
    title: "Community Ambassador Program",
    description:
      "Become a local advocate who shares health information and connects women with support resources.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Hero
        title="Get Involved"
        eyebrow="Join Our Mission"
        description="Your support — whether through volunteering, partnership, or advocacy — helps us reach more women with life-saving health information."
        compact
      />

      <Section>
        <SectionTitle
          eyebrow="Ways to Help"
          title="Make a difference"
          subtitle="Every contribution, big or small, helps build a healthier and more informed community."
          centered
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {waysToHelp.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border-subtle bg-surface p-6"
            >
              <h3 className="font-bold text-grey-dark">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grey-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <PlaceholderImage label="Volunteer image" className="aspect-[4/3] w-full" />
          <div>
            <SectionTitle
              eyebrow="Volunteer"
              title="Join our volunteer team"
              subtitle="Volunteers are the heart of our outreach."
            />
            <p className="mt-6 leading-relaxed text-grey-muted">
              Whether you help at events, assist with workshops, or share awareness
              materials in your neighborhood, your involvement creates real impact
              for women and families.
            </p>
            <div className="mt-8">
              <Button href="/contact">Volunteer With Us</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-2xl bg-gradient-to-br from-purple to-pink p-8 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              Partner With Us
            </p>
            <h2 className="mt-3 text-2xl font-bold">Ready to partner or support?</h2>
            <p className="mt-5 leading-relaxed text-white/90">
              For partnerships, volunteering, or support, contact us at:
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <span className="text-white/70">Email: </span>
                <a href={`mailto:${CONTACT.email}`} className="font-semibold hover:underline">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <span className="text-white/70">Phone: </span>
                <a href={`tel:${CONTACT.phone}`} className="font-semibold hover:underline">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <Button href="/contact" variant="white">
                Contact Us
              </Button>
            </div>
          </div>
          <ContactCard />
        </div>
      </Section>
    </>
  );
}
