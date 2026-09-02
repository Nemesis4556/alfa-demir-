import { images } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import CornerFrame from "./CornerFrame";

function GalleryItem({
  item,
  className = "",
}: {
  item: (typeof images.gallery)[number];
  className?: string;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal-scale ${isVisible ? "is-visible" : ""} group relative overflow-hidden ${className}`}
    >
      <CornerFrame className="block h-full">
        <div className="relative h-full overflow-hidden">
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-end p-5">
            <span className="text-warm-white text-sm font-medium uppercase tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              Projeyi İncele →
            </span>
          </div>
        </div>
      </CornerFrame>
    </div>
  );
}

export default function Projects() {
  const { ref: headRef, isVisible: headVisible } = useReveal<HTMLDivElement>();
  const [large, ...rest] = images.gallery;

  return (
    <section id="projeler" className="bg-warm-white border-t border-charcoal/10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={headRef}
          className={`reveal ${headVisible ? "is-visible" : ""} mb-10 sm:mb-14`}
        >
          <h2 className="font-display uppercase text-3xl sm:text-5xl text-charcoal tracking-wide leading-tight">
            Gerçek İşler.
            <br className="hidden sm:block" /> Gerçek Sonuçlar.
          </h2>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          <GalleryItem item={large} className="aspect-[16/9] sm:aspect-[21/9]" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {rest.map((item) => (
              <GalleryItem item={item} className="aspect-[4/3]" key={item.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
