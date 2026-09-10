import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import CtaSection from "../components/CtaSection";
import { servicesDetail } from "../data/servicesDetail";
import { business } from "../data/content";
import { buildBreadcrumbList } from "../lib/schema";

export default function ServicesIndex() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
  ];

  return (
    <>
      <Seo
        title="İzmir Demir Doğrama, PVC Doğrama ve Metal İmalat Hizmetleri | Alfa Metal"
        description="İzmir'de demir doğrama, PVC doğrama, korkuluk, merdiven, çatı/sundurma, metal imalat ve otomatik kapı/kepenk hizmetlerinin tamamı. Detaylı bilgi ve ücretsiz keşif için tıklayın."
        path="/hizmetler"
        jsonLd={buildBreadcrumbList(breadcrumbItems)}
      />

      <section className="bg-charcoal pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <span className="font-mono text-copper-light text-xs sm:text-sm tracking-[0.25em] uppercase">
            {business.name}
          </span>
          <h1 className="font-display uppercase text-warm-white text-4xl sm:text-6xl tracking-wide leading-[0.98] mt-3">
            Hizmetlerimiz
          </h1>
          <p className="mt-6 text-steel-light text-base sm:text-lg max-w-2xl">
            İzmir ve Ege Bölgesi'nde demir doğrama, PVC doğrama ve metal
            imalatın tüm alanlarında ölçüye özel çözümler sunuyoruz. Detaylı
            bilgi için bir hizmeti seçin.
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {servicesDetail.map((service) => (
              <Link
                key={service.slug}
                to={`/hizmetler/${service.slug}`}
                className="group block border border-charcoal/10 hover:border-copper bg-light-gray/40 hover:bg-light-gray transition-colors duration-300 p-6 sm:p-7 rounded-sm"
              >
                <span className="font-mono text-copper text-xs tracking-widest">
                  {service.no}
                </span>
                <h2 className="font-display uppercase text-xl sm:text-2xl text-charcoal tracking-wide mt-3">
                  {service.title}
                </h2>
                <p className="mt-2 text-steel text-sm sm:text-base">
                  {service.intro[0].slice(0, 110)}…
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-copper text-sm font-medium uppercase tracking-wide">
                  Detaylı Bilgi
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
