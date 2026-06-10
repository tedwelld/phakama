import Button from "@/components/Button";
import ContactCard from "@/components/ContactCard";
import CtaBanner from "@/components/CtaBanner";
import Hero from "@/components/Hero";
import Photo from "@/components/Photo";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProgramCard from "@/components/ProgramCard";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Empowering Women Through Health Awareness."
        eyebrow={SITE_TAGLINE}
        description={SITE_DESCRIPTION}
        showImage
        imageSrc="/images/community-women.jpg"
        imageLabel="Women of the Phakama community gathered together"
        primaryCta={{ href: "/breast-cancer-awareness", label: "Learn About Breast Cancer" }}
        secondaryCta={{ href: "/contact", label: "Contact Us" }}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionTitle
              eyebrow="Who We Are"
              title="A trusted voice for women's health in our community."
              subtitle="A community organization dedicated to women's health, breast cancer awareness, and empowerment."
            />
            <p className="mt-6 leading-relaxed text-grey-muted">
              {SITE_NAME} works to educate, support, and empower women through health
              awareness programs, early detection education, and community-based outreach.
              We believe that informed women build healthier families and stronger communities.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <Photo
            src="/images/community-group.jpg"
            alt="Phakama women sharing a moment together"
            className="aspect-[4/3] w-full"
          />
        </div>
      </Section>

      <Section variant="accent">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <PlaceholderImage
            label="Breast cancer awareness"
            className="order-2 aspect-[4/3] w-full lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <SectionTitle
              eyebrow="Awareness"
              title="Breast cancer awareness matters."
              subtitle="Early detection saves lives. Knowledge empowers women to take action for their health."
            />
            <p className="mt-6 leading-relaxed text-grey-muted">
              Breast cancer is one of the most common cancers affecting women worldwide.
              Through education about signs, symptoms, and screening, we help women
              recognize changes early and seek professional medical care without delay.
            </p>
            <div className="mt-8">
              <Button href="/breast-cancer-awareness">Learn About Breast Cancer</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="What We Do"
          title="Our focus areas"
          subtitle="We work across education, awareness, and community support to reach women where they are."
          centered
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <ProgramCard
            title="Breast Cancer Awareness"
            description="Educational campaigns on signs, symptoms, screening, and early detection."
            icon="awareness"
            href="/breast-cancer-awareness"
          />
          <ProgramCard
            title="Women's Health Education"
            description="Workshops and resources on wellness, reproductive health, and preventive care."
            icon="wellness"
            href="/womens-health"
          />
          <ProgramCard
            title="Community Outreach"
            description="Health talks and programs in schools, churches, and local communities."
            icon="outreach"
            href="/programs"
          />
          <ProgramCard
            title="Support & Empowerment"
            description="Encouraging women to prioritize their health and access reliable support."
            icon="volunteer"
            href="/get-involved"
          />
        </div>
      </Section>

      <CtaBanner
        eyebrow="Upcoming Campaign"
        title="Breast Cancer Awareness Month"
        description="Join us as we raise awareness, share life-saving information, and encourage women to prioritize screening and self-care."
        buttonLabel="Join a Campaign"
        buttonHref="/programs"
      />

      <Section variant="muted">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionTitle
              eyebrow="Get Involved"
              title="Support our mission."
              subtitle="Volunteer, partner with us, or support our awareness campaigns."
            />
            <p className="mt-6 leading-relaxed text-grey-muted">
              Whether you want to volunteer your time, invite us for a health talk,
              or support our outreach programs, your involvement makes a difference
              in the lives of women and families in our community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/get-involved" variant="secondary">
                Volunteer With Us
              </Button>
              <Button href="/get-involved" variant="outline">
                Support Our Work
              </Button>
            </div>
          </div>
          <Photo
            src="/images/artisan-reeds.jpg"
            alt="A Phakama member preparing reeds for traditional crafts"
            className="aspect-[4/3] w-full"
          />
        </div>
      </Section>

      <Section className="border-t border-pink-light/50 py-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Reach out to us"
              subtitle="We are here to answer your questions and welcome your support."
            />
            <p className="mt-5 text-sm text-grey-muted">
              Email:{" "}
              <a href={`mailto:${CONTACT.email}`} className="font-semibold text-pink-dark hover:underline">
                {CONTACT.email}
              </a>
              <br />
              Phone:{" "}
              <a href={`tel:${CONTACT.phone}`} className="font-semibold text-purple hover:underline">
                {CONTACT.phoneDisplay}
              </a>
            </p>
          </div>
          <ContactCard variant="compact" />
        </div>
      </Section>
    </>
  );
}
