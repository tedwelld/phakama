import SiteImage from "@/components/shared/SiteImage";
import { communityUpdates } from "@/data/updates";

export default function CommunityUpdates({ limit }: { limit?: number }) {
  const updates = limit ? communityUpdates.slice(0, limit) : communityUpdates;
  return (
    <div className={`grid gap-8 ${limit === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
      {updates.map((update) => (
        <article key={update.slug} id={update.slug} className="flex scroll-mt-28 flex-col overflow-hidden rounded-sm border border-[var(--fg-10)] bg-[var(--bg-surface)]">
          <figure>
            <div className="relative aspect-[4/3] bg-black/10">
              <SiteImage src={update.image} alt={update.imageAlt} fill className="object-contain" sizes={limit === 3 ? "(max-width: 1023px) 100vw, 33vw" : "(max-width: 767px) 100vw, 50vw"} />
            </div>
            <figcaption className="border-b border-[var(--fg-10)] px-6 py-3 text-xs leading-relaxed text-[var(--fg-60)]">Illustrative photo from our community collection; event photo not confirmed.</figcaption>
          </figure>
          <div className="flex flex-1 flex-col p-6 md:p-8">
            <p className="mb-3 text-xs tracking-widest text-[var(--accent)] uppercase">{update.category}</p>
            <h3 className="mb-4 font-display text-2xl leading-snug text-[var(--fg)]">{update.title}</h3>
            <p className="mb-2 text-sm text-[var(--fg-70)]">{update.location}</p>
            <p className="mb-5 text-xs text-[var(--fg-60)]">Reported <time dateTime={update.published}>{update.dateLabel}</time></p>
            <p className="mb-6 text-sm leading-relaxed text-[var(--fg-70)]">{update.summary}</p>
            <a href={update.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-auto text-sm text-[var(--accent)] underline-offset-4 hover:underline">Read the report: {update.source} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </article>
      ))}
    </div>
  );
}
