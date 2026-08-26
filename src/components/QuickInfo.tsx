import { business } from "../data/content";

const items = [
  "İZMİR & EGE BÖLGESİ",
  "DEMİR DOĞRAMA & PVC",
  "OTOMATİK KAPI & KEPENK",
  business.phoneDisplay,
];

export default function QuickInfo() {
  return (
    <div className="bg-warm-white border-b border-charcoal/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-x-3">
            <span
              className={`font-mono text-xs sm:text-sm tracking-widest uppercase ${
                i === items.length - 1
                  ? "text-copper font-medium"
                  : "text-steel"
              }`}
            >
              {item}
            </span>
            {i < items.length - 1 && (
              <span className="text-charcoal/15" aria-hidden="true">
                |
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
