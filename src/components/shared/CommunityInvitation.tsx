import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

export default function CommunityInvitation({ title, children, href = "/get-involved", label = "Find your way to take part" }: { title: string; children: React.ReactNode; href?: string; label?: string }) {
  return (
    <SectionWrapper background="dark">
      <div className="max-w-3xl border-l-2 border-[var(--accent)] pl-6 md:pl-10">
        <p className="mb-4 text-xs tracking-widest text-[var(--accent)] uppercase">Women’s wellbeing · Community action</p>
        <h2 className="mb-5 font-display text-3xl text-[var(--fg)] md:text-4xl">{title}</h2>
        <div className="space-y-4 leading-relaxed text-[var(--fg-70)]">{children}</div>
        <Link href={href} className="mt-7 inline-block text-sm font-medium text-[var(--accent)] hover:underline">{label} →</Link>
      </div>
    </SectionWrapper>
  );
}
