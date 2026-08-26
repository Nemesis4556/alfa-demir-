import { services } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function ServiceRow({ item, index }: { item: (typeof services)[number]; index: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`stagger-child ${isVisible ? "is-visible" : ""} group border-t border-charcoal/10 last:border-b`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <a
        href="#iletisim"
        className="flex items-center gap-5 sm:gap-8 py-6 sm:py-8 px-1 sm:px-2 transition-colors duration-300 hover:bg-charcoal/[0.04]"
      >
        <span className="font-mono text-steel text-sm sm:text-base w-8 sm:w-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-copper">
          {item.no}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-display uppercase text-xl sm:text-3xl text-charcoal tracking-wide">
            {item.title}
          </h3>
          <p className="mt-1 text-steel text-sm sm:text-base max-w-lg">
            {item.desc}
          </p>
        </div>
        <span
          className="hidden sm:inline text-2xl text-charcoal/30 shrink-0 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-copper"
          aria-hidden="true"
        >
          →
        </span>
      </a>
    </div>
  );
}

export default function Services() {
  const { ref: headRef, isVisible: headVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="hizmetler" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div
          ref={headRef}
          className={`reveal ${headVisible ? "is-visible" : ""} flex items-end justify-between mb-4 sm:mb-8`}
        >
          <h2 className="font-display uppercase text-3xl sm:text-5xl text-charcoal tracking-wide">
            Hizmetlerimiz
          </h2>
          <span className="hidden sm:block font-mono text-xs text-steel tracking-widest uppercase">
            01 — 08
          </span>
        </div>

        <div>
          {services.map((item, i) => (
            <ServiceRow item={item} index={i} key={item.no} />
          ))}
        </div>
      </div>
    </section>
  );
}
