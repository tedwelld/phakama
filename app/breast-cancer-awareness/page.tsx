import DisclaimerBanner from "@/components/DisclaimerBanner";
import Hero from "@/components/Hero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breast Cancer Awareness",
  description:
    "Learn about breast cancer awareness, early detection, signs and symptoms, screening, self-examination, and when to seek medical help.",
};

const symptoms = [
  "A new lump or thickening in the breast or underarm",
  "Changes in breast size, shape, or appearance",
  "Dimpling or puckering of the skin",
  "Nipple changes, including inversion or discharge",
  "Persistent breast or nipple pain",
  "Redness, scaling, or swelling of the breast skin",
];

const mythsAndFacts = [
  {
    myth: "Breast cancer only affects older women.",
    fact: "Breast cancer can affect women of any age. All women should stay aware of changes in their bodies.",
  },
  {
    myth: "If you have no family history, you are not at risk.",
    fact: "Most women diagnosed with breast cancer have no family history. Regular awareness and check-ups matter for everyone.",
  },
  {
    myth: "A lump always means cancer.",
    fact: "Many breast lumps are not cancerous, but any new change should be checked by a healthcare professional.",
  },
  {
    myth: "Breast self-exams replace medical screening.",
    fact: "Self-awareness is helpful, but it does not replace professional screening and clinical examinations.",
  },
];

const selfExamSteps = [
  "Look at your breasts in the mirror with your arms at your sides, then raised.",
  "Check for visible changes in size, shape, or skin texture.",
  "Use the pads of your fingers to feel for lumps or thickening.",
  "Cover the entire breast and underarm area using a circular pattern.",
  "Repeat on both sides, noting any new or unusual changes.",
  "If you notice anything different, contact a healthcare provider promptly.",
];

export default function BreastCancerAwarenessPage() {
  return (
    <>
      <Hero
        title="Breast Cancer Awareness"
        eyebrow="Education & Early Detection"
        description="Understanding breast cancer, recognizing early signs, and knowing when to seek help can make a life-saving difference."
        compact
      />

      <Section className="py-8 md:py-10">
        <DisclaimerBanner />
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionTitle eyebrow="Understanding" title="What is breast cancer?" />
            <p className="mt-6 leading-relaxed text-grey-muted">
              Breast cancer occurs when cells in the breast grow in an uncontrolled way.
              It can begin in different parts of the breast and may spread to nearby
              tissue or other parts of the body if not detected and treated early.
            </p>
            <p className="mt-4 leading-relaxed text-grey-muted">
              While a breast cancer diagnosis can feel overwhelming, early detection
              and modern treatment options offer hope. Awareness and regular health
              checks are important steps every woman can take.
            </p>
          </div>
          <PlaceholderImage label="Breast cancer awareness image" className="aspect-[4/3] w-full" />
        </div>
      </Section>

      <Section variant="accent">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="Early Detection"
            title="Why early detection matters"
            subtitle="Finding breast cancer early often means more treatment options and better outcomes."
          />
          <p className="mt-6 leading-relaxed text-grey-muted">
            Early detection through self-awareness, clinical exams, and recommended
            screening helps identify changes before they become more serious. When women
            know what to look for and feel confident seeking help, they are more likely
            to receive timely care from qualified health professionals.
          </p>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Know the Signs"
          title="Common signs and symptoms"
          subtitle="Contact a healthcare provider if you notice any of the following."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {symptoms.map((symptom) => (
            <li
              key={symptom}
              className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface p-4"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink text-[10px] font-bold text-white">
                !
              </span>
              <span className="text-sm leading-relaxed text-grey-dark">{symptom}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section variant="muted">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="Screening"
            title="Importance of screening"
            subtitle="Regular screening helps detect changes that may not be visible or felt during self-checks."
          />
          <p className="mt-6 leading-relaxed text-grey-muted">
            Screening recommendations may vary based on age, health history, and medical
            advice. Speak with a qualified healthcare professional about the screening
            schedule that is right for you. Screening is an important part of preventive
            care — not something to postpone out of fear or uncertainty.
          </p>
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="Self-Care" title="Breast self-examination education" />
        <p className="mt-4 max-w-3xl text-grey-muted">
          Self-examination helps you become familiar with how your breasts normally look
          and feel, so you can notice changes more quickly.
        </p>
        <ol className="mt-10 space-y-3">
          {selfExamSteps.map((step, index) => (
            <li
              key={step}
              className="flex gap-4 rounded-xl border border-purple-light/70 bg-surface p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple text-sm font-bold text-white">
                {index + 1}
              </span>
              <span className="text-sm leading-relaxed text-grey-dark">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section variant="accent">
        <SectionTitle eyebrow="Facts" title="Myths and facts" centered />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {mythsAndFacts.map((item) => (
            <div
              key={item.myth}
              className="rounded-2xl border border-border-subtle bg-surface p-6"
            >
              <p className="text-sm font-semibold text-pink-dark">Myth: {item.myth}</p>
              <p className="mt-3 text-sm leading-relaxed text-grey-muted">
                <strong className="text-grey-dark">Fact:</strong> {item.fact}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="dark" className="py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            eyebrow="Take Action"
            title="When to seek medical help"
            subtitle="If you notice any new or unusual changes in your breasts, do not wait. Contact a qualified healthcare professional as soon as possible."
            centered
            light
          />
        </div>
      </Section>
    </>
  );
}
