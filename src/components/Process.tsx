import { process } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function ProcessStep({
  item,
  index,
  isLast,
}: {
  item: (typeof process)[number];
  index: number;
  isLast: boolean;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="relative flex-1 min-w-[140px]">
      <div
        className={`stagger-child ${isVisible ? "is-visible" : ""}`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center gap-3 sm:block">
          <span className="font-mono text-copper text-sm">{item.no}</span>
          {!isLast && (
            <span
              className="sm:hidden h-px flex-1 bg-charcoal/15"
              aria-hidden="true"
            />
          )}
        </div>
        <h3 className="font-display uppercase text-lg sm:text-2xl text-warm-white tracking-wide mt-2 sm:mt-4">
          {item.title}
        </h3>
        <p className="mt-2 text-steel-light text-sm sm:text-base max-w-[220px]">
          {item.desc}
        </p>
      </div>
      {!isLast && (
        <span
          className="hidden sm:block absolute top-2 left-[3.2rem] right-0 h-px overflow-hidden"
          aria-hidden="true"
        >
          <span
            className={`block h-full bg-copper/40 origin-left transition-transform duration-700 ${
              isVisible ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transitionDelay: `${index * 100 + 150}ms` }}
          />
        </span>
      )}
    </div>
  );
}

export default function Process() {
  const { ref: headRef, isVisible: headVisible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2
          ref={headRef}
          className={`reveal ${headVisible ? "is-visible" : ""} font-display uppercase text-3xl sm:text-5xl text-warm-white tracking-wide mb-10 sm:mb-16`}
        >
          Çalışma Süreci
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-6">
          {process.map((item, i) => (
            <ProcessStep
              item={item}
              index={i}
              isLast={i === process.length - 1}
              key={item.no}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
