import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import FaqAccordion from "../components/FaqAccordion";
import { getPostBySlug } from "../data/blog";
import { getServiceBySlug } from "../data/servicesDetail";
import { business } from "../data/content";
import { buildArticleSchema, buildBreadcrumbList, buildFaqSchema } from "../lib/schema";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedService = post.relatedServiceSlug
    ? getServiceBySlug(post.relatedServiceSlug)
    : undefined;

  const breadcrumbItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <Seo
        title={`${post.title} | Alfa Metal Blog`}
        description={post.seoDescription}
        path={`/blog/${post.slug}`}
        ogImage={post.coverImage}
        jsonLd={[
          buildBreadcrumbList(breadcrumbItems),
          buildArticleSchema(post),
          buildFaqSchema(post.faq),
        ]}
      />

      <article className="bg-warm-white">
        <header className="bg-charcoal pt-28 pb-14 sm:pt-36 sm:pb-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            <span className="font-mono text-copper-light text-xs sm:text-sm tracking-[0.25em] uppercase">
              {post.category}
            </span>
            <h1 className="font-display uppercase text-warm-white text-3xl sm:text-5xl tracking-wide leading-[1.05] mt-3">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-steel-light text-xs sm:text-sm">
              <time dateTime={post.publishDate}>
                Yayın: {formatDate(post.publishDate)}
              </time>
              <span aria-hidden="true">·</span>
              <time dateTime={post.updatedDate}>
                Güncelleme: {formatDate(post.updatedDate)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} okuma</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 sm:px-8 -mt-8 sm:-mt-10 relative z-10">
          <div className="aspect-[16/9] overflow-hidden rounded-sm border border-charcoal/10 shadow-[0_22px_45px_-18px_rgba(21,15,11,0.35)]">
            <img
              src={post.coverImage}
              alt={post.coverImageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16">
          <p className="text-steel text-base sm:text-lg leading-relaxed mb-10">
            {post.excerpt}
          </p>

          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="font-display uppercase text-xl sm:text-2xl text-charcoal tracking-wide mb-3">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="text-steel text-sm sm:text-base leading-relaxed mb-3"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}

          {relatedService && (
            <div className="mt-12 border border-copper/40 bg-light-gray/40 rounded-sm p-6 sm:p-7">
              <p className="font-mono text-copper text-xs uppercase tracking-widest mb-2">
                İlgili Hizmet
              </p>
              <Link
                to={`/hizmetler/${relatedService.slug}`}
                className="font-display uppercase text-xl sm:text-2xl text-charcoal tracking-wide hover:text-copper transition-colors duration-200 inline-flex items-center gap-2"
              >
                {relatedService.title}
                <span aria-hidden="true">→</span>
              </Link>
              <p className="mt-2 text-steel text-sm sm:text-base">
                Bu hizmet hakkında detaylı bilgi, örnekler ve fiyatı etkileyen
                faktörler için sayfayı ziyaret edin.
              </p>
            </div>
          )}
        </div>

        <section className="bg-warm-white border-t border-charcoal/10 py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display uppercase text-2xl sm:text-3xl text-charcoal tracking-wide mb-2">
              Sık Sorulan Sorular
            </h2>
            <p className="text-steel text-sm sm:text-base mb-8">
              Bu konuyla ilgili merak edilenler.
            </p>
            <FaqAccordion items={post.faq} idPrefix={post.slug} />
          </div>
        </section>

        <section className="relative bg-charcoal-deep py-16 sm:py-20">
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <h2 className="font-display uppercase text-2xl sm:text-4xl text-warm-white tracking-wide">
              Projenizi <span className="text-copper-light">Konuşalım.</span>
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
      </article>
    </>
  );
}
