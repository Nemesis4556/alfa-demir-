// scripts/prerender.ts
//
// `vite build` yalnızca "/" için tam bir index.html üretir (SPA). Google ve
// Bing gibi motorlar JavaScript çalıştırıp React içeriğini görebilse de,
// bazı AI/cevap motoru botları (GEO hedefi) JavaScript çalıştırmayabilir.
// Bu script, build çıktısındaki dist/index.html'i şablon olarak kullanıp
// her yeni rota (/hizmetler, /hizmetler/:slug, /blog, /blog/:slug) için
// kendi başlık/açıklama/canonical/OG/JSON-LD ve statik yedek içeriğe sahip
// bağımsız bir index.html dosyası üretir. React yüklendiğinde bu statik
// içerik, ilgili sayfa bileşeniyle aynı şekilde değiştirilir.
//
// Kullanım: `npm run build` (package.json "build" script'i bunu otomatik
// çalıştırır). Veri kaynağı doğrudan src/data/* dosyalarıdır — ayrı bir
// kopya tutulmaz.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { business } from "../src/data/content";
import { servicesDetail, type ServiceDetail } from "../src/data/servicesDetail";
import { blogPosts, type BlogPost } from "../src/data/blog";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://www.alfaametal.com.tr";
const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1509024368907-57294758cfc5?auto=format&fit=crop&w=1200&q=80";

const template = readFileSync(path.join(DIST, "index.html"), "utf-8");

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(s: string) {
  return escapeHtml(s).replace(/\n/g, " ");
}

interface RouteInput {
  path: string; // "/hizmetler/demir-dograma-izmir"
  title: string;
  description: string;
  ogImage?: string;
  type?: "website" | "article";
  jsonLd: Record<string, unknown>[];
  bodyHtml: string;
}

function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

function serviceSchema(service: ServiceDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.seoTitle,
    description: service.seoDescription,
    areaServed: { "@type": "City", name: "İzmir" },
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneTel,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address,
        addressLocality: business.city,
        addressCountry: "TR",
      },
      url: SITE_URL,
    },
    url: `${SITE_URL}/hizmetler/${service.slug}`,
  };
}

function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    image: post.coverImage,
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    author: { "@type": "Organization", name: business.name },
    publisher: { "@type": "Organization", name: business.name },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

function serviceFallbackBody(service: ServiceDetail): string {
  return `
      <header>
        <nav aria-label="Breadcrumb"><a href="/">Ana Sayfa</a> / <a href="/hizmetler">Hizmetler</a> / ${escapeHtml(service.title)}</nav>
        <h1>${escapeHtml(service.h1)}</h1>
        ${service.intro.map((p) => `<p>${escapeHtml(p)}</p>`).join("\n        ")}
      </header>
      <main>
        <section>
          <h2>Neler Sunuyoruz?</h2>
          <ul>
            ${service.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("\n            ")}
          </ul>
        </section>
        <section>
          <h2>${escapeHtml(service.title)} Hakkında Sık Sorulanlar</h2>
          ${service.faq.map((f) => `<p><strong>${escapeHtml(f.q)}</strong> ${escapeHtml(f.a)}</p>`).join("\n          ")}
        </section>
        <section>
          <h2>İletişim</h2>
          <p>
            Telefon: <a href="tel:${business.phoneTel}">${business.phoneDisplay}</a> ·
            WhatsApp: <a href="${business.whatsappUrl}">${business.whatsappUrl}</a> ·
            Adres: ${escapeHtml(business.address)}, ${escapeHtml(business.city)}
          </p>
        </section>
      </main>`;
}

function blogPostFallbackBody(post: BlogPost): string {
  return `
      <header>
        <nav aria-label="Breadcrumb"><a href="/">Ana Sayfa</a> / <a href="/blog">Blog</a> / ${escapeHtml(post.title)}</nav>
        <h1>${escapeHtml(post.title)}</h1>
        <p>${escapeHtml(post.excerpt)}</p>
      </header>
      <main>
        ${post.sections
          .map(
            (s) =>
              `<section><h2>${escapeHtml(s.heading)}</h2>${s.paragraphs
                .map((p) => `<p>${escapeHtml(p)}</p>`)
                .join("")}</section>`
          )
          .join("\n        ")}
        <section>
          <h2>Sık Sorulan Sorular</h2>
          ${post.faq.map((f) => `<p><strong>${escapeHtml(f.q)}</strong> ${escapeHtml(f.a)}</p>`).join("\n          ")}
        </section>
      </main>`;
}

const routes: RouteInput[] = [];

// /hizmetler (hub sayfası)
routes.push({
  path: "/hizmetler",
  title: "İzmir Demir Doğrama, PVC Doğrama ve Metal İmalat Hizmetleri | Alfa Metal",
  description:
    "İzmir'de demir doğrama, PVC doğrama, korkuluk, merdiven, çatı/sundurma, metal imalat ve otomatik kapı/kepenk hizmetlerinin tamamı. Detaylı bilgi ve ücretsiz keşif için tıklayın.",
  jsonLd: [breadcrumbSchema([{ name: "Ana Sayfa", path: "/" }, { name: "Hizmetler", path: "/hizmetler" }])],
  bodyHtml: `
      <header>
        <h1>Hizmetlerimiz</h1>
        <p>İzmir ve Ege Bölgesi'nde demir doğrama, PVC doğrama ve metal imalatın tüm alanlarında ölçüye özel çözümler sunuyoruz.</p>
      </header>
      <main>
        <ul>
          ${servicesDetail
            .map((s) => `<li><a href="/hizmetler/${s.slug}">${escapeHtml(s.title)}</a> — ${escapeHtml(s.seoDescription)}</li>`)
            .join("\n          ")}
        </ul>
      </main>`,
});

// /hizmetler/:slug
for (const service of servicesDetail) {
  routes.push({
    path: `/hizmetler/${service.slug}`,
    title: service.seoTitle,
    description: service.seoDescription,
    ogImage: service.image,
    type: "article",
    jsonLd: [
      breadcrumbSchema([
        { name: "Ana Sayfa", path: "/" },
        { name: "Hizmetler", path: "/hizmetler" },
        { name: service.title, path: `/hizmetler/${service.slug}` },
      ]),
      serviceSchema(service),
      faqSchema(service.faq),
    ],
    bodyHtml: serviceFallbackBody(service),
  });
}

// /blog (hub sayfası)
routes.push({
  path: "/blog",
  title: "Blog | Demir Doğrama, PVC Doğrama ve Metal İşleri Rehberi | Alfa Metal",
  description:
    "İzmir'de demir doğrama, PVC doğrama, korkuluk, merdiven ve otomatik kapı sistemleri hakkında fiyat rehberleri, karşılaştırmalar ve bakım ipuçları.",
  jsonLd: [breadcrumbSchema([{ name: "Ana Sayfa", path: "/" }, { name: "Blog", path: "/blog" }])],
  bodyHtml: `
      <header>
        <h1>Blog</h1>
        <p>Demir doğrama, PVC doğrama ve metal imalat hakkında fiyat rehberleri, karşılaştırmalar ve pratik bilgiler.</p>
      </header>
      <main>
        <ul>
          ${blogPosts
            .map((p) => `<li><a href="/blog/${p.slug}">${escapeHtml(p.title)}</a> — ${escapeHtml(p.excerpt)}</li>`)
            .join("\n          ")}
        </ul>
      </main>`,
});

// /blog/:slug
for (const post of blogPosts) {
  routes.push({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Alfa Metal Blog`,
    description: post.seoDescription,
    ogImage: post.coverImage,
    type: "article",
    jsonLd: [
      breadcrumbSchema([
        { name: "Ana Sayfa", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
      articleSchema(post),
      faqSchema(post.faq),
    ],
    bodyHtml: blogPostFallbackBody(post),
  });
}

function renderRoute(route: RouteInput): string {
  const canonicalUrl = `${SITE_URL}${route.path}`;
  const ogImage = route.ogImage ?? DEFAULT_OG_IMAGE;
  let html = template;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeAttr(route.description)}" />`
  );
  html = html.replace(
    /<meta name="robots" content="[^"]*" \/>/,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta property="og:type" content="[^"]*" \/>/,
    `<meta property="og:type" content="${route.type ?? "website"}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${escapeAttr(ogImage)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${escapeAttr(ogImage)}" />`
  );

  // Ana sayfaya özgü LocalBusiness + FAQPage JSON-LD bloklarını rotaya özel
  // JSON-LD (BreadcrumbList + Service/Article + FAQPage) ile değiştir.
  // Not: Vite build sırasında ana JS bundle <script type="module" ...>
  // etiketini <head> içine, JSON-LD bloklarının hemen ardına taşır — bu
  // yüzden kesme noktası olarak o etiketin başlangıcını kullanıyoruz
  // (aksi halde bundle script'i yanlışlıkla silinir).
  const jsonLdStart = html.indexOf("<!-- LocalBusiness yapısal verisi");
  const moduleScriptIdx = html.indexOf('<script type="module"');
  if (jsonLdStart !== -1 && moduleScriptIdx !== -1 && moduleScriptIdx > jsonLdStart) {
    const newJsonLd = route.jsonLd
      .map(
        (obj) =>
          `<script type="application/ld+json">${JSON.stringify(obj)}</script>`
      )
      .join("\n    ");
    html =
      html.slice(0, jsonLdStart) +
      newJsonLd +
      "\n    " +
      html.slice(moduleScriptIdx);
  }

  // #root içindeki statik yedek içeriği rotaya özel içerikle değiştir.
  // (Bundle script artık <head> içinde olduğundan, kapanışı </body>
  // referans alınarak bulunur.)
  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>\s*(?=<\/body>)/,
    `<div id="root">${route.bodyHtml}\n    </div>\n    `
  );

  return html;
}

let count = 0;
for (const route of routes) {
  const html = renderRoute(route);
  const outDir = path.join(DIST, route.path.replace(/^\//, ""));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
  count++;
}

console.log(`[prerender] ${count} statik rota HTML dosyası üretildi (dist/**/index.html).`);
