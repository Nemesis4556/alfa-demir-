import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { blogPosts } from "../data/blog";
import { business } from "../data/content";
import { buildBreadcrumbList } from "../lib/schema";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <Seo
        title="Blog | Demir Doğrama, PVC Doğrama ve Metal İşleri Rehberi | Alfa Metal"
        description="İzmir'de demir doğrama, PVC doğrama, korkuluk, merdiven ve otomatik kapı sistemleri hakkında fiyat rehberleri, karşılaştırmalar ve bakım ipuçları."
        path="/blog"
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
            Blog
          </h1>
          <p className="mt-6 text-steel-light text-base sm:text-lg max-w-2xl">
            Demir doğrama, PVC doğrama ve metal imalat hakkında fiyat
            rehberleri, karşılaştırmalar ve pratik bilgiler.
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex flex-col gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group grid sm:grid-cols-[220px_1fr] gap-5 sm:gap-8 border border-charcoal/10 hover:border-copper transition-colors duration-300 rounded-sm overflow-hidden"
              >
                <div className="aspect-[16/10] sm:aspect-auto sm:h-full overflow-hidden bg-light-gray">
                  <img
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:py-6 sm:pr-6">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-copper">
                    <span>{post.category}</span>
                    <span className="text-steel/50" aria-hidden="true">
                      ·
                    </span>
                    <time dateTime={post.publishDate}>
                      {formatDate(post.publishDate)}
                    </time>
                  </div>
                  <h2 className="font-display uppercase text-xl sm:text-2xl text-charcoal tracking-wide mt-3">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-steel text-sm sm:text-base">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-copper text-sm font-medium uppercase tracking-wide">
                    Devamını Oku
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
