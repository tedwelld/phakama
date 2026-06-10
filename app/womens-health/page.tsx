import Hero from "@/components/Hero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women's Health",
  description:
    "Explore women's health topics including wellness, reproductive health, mental health, nutrition, preventive care, and community support.",
};

const topics = [
  {
    title: "General Women's Wellness",
    content:
      "Wellness is about caring for your whole self — body, mind, and spirit. Regular rest, movement, hydration, and health check-ups help women stay strong and resilient in daily life.",
  },
  {
    title: "Reproductive Health Awareness",
    content:
      "Understanding your reproductive health empowers you to make informed choices. We encourage open conversations about menstrual health, family planning, and regular gynecological care with trusted health providers.",
  },
  {
    title: "Mental Health and Emotional Support",
    content:
      "Women often carry many responsibilities at home, at work, and in the community. Mental health matters just as much as physical health. Seeking support, talking openly, and practicing self-care are signs of strength.",
  },
  {
    title: "Nutrition and Healthy Living",
    content:
      "Balanced nutrition supports energy, immunity, and long-term health. Simple habits — eating a variety of foods, staying hydrated, and limiting processed foods — can make a meaningful difference over time.",
  },
  {
    title: "Preventive Health Checks",
    content:
      "Preventive care helps catch health issues early. Regular check-ups, vaccinations where recommended, and age-appropriate screenings are important steps every woman should discuss with her healthcare provider.",
  },
  {
    title: "Community Support for Women",
    content:
      "No woman should face health challenges alone. Community groups, faith communities, and organizations like Phakama provide spaces for sharing, learning, and supporting one another with compassion and respect.",
  },
];

export default function WomensHealthPage() {
  return (
    <>
      <Hero
        title="Women's Health"
        eyebrow="Wellness & Education"
        description="Health education that is warm, respectful, and empowering — because every woman deserves access to reliable information and support."
        compact
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionTitle
              eyebrow="Whole-Person Care"
              title="Caring for your whole self"
              subtitle="Women's health goes beyond any single condition. It includes physical, emotional, and social wellbeing."
            />
            <p className="mt-6 leading-relaxed text-grey-muted">
              At Phakama Women&apos;s Organization, we believe health education should
              be accessible and free from judgment. Our goal is to help women feel
              confident asking questions, seeking care, and making choices that support
              their long-term wellbeing.
            </p>
          </div>
          <PlaceholderImage label="Women's health image" className="aspect-[4/3] w-full" />
        </div>
      </Section>

      <Section variant="muted">
        <SectionTitle
          eyebrow="Topics"
          title="Health topics we cover"
          subtitle="Educational resources and community conversations on key areas of women's health."
          centered
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-2xl border border-border-subtle bg-surface p-6"
            >
              <h3 className="text-lg font-bold text-grey-dark">{topic.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grey-muted">{topic.content}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-purple-light/70 bg-purple-light/20 p-8 sm:p-10">
          <SectionTitle
            eyebrow="Our Approach"
            title="A respectful, supportive approach"
          />
          <p className="mt-6 leading-relaxed text-grey-muted">
            We know that talking about health can feel personal or uncomfortable.
            Our programs are designed to create safe, welcoming spaces where women
            can learn without fear or shame. We always encourage visitors to consult
            qualified healthcare professionals for personal medical advice and treatment.
          </p>
        </div>
      </Section>
    </>
  );
}
