import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

export interface FaqAccordionItem {
  q: string;
  a: string;
}

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

function FaqRow({
  item,
  index,
  idPrefix,
  isOpen,
  onToggle,
}: {
  item: FaqAccordionItem;
  index: number;
  idPrefix: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const panelId = `${idPrefix}-panel-${index}`;
  const buttonId = `${idPrefix}-button-${index}`;

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

/** Tekrar kullanılabilir SSS akordeonu. Hem ana sayfa hem de hizmet/blog
 * sayfalarında aynı görsel dilde soru-cevap bloğu oluşturmak için kullanılır. */
export default function FaqAccordion({
  items,
  idPrefix = "faq",
}: {
  items: readonly FaqAccordionItem[];
  idPrefix?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => (
        <FaqRow
          key={item.q}
          item={item}
          index={i}
          idPrefix={idPrefix}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
