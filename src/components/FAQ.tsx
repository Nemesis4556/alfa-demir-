import { useState } from "react";
import { faq } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

function FaqItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof faq)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const panelId = `sss-panel-${index}`;
  const buttonId = `sss-button-${index}`;

  return (
    <div
      ref={ref}
      className={`stagger-child ${isVisible ? "is-visible" : ""} border-b border-charcoal/10`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left"
        >
          <span className="font-display text-lg sm:text-xl text-charcoal tracking-wide">
            {item.q}
          </span>
          <span className="text-copper">
            <PlusIcon open={isOpen} />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-steel text-sm sm:text-base leading-relaxed pb-5 sm:pb-6 pr-8 max-w-3xl">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref: headRef, isVisible: headVisible } = useReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="bg-warm-white border-t border-charcoal/10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={headRef} className={`reveal ${headVisible ? "is-visible" : ""} mb-10 sm:mb-14`}>
          <h2 className="font-display uppercase text-3xl sm:text-5xl text-charcoal tracking-wide leading-tight">
            Sık Sorulan Sorular
          </h2>
          <p className="mt-4 text-steel text-base sm:text-lg max-w-2xl">
            İzmir'de demir doğrama, PVC doğrama ve metal imalat hizmetlerimizle
            ilgili en çok merak edilen sorular.
          </p>
        </div>

        <div className="max-w-4xl">
          {faq.map((item, i) => (
            <FaqItem
              item={item}
              index={i}
              key={item.q}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
