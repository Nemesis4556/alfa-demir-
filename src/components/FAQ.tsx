import { faq } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import FaqAccordion from "./FaqAccordion";

export default function FAQ() {
  const { ref: headRef, isVisible: headVisible } = useReveal<HTMLDivElement>();

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
          <FaqAccordion items={faq} idPrefix="sss" />
        </div>
      </div>
    </section>
  );
}
