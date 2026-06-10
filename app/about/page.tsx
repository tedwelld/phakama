import Hero from "@/components/Hero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Phakama Women's Organization — our mission, vision, values, and commitment to women's health and breast cancer awareness in Zimbabwe.",
};

const values = [
  { name: "Compassion", description: "We care deeply about the wellbeing of every woman we serve." },
  { name: "Awareness", description: "We share clear, accessible health information to save lives." },
  { name: "Empowerment", description: "We help women make informed decisions about their health." },
  { name: "Community", description: "We work together with families, partners, and local groups." },
  { name: "Trust", description: "We build relationships based on honesty and respect." },
  { name: "Hope", description: "We inspire confidence and support through every stage of the journey." },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        eyebrow="Who We Are"
        description="Phakama Women's Organization is dedicated to educating, supporting, and empowering women through health awareness and community programs."
        compact
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionTitle
              eyebrow="Our Story"
              title="Rooted in community, focused on women's health."
            />
            <p className="mt-6 leading-relaxed text-grey-muted">
              Phakama Women&apos;s Organization was founded with a simple but powerful
              purpose: to help women access reliable health information and feel supported
              in their wellness journey. We focus especially on breast cancer awareness,
              early detection education, and community outreach that reaches women in
              schools, churches, workplaces, and neighborhoods.
            </p>
            <p className="mt-4 leading-relaxed text-grey-muted">
              Through workshops, awareness campaigns, and one-on-one support, we work to
              break down barriers to health knowledge and encourage women to prioritize
              preventive care and regular check-ups.
            </p>
          </div>
          <PlaceholderImage label="About organization image" className="aspect-[4/3] w-full" />
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-dark">Mission</p>
            <h2 className="mt-3 text-xl font-bold text-grey-dark">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-grey-muted">
              To educate, support, and empower women through health awareness, early
              detection education, and community-based support programs.
            </p>
          </div>
          <div className="rounded-2xl border border-purple-light/70 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple">Vision</p>
            <h2 className="mt-3 text-xl font-bold text-grey-dark">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-grey-muted">
              To build a healthier, informed, and empowered community of women who
              have access to reliable health information and support.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Values"
          title="Our core values"
          subtitle="These values guide everything we do — from community talks to awareness campaigns."
          centered
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.name}
              className="rounded-2xl border border-border-subtle bg-surface p-6"
            >
              <h3 className="font-bold text-grey-dark">{value.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-grey-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="accent">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="Community" title="Who we serve" />
          <p className="mt-6 leading-relaxed text-grey-muted">
            We serve women of all ages, along with their families and community partners.
            Our programs are designed to be welcoming, respectful, and accessible — whether
            you are seeking health information for yourself, supporting a loved one, or
            looking to bring awareness to your school, church, or workplace.
          </p>

          <div className="mt-12 border-t border-pink-light/60 pt-12">
            <SectionTitle title="Why women's health awareness matters" />
            <p className="mt-6 leading-relaxed text-grey-muted">
              Many health challenges affecting women can be managed more effectively when
              detected early. Awareness reduces fear, encourages timely medical visits, and
              helps communities support one another. By sharing knowledge openly and
              compassionately, Phakama Women&apos;s Organization helps women take confident
              steps toward better health.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
