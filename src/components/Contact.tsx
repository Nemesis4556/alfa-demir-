import { business } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const mapQuery = encodeURIComponent(
  `${business.address}, ${business.city}, Türkiye`
);
const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
const mapsEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

export default function Contact() {
  const { ref: leftRef, isVisible: leftVisible } = useReveal<HTMLDivElement>();
  const { ref: rightRef, isVisible: rightVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="iletisim" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="font-display uppercase text-3xl sm:text-5xl text-charcoal tracking-wide mb-10 sm:mb-14">
          İletişime Geçin
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div ref={leftRef} className={`reveal ${leftVisible ? "is-visible" : ""}`}>
            <p className="font-display uppercase text-2xl sm:text-3xl text-charcoal tracking-wide">
              {business.name}
            </p>

            <a
              href={`tel:${business.phoneTel}`}
              className="mt-5 inline-block text-copper text-2xl sm:text-3xl font-medium hover:text-copper-light transition-colors duration-200 rounded-sm"
            >
              {business.phoneDisplay}
            </a>

            <div className="mt-6 text-steel text-base sm:text-lg leading-relaxed">
              <p>{business.address}</p>
              <p>{business.city}</p>
            </div>

            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-charcoal text-base hover:text-copper transition-colors duration-200 rounded-sm"
            >
              {business.instagramHandle}
            </a>

            <div className="mt-8">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-charcoal/20 hover:border-copper hover:text-copper text-charcoal text-sm font-medium uppercase tracking-wide px-6 py-3.5 transition-colors duration-200 rounded-sm"
              >
                Yol Tarifi Al <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div ref={rightRef} className={`reveal-scale ${rightVisible ? "is-visible" : ""}`}>
            <div className="aspect-[4/3] sm:aspect-[16/11] w-full border border-charcoal/10 overflow-hidden">
              <iframe
                title="Alfa Demir Doğrama Konum"
                src={mapsEmbedUrl}
                className="w-full h-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
