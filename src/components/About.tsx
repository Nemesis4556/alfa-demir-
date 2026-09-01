import { images } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import CornerFrame from "./CornerFrame";

export default function About() {
  const { ref: textRef, isVisible: textVisible } = useReveal<HTMLDivElement>();
  const { ref: imgRef, isVisible: imgVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="hakkimizda" className="bg-warm-white border-t border-charcoal/10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div
          ref={imgRef}
          className={`reveal-scale ${imgVisible ? "is-visible" : ""} order-1 lg:order-none`}
        >
          <CornerFrame className="block">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={images.about}
                alt={images.aboutAlt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </CornerFrame>
        </div>

        <div ref={textRef} className={`reveal ${textVisible ? "is-visible" : ""}`}>
          <span className="font-mono text-copper text-xs tracking-[0.25em] uppercase">
            Hakkımızda
          </span>
          <h2 className="font-display uppercase text-3xl sm:text-5xl text-charcoal tracking-wide mt-3 leading-[1.05]">
            Sağlam İş.
            <br /> Güvenilir Uygulama.
          </h2>
          <p className="mt-6 text-steel text-base sm:text-lg max-w-lg">
            Alfa Metal, İzmir ve Ege Bölgesi'nde metal işleri ve özel
            uygulama çözümleri sunmaktadır.
          </p>
        </div>
      </div>
    </section>
  );
}
