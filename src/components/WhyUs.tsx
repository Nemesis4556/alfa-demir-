import { whyUs } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function WhyCard({ item, index }: { item: (typeof whyUs)[number]; index: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`stagger-child ${isVisible ? "is-visible" : ""} bg-light-gray p-6 sm:p-8 rounded-sm shadow-[0_10px_30px_-18px_rgba(33,26,20,0.25)]`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="font-mono text-copper text-xs tracking-widest">
        {item.no}
      </span>
      <h3 className="font-display uppercase text-lg sm:text-xl text-charcoal tracking-wide mt-3">
        {item.title}
      </h3>
      <p className="mt-2 text-steel text-sm sm:text-base">{item.desc}</p>
    </div>
  );
}

export default function WhyUs() {
  const { ref: headRef, isVisible: headVisible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-warm-white border-t border-charcoal/10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2
          ref={headRef}
          className={`reveal ${headVisible ? "is-visible" : ""} font-display uppercase text-3xl sm:text-5xl text-charcoal tracking-wide mb-10 sm:mb-14`}
        >
          Neden Alfa?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {whyUs.map((item, i) => (
            <WhyCard item={item} index={i} key={item.no} />
          ))}
        </div>
      </div>
    </section>
  );
}
