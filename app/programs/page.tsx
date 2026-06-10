import CtaBanner from "@/components/CtaBanner";
import Hero from "@/components/Hero";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProgramCard from "@/components/ProgramCard";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs & Campaigns",
  description:
    "Discover Phakama Women's Organization programs including breast cancer awareness campaigns, community outreach, health workshops, and volunteer activities.",
};

const programs = [
  {
    title: "Breast Cancer Awareness Campaigns",
    description:
      "Community-wide campaigns that share life-saving information about breast cancer signs, symptoms, and the importance of early detection.",
    icon: "awareness" as const,
  },
  {
    title: "Women's Wellness Workshops",
    description:
      "Interactive sessions covering women's health topics, self-care, nutrition, and preventive health in a supportive group setting.",
    icon: "wellness" as const,
  },
  {
    title: "Community Health Outreach",
    description:
      "On-the-ground programs that bring health education directly to neighborhoods, markets, and community gathering places.",
    icon: "outreach" as const,
  },
  {
    title: "Volunteer Support Programs",
    description:
      "Opportunities for community members to contribute their time and skills to awareness events, outreach, and support activities.",
    icon: "volunteer" as const,
  },
];

const activities = [
  "Breast cancer awareness campaigns in local communities",
  "Community outreach programs for underserved areas",
  "Health education workshops for women and families",
  "Screening awareness drives encouraging preventive care",
  "School, church, and community health talks",
  "Volunteer-led support and awareness activities",
];

export default function ProgramsPage() {
  return (
    <>
      <Hero
        title="Programs & Campaigns"
        eyebrow="Community Impact"
        description="See how Phakama Women's Organization brings health education and breast cancer awareness directly to communities across Zimbabwe."
        compact
      />

      <Section>
        <SectionTitle
          eyebrow="Our Work"
          title="What we do in the community"
          subtitle="Our programs are designed to educate, inspire, and connect women with the support they need."
          centered
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
              icon={program.icon}
              href="/get-involved"
              linkLabel="Get Involved"
            />
          ))}
        </div>
      </Section>

      <Section variant="accent">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <PlaceholderImage label="Community outreach image" className="aspect-[4/3] w-full" />
          <div>
            <SectionTitle eyebrow="Outreach" title="Our community activities" />
            <ul className="mt-8 space-y-3">
              {activities.map((activity) => (
                <li key={activity} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink text-white">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-grey-dark">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionTitle
              eyebrow="Workshops"
              title="Health education workshops"
              subtitle="Practical, engaging sessions that make health information easy to understand and act on."
            />
            <p className="mt-6 leading-relaxed text-grey-muted">
              Our workshops cover breast cancer awareness, women&apos;s wellness,
              mental health, and preventive care. We tailor sessions for schools,
              churches, workplaces, and community groups to meet people where they are.
            </p>
          </div>
          <PlaceholderImage label="Campaign and event image" className="aspect-[4/3] w-full" />
        </div>
      </Section>

      <CtaBanner
        title="Invite us to your community"
        description="Want Phakama Women's Organization to visit your school, church, or community group? We would love to hear from you."
        buttonLabel="Request a Health Talk"
        buttonHref="/contact"
      />
    </>
  );
}
