# Alfa Metal — Web Sitesi

İzmir demir doğrama / PVC doğrama / metal imalat firması Alfa Metal için
React + Vite ile geliştirilmiş, SEO ve GEO (AI cevap motoru optimizasyonu)
odaklı çok sayfalı web sitesi.

## Site Yapısı

```
/                                    → Ana sayfa (tek sayfa; bölümler anchor ile: #hizmetler, #hakkimizda, #sss, #iletisim)
/hizmetler                           → Tüm hizmetlerin listelendiği hub sayfası
/hizmetler/:slug                     → Her hizmet için ayrı, indexlenebilir detay sayfası (8 adet)
/blog                                → Blog yazıları listesi
/blog/:slug                          → Tekil blog yazısı (5 adet)
```

Rota tanımları: `src/App.tsx`. İçerik verisi: `src/data/servicesDetail.ts`
(hizmet sayfaları) ve `src/data/blog.ts` (blog yazıları).

## SEO / GEO Mimarisi

- **Sayfa başına meta veri**: Her sayfa `src/components/Seo.tsx` üzerinden
  kendi title/description/canonical/OG/Twitter etiketlerini ve JSON-LD
  yapısal verisini (`BreadcrumbList`, `Service`, `Article`, `FAQPage`)
  ayarlar. Şema üreticileri `src/lib/schema.ts` içindedir.
- **Statik anlık görüntüler (prerender)**: Site istemci tarafında (React)
  render edildiği için, `npm run build` komutu son adımda
  `scripts/prerender.ts` dosyasını çalıştırır. Bu script, `src/data/*`
  içeriğini doğrudan okuyarak **her rota için bağımsız, tam statik bir
  `index.html`** üretir (`dist/hizmetler/...`, `dist/blog/...` vb.).
  Böylece JavaScript çalıştırmayan botlar (bazı GPTBot/ClaudeBot/
  PerplexityBot yapılandırmaları dahil) da doğru başlık, açıklama ve
  içeriği görür. React yüklendiğinde bu statik içerik otomatik olarak
  gerçek arayüzle değiştirilir — davranış ana sayfadaki mevcut yaklaşımla
  birebir aynıdır.
- **robots.txt / sitemap.xml / llms.txt**: `public/` klasöründe. Yeni bir
  hizmet veya blog yazısı eklediğinizde bu üç dosyayı da güncelleyin.

## Yeni Hizmet Sayfası Eklemek

1. `src/data/servicesDetail.ts` içine yeni bir `ServiceDetail` nesnesi ekleyin.
2. `src/data/content.ts` > `services` dizisine aynı `slug` ile bir kayıt ekleyin
   (ana sayfadaki hizmet listesi kartı için).
3. `public/sitemap.xml` ve `public/llms.txt` dosyalarına yeni URL'yi ekleyin.
4. `npm run build` — prerender script otomatik olarak yeni statik sayfayı üretir.

## Yeni Blog Yazısı Eklemek

1. `src/data/blog.ts` içine yeni bir `BlogPost` nesnesi ekleyin
   (isteğe bağlı: `relatedServiceSlug` ile ilgili hizmete çapraz link verin).
2. `public/sitemap.xml` ve `public/llms.txt` dosyalarına yeni URL'yi ekleyin.
3. `npm run build`.

## Yayına Alma (Hosting) Notu

`npm run build` çıktısı (`dist/`) her rota için gerçek bir `index.html`
dosyası içerdiğinden, statik hosting (Netlify, Vercel, Cloudflare Pages,
Nginx vb.) üzerinde **ekstra bir SPA "rewrite" kuralına ihtiyaç yoktur** —
her rota zaten kendi dizininde bir `index.html` olarak durur. Yine de,
tanımlı olmayan bir yol için 404 durum kodu döndürmek isterseniz hosting
sağlayıcınızda özel bir 404 sayfası tanımlayabilirsiniz (uygulama içindeki
`src/pages/NotFound.tsx` `noindex` meta etiketiyle birlikte gelir).

## Geliştirme

```bash
npm install
npm run dev      # geliştirme sunucusu
npm run build    # tip kontrolü + üretim derlemesi + statik SEO/GEO anlık görüntüleri
npm run preview  # üretim derlemesini yerel olarak sun
```

Bu proje React 19 + TypeScript + Vite + Tailwind CSS v4 ile oluşturulmuştur.
