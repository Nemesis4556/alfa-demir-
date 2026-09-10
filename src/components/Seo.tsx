import { useEffect } from "react";

const SITE_URL = "https://www.alfaametal.com.tr";
const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1509024368907-57294758cfc5?auto=format&fit=crop&w=1200&q=80";

type JsonLd = Record<string, unknown>;

export interface SeoProps {
  title: string;
  description: string;
  /** Path starting with "/" — canonical is built from SITE_URL + path */
  path: string;
  ogImage?: string;
  /** One or more JSON-LD objects to inject as <script type="application/ld+json"> */
  jsonLd?: JsonLd | JsonLd[];
  noindex?: boolean;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
  return el;
}

/**
 * İstemci tarafında sayfa başlığı, meta açıklaması, canonical, OG/Twitter
 * etiketleri ve JSON-LD yapısal verisini günceller. Her rota kendi Seo
 * bileşenini render ederek arama motorlarına ve AI cevap motorlarına
 * (GEO) doğru, sayfaya özel sinyaller gönderir.
 *
 * Not: Bu proje istemci tarafında render edildiği için, JavaScript
 * çalıştırmayan botlar için `scripts/prerender.mjs` derleme sonrası her
 * rota için statik bir HTML anlık görüntüsü üretir (bkz. README).
 */
export default function Seo({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
  noindex = false,
}: SeoProps) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    setMeta("name", "description", description);
    setMeta(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"
    );

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const canonicalUrl = `${SITE_URL}${path}`;
    canonical.setAttribute("href", canonicalUrl);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", path === "/" ? "website" : "article");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    const scripts: HTMLScriptElement[] = [];
    const entries = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    entries.forEach((entry) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-injected", "true");
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
      scripts.push(script);
    });

    return () => {
      document.title = prevTitle;
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, path, ogImage, jsonLd, noindex]);

  return null;
}

export { SITE_URL };
