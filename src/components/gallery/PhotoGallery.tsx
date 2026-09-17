"use client";

import { useEffect, useRef, useState } from "react";
import SiteImage from "@/components/shared/SiteImage";
import { galleryCategories, galleryPhotos, type GalleryCategory } from "@/data/gallery";

const PAGE_SIZE = 12;

export default function PhotoGallery() {
  const [category, setCategory] = useState<GalleryCategory>("All photos");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const filtered = galleryPhotos.filter((photo) => category === "All photos" || photo.category === category);
  const selectedIndex = filtered.findIndex((photo) => photo.id === selectedId);
  const selected = filtered[selectedIndex];
  const isOpen = selectedId !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function movePhoto(direction: number) {
    const index = (selectedIndex + direction + filtered.length) % filtered.length;
    setSelectedId(filtered[index].id);
  }

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3" role="group" aria-label="Filter gallery photos">
        {galleryCategories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => { setCategory(item); setVisibleCount(PAGE_SIZE); }}
            className={`rounded-full border px-5 py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
              category === item
                ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                : "border-[var(--fg-20)] text-[var(--fg-70)] hover:border-[var(--accent)]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="mb-8 text-sm text-[var(--fg-60)]" role="status">
        Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} photos. Select a photo to view it in full.
      </p>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {filtered.slice(0, visibleCount).map((photo) => (
          <figure key={photo.id} className="mb-6 break-inside-avoid overflow-hidden rounded-sm border border-[var(--fg-10)] bg-[var(--bg-surface)]">
            <button
              type="button"
              onClick={() => setSelectedId(photo.id)}
              aria-label={`View photo: ${photo.alt}`}
              aria-haspopup="dialog"
              className="block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              <SiteImage src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="h-auto w-full" />
            </button>
            <figcaption className="p-5">
              <p className="mb-2 text-xs tracking-widest text-[var(--accent)] uppercase">{photo.category}</p>
              <p className="text-sm leading-relaxed text-[var(--fg-70)]">{photo.alt}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      {visibleCount < filtered.length && (
        <div className="mt-10 text-center">
          <button type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)} className="rounded border border-[var(--accent)] px-8 py-4 text-sm text-[var(--fg)] hover:bg-[var(--accent)] hover:text-white">
            Show more photos
          </button>
        </div>
      )}
      <dialog
        ref={dialogRef}
        aria-labelledby="gallery-photo-caption"
        onClose={() => setSelectedId(null)}
        onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); movePhoto(-1); }
          if (event.key === "ArrowRight") { event.preventDefault(); movePhoto(1); }
        }}
        data-lenis-prevent
        className="fixed inset-0 m-auto max-h-[95dvh] w-[min(96vw,1100px)] max-w-none overflow-y-auto rounded-sm border border-white/20 bg-[#0f1419] p-4 text-white shadow-2xl backdrop:bg-black/85 sm:p-6"
      >
        {selected && (
          <>
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm text-white/70" aria-live="polite">Photo {selectedIndex + 1} of {filtered.length}</p>
              <button type="button" autoFocus onClick={() => dialogRef.current?.close()} className="rounded border border-white/30 px-4 py-2 text-sm hover:bg-white/10" aria-label="Close photo viewer">Close ×</button>
            </div>
            <div className="relative h-[60dvh] sm:h-[68dvh]">
              <SiteImage src={selected.src} alt={selected.alt} fill loading="eager" sizes="(max-width: 1100px) 95vw, 1050px" className="object-contain" />
            </div>
            <p id="gallery-photo-caption" className="mt-4 text-center text-sm leading-relaxed text-white/80" aria-live="polite">{selected.alt}</p>
            <div className="mt-5 flex justify-between gap-4">
              <button type="button" onClick={() => movePhoto(-1)} className="rounded border border-white/30 px-5 py-3 text-sm hover:bg-white/10">← Previous</button>
              <button type="button" onClick={() => movePhoto(1)} className="rounded border border-white/30 px-5 py-3 text-sm hover:bg-white/10">Next →</button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
