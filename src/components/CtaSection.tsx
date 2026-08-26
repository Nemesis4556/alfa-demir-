import { business, images } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function CtaSection() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-charcoal-deep py-24 sm:py-32 overflow-hidden">
      <img
        src={images.ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.14]"
      />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <h2 className="font-display uppercase text-4xl sm:text-6xl text-warm-white tracking-wide leading-[0.95]">
            Projenizi
            <br />
            <span className="text-copper-light">Konuşalım.</span>
          </h2>
          <p className="mt-6 text-steel-light text-base sm:text-lg max-w-md mx-auto">
            Demir doğrama, PVC doğrama, otomatik kapı/kepenk veya özel metal
            uygulamanız için bizimle iletişime geçin.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-warm-white text-sm sm:text-base font-medium uppercase tracking-wide px-7 py-4 transition-colors duration-200 rounded-sm"
            >
              {business.phoneDisplay}
            </a>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-warm-white text-sm sm:text-base font-medium uppercase tracking-wide px-7 py-4 transition-colors duration-200 rounded-sm"
            >
              WhatsApp'tan Ulaş <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
