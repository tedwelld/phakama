import Link from "next/link";
import { initiativeStories } from "@/data/stories";

export default function InitiativeStories({ expanded = false }: { expanded?: boolean }) {
  return (
    <div className={`grid gap-6 ${expanded ? "" : "lg:grid-cols-3"}`}>
      {initiativeStories.map((story, index) => (
        <article key={story.slug} id={story.slug} className="scroll-mt-28 rounded-sm border border-[var(--fg-10)] bg-[var(--bg-surface)] p-7 md:p-10">
          <p className="mb-5 text-xs tracking-widest text-[var(--accent)] uppercase">0{index + 1} / {story.category}</p>
          <h3 className="mb-5 font-display text-3xl leading-tight text-[var(--fg)]">{story.title}</h3>
          <p className="mb-6 leading-relaxed text-[var(--fg-70)]">{story.summary}</p>
          {expanded && <div className="mb-8 max-w-3xl space-y-4 text-[var(--fg-70)]">{story.paragraphs.map((paragraph) => <p key={paragraph} className="leading-relaxed">{paragraph}</p>)}</div>}
          <Link href={expanded ? "/contact" : `/updates#${story.slug}`} className="inline-block text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline">{expanded ? story.action : "Read the story"} →</Link>
        </article>
      ))}
    </div>
  );
}
