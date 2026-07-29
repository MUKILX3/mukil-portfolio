import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { X, Play, ArrowUpRight } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 8;

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [active, setActive] = useState<GalleryItem | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter],
  );
  const shown = filtered.slice(0, visible);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setFilter(category);
              setVisible(PAGE_SIZE);
            }}
            className={cn(
              "label-mono rounded-full border px-4 py-2 transition-all duration-300",
              filter === category
                ? "border-ink bg-primary text-primary-foreground"
                : "border-border bg-card text-ink-soft hover:-translate-y-0.5 hover:text-ink",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        <AnimatePresence mode="popLayout">
          {shown.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid"
            >
              <GalleryCard item={item} onOpen={() => setActive(item)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visible < filtered.length ? (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="label-mono rounded-xl border border-ink/25 bg-card px-6 py-4 shadow-paper transition-transform duration-300 hover:-translate-y-1"
          >
            Load more
          </button>
        </div>
      ) : (
        <p className="handwritten mt-12 text-center text-2xl text-ink-soft">that&apos;s everything — for now!</p>
      )}

      <Lightbox item={active} onClose={() => setActive(null)} />
    </div>
  );
}

function GalleryCard({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <figure className="paper-card paper-lift group relative overflow-hidden rounded-xl p-2">
      <button
        type="button"
        onClick={onOpen}
        className="block w-full overflow-hidden rounded-lg"
        aria-label={`Open ${item.title}`}
        onPointerEnter={() => videoRef.current?.play().catch(() => {})}
        onPointerLeave={() => {
          videoRef.current?.pause();
          if (videoRef.current) videoRef.current.currentTime = 0;
        }}
      >
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          decoding="async"
          style={{ aspectRatio: item.ratio }}
          className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {item.video ? (
          <video
            ref={videoRef}
            src={item.video}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-lg object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        ) : null}
        {item.video ? (
          <span className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-primary/80 text-primary-foreground backdrop-blur-sm">
            <Play className="h-4 w-4" />
          </span>
        ) : null}
      </button>
      <figcaption className="label-mono flex items-center justify-between gap-3 px-2 py-3 text-ink-soft">
        <span className="truncate">{item.title}</span>
        <span className="shrink-0 opacity-60">{item.category}</span>
      </figcaption>
    </figure>
  );
}

function Lightbox({ item, onClose }: { item: GalleryItem | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal
          aria-label={item.title}
          className="fixed inset-0 z-[90] grid place-items-center bg-primary/85 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.96, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="paper-card relative max-h-[88vh] w-full max-w-5xl overflow-auto rounded-xl p-3"
          >
            {item.video ? (
              <video src={item.video} controls autoPlay playsInline className="w-full rounded-lg" />
            ) : (
              <img src={item.src} alt={item.title} className="w-full rounded-lg" />
            )}
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 py-3">
              <div>
                <p className="label-mono text-ink-soft">{item.category}</p>
                <p className="handwritten text-2xl">{item.title}</p>
              </div>
              {item.projectSlug ? (
                <Link
                  to="/projects/$slug"
                  params={{ slug: item.projectSlug }}
                  className="label-mono inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-primary-foreground"
                >
                  Case study <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ) : null}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
