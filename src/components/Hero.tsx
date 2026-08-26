import { useEffect, useState } from "react";
import { business, images } from "../data/content";
import CornerFrame from "./CornerFrame";

const titleLines = ["SAĞLAM", "İŞÇİLİK.", "DOĞRU ÇÖZÜM."];

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="anasayfa"
      className="relative bg-charcoal pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-0 lg:pb-0 lg:min-h-screen lg:flex lg:items-center overflow-hidden"
    >
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Sol: metin */}
        <div className="relative z-10">
          <p
            className={`font-mono text-copper-light text-xs sm:text-sm tracking-[0.25em] uppercase mb-5 transition-all duration-700 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {business.name}
          </p>

          <h1 className="font-display uppercase text-warm-white text-5xl sm:text-6xl lg:text-7xl leading-[0.95] font-semibold">
            <span className="sr-only">
              İzmir Demir Doğrama, PVC Doğrama ve Metal İmalat — Sağlam İşçilik, Doğru Çözüm
            </span>
            {titleLines.map((line, i) => (
              <span key={line} className="block overflow-hidden" aria-hidden="true">
                <span
                  className={`block transition-all duration-700 ease-out ${
                    ready
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full"
                  } ${line === "DOĞRU ÇÖZÜM." ? "text-copper-light" : ""}`}
                  style={{ transitionDelay: `${140 + i * 110}ms` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className={`mt-6 text-steel-light text-base sm:text-lg max-w-md transition-all duration-700 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "480ms" }}
          >
            İzmir ve Ege Bölgesi'nde profesyonel demir doğrama ve metal
            uygulamaları.
          </p>

          <div
            className={`mt-9 flex flex-wrap items-center gap-4 transition-all duration-700 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "580ms" }}
          >
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-warm-white text-sm font-medium uppercase tracking-wide px-6 py-3.5 transition-colors duration-200 rounded-sm"
            >
              Teklif Al <span aria-hidden="true">→</span>
            </a>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-warm-white text-sm font-medium uppercase tracking-wide px-6 py-3.5 transition-colors duration-200 rounded-sm"
            >
              WhatsApp <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Sağ: görsel */}
        <div
          className={`relative transition-all duration-1000 ease-out ${
            ready ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <CornerFrame className="block">
            <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden">
              <img
                src={images.hero}
                alt={images.heroAlt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </CornerFrame>
        </div>
      </div>

      {/* Yumuşak vinyet — salon/vitrin ışığı hissi */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 15%, rgba(201,162,92,0.10) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
