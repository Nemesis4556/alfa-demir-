import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import FaqAccordion from "../components/FaqAccordion";
import CornerFrame from "../components/CornerFrame";
import { getServiceBySlug, servicesDetail } from "../data/servicesDetail";
import { blogPosts } from "../data/blog";
import { business } from "../data/content";
import { buildBreadcrumbList, buildFaqSchema, buildServiceSchema } from "../lib/schema";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/hizmetler" replace />;
  }

  const breadcrumbItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: service.title, path: `/hizmetler/${service.slug}` },
  ];

  const relatedServices = servicesDetail
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const relatedPosts = blogPosts.filter(
    (p) => p.relatedServiceSlug === service.slug
  );

  return (
    <>
      <Seo
        title={service.seoTitle}
        description={service.seoDescription}
        path={`/hizmetler/${service.slug}`}
        ogImage={service.image}
        jsonLd={[
          buildBreadcrumbList(breadcrumbItems),
          buildServiceSchema(service),
          buildFaqSchema(service.faq),
        ]}
      />

      <section className="relative bg-charcoal pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div>
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            <span className="font-mono text-copper-light text-xs sm:text-sm tracking-[0.25em] uppercase">
              {business.name} — Hizmet {service.no}
            </span>
            <h1 className="font-display uppercase text-warm-white text-4xl sm:text-6xl tracking-wide leading-[0.98] mt-3">
              {service.h1}
            </h1>
            {service.intro.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-5 text-steel-light text-base sm:text-lg max-w-xl"
              >
                {p}
              </p>
            ))}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#iletisim-cta"
                className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-warm-white text-sm font-medium uppercase tracking-wide px-6 py-3.5 transition-colors duration-200 rounded-sm"
              >
                Ücretsiz Keşif İste <span aria-hidden="true">→</span>
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

          <CornerFrame className="block">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </CornerFrame>
        </div>
      </section>

      <section className="bg-warm-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="font-display uppercase text-2xl sm:text-4xl text-charcoal tracking-wide mb-8">
            Neler Sunuyoruz?
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {service.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 bg-light-gray/50 border border-charcoal/10 rounded-sm p-4 sm:p-5"
              >
                <span className="text-copper mt-0.5" aria-hidden="true">
                  ✓
                </span>
                <span className="text-charcoal text-sm sm:text-base">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-warm-white border-t border-charcoal/10 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-display uppercase text-2xl sm:text-4xl text-charcoal tracking-wide mb-2">
            {service.title} Hakkında Sık Sorulanlar
          </h2>
          <p className="text-steel text-sm sm:text-base mb-8">
            Bu hizmetle ilgili en çok merak edilen sorular.
          </p>
          <FaqAccordion items={service.faq} idPrefix={service.slug} />
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-light-gray/40 border-t border-charcoal/10 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="font-display uppercase text-2xl sm:text-3xl text-charcoal tracking-wide mb-8">
              İlgili Yazılar
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="block border border-charcoal/10 hover:border-copper bg-warm-white transition-colors duration-300 p-5 rounded-sm"
                >
                  <span className="font-mono text-copper text-xs uppercase tracking-widest">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg text-charcoal tracking-wide mt-2">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-warm-white border-t border-charcoal/10 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="font-display uppercase text-2xl sm:text-3xl text-charcoal tracking-wide mb-8">
            Diğer Hizmetlerimiz
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                to={`/hizmetler/${s.slug}`}
                className="block border border-charcoal/10 hover:border-copper transition-colors duration-300 p-5 rounded-sm"
              >
                <span className="font-mono text-copper text-xs">{s.no}</span>
                <p className="font-display uppercase text-base text-charcoal tracking-wide mt-2">
                  {s.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="iletisim-cta"
        className="relative bg-charcoal-deep py-20 sm:py-28 overflow-hidden"
      >
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display uppercase text-3xl sm:text-5xl text-warm-white tracking-wide leading-[0.95]">
            {service.title} İçin
            <br />
            <span className="text-copper-light">Teklif Alın.</span>
          </h2>
          <p className="mt-6 text-steel-light text-base sm:text-lg max-w-md mx-auto">
            İzmir genelinde ücretsiz keşif ve ölçü için hemen arayın veya
            WhatsApp'tan yazın.
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
      </section>
    </>
  );
}
