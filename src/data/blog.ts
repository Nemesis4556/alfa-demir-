// /blog ve /blog/:slug sayfaları için içerik verisi.
// Her yazı; arama motorları ve AI cevap motorları (GEO) için net, doğrudan
// cevaplanabilir başlıklar ve kısa paragraflar içerecek şekilde yazılmıştır.

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  seoDescription: string;
  excerpt: string;
  category: string;
  publishDate: string; // ISO
  updatedDate: string; // ISO
  readingTime: string;
  coverImage: string;
  coverImageAlt: string;
  relatedServiceSlug?: string;
  sections: BlogSection[];
  faq: { q: string; a: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "izmir-demir-dograma-fiyatlarini-etkileyen-faktorler",
    title: "İzmir'de Demir Doğrama Fiyatını Etkileyen 5 Faktör",
    seoDescription:
      "İzmir'de demir doğrama fiyatı neye göre değişir? Metretül, profil kalınlığı, malzeme ve yüzey işlemi açısından fiyatı etkileyen etkenleri anlatıyoruz.",
    excerpt:
      "Demir doğrama teklifleri neden birbirinden farklı olur? Fiyatı belirleyen beş temel etkeni kısaca özetledik.",
    category: "Fiyat Rehberi",
    publishDate: "2026-02-10",
    updatedDate: "2026-08-20",
    readingTime: "4 dk",
    coverImage:
      "https://images.unsplash.com/photo-1569888249531-684c7f75b88f?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt: "Özel imalat siyah demir kapı yakın çekim",
    relatedServiceSlug: "demir-dograma-izmir",
    sections: [
      {
        heading: "1. Metretül (m²/mtül) ölçüsü",
        paragraphs: [
          "Demir doğrama fiyatlandırmasında temel birim genellikle metretüldür. Kapı, pencere ya da korkuluk ne kadar büyükse, kullanılan malzeme miktarı da o kadar artar ve fiyat buna göre şekillenir.",
        ],
      },
      {
        heading: "2. Profil kalınlığı",
        paragraphs: [
          "Daha kalın profil, hem daha dayanıklı hem de daha maliyetli bir sonuç verir. Kullanım alanına göre (örneğin dış cephe kapısı ile iç mekân korkuluğu) farklı kalınlıklar tercih edilir.",
        ],
      },
      {
        heading: "3. Malzeme türü",
        paragraphs: [
          "Standart demir, paslanmaz çelik veya alüminyum gibi farklı malzemeler arasında maliyet farkı olur. Paslanmaz çelik genellikle daha yüksek maliyetli ama bakım gerektirmeyen bir seçenektir.",
        ],
      },
      {
        heading: "4. Yüzey işlemi (boya/kaplama)",
        paragraphs: [
          "Elektrostatik boya, sıcak daldırma galvaniz veya paslanmaz yüzey gibi seçenekler hem görünümü hem de ürünün dış hava koşullarına dayanıklılığını etkiler; bu da fiyata yansır.",
        ],
      },
      {
        heading: "5. İşçilik ve montaj koşulları",
        paragraphs: [
          "Yerinde ölçü, taşıma ve montajın zorluk derecesi (kat yüksekliği, erişim koşulları gibi) de teklife dahil edilen unsurlardandır.",
        ],
      },
    ],
    faq: [
      {
        q: "İzmir'de ortalama demir doğrama fiyatı nedir?",
        a: "Fiyat; ölçü, malzeme ve yüzey işlemine göre projeden projeye değişir. Net ve güncel bir rakam için yerinde ücretsiz keşif sonrası teklif veriyoruz.",
      },
      {
        q: "En ucuz seçenek her zaman doğru seçenek midir?",
        a: "Hayır. Düşük kalınlıkta profil veya zayıf yüzey işlemi kısa vadede ucuz görünse de, bakım ve yenileme maliyetini artırabilir. İhtiyacınıza uygun dengeyi birlikte belirleriz.",
      },
    ],
  },
  {
    slug: "pvc-dograma-mi-demir-dograma-mi",
    title: "PVC Doğrama mı, Demir Doğrama mı? Hangisini Seçmeli?",
    seoDescription:
      "PVC doğrama ve demir doğrama arasındaki farklar nelerdir? Isı yalıtımı, dayanıklılık ve kullanım alanına göre doğru seçimi anlatıyoruz.",
    excerpt:
      "Pencere veya kapı yenilerken PVC mi demir mi diye düşünüyorsanız, iki sistemin farkını ve hangi durumda hangisinin öne çıktığını özetledik.",
    category: "Karşılaştırma",
    publishDate: "2026-03-04",
    updatedDate: "2026-08-20",
    readingTime: "5 dk",
    coverImage:
      "https://images.unsplash.com/photo-1695928668952-c3c01a638e1d?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt: "Beyaz çerçeveli PVC pencere sistemi",
    relatedServiceSlug: "pvc-dograma-izmir",
    sections: [
      {
        heading: "Isı ve ses yalıtımı açısından",
        paragraphs: [
          "PVC doğrama, çok odacıklı profil yapısı ve çift cam seçenekleri sayesinde ısı ve ses yalıtımında genellikle öne çıkar. Bu nedenle yaşam alanlarında pencere ve balkon kapılarında sık tercih edilir.",
        ],
      },
      {
        heading: "Dayanıklılık ve özel tasarım açısından",
        paragraphs: [
          "Demir doğrama, yüksek dayanıklılık ve özel ölçü/tasarım gerektiren kapı, korkuluk, merdiven gibi uygulamalarda tercih edilir. Ağır kullanım ve estetik özelleştirme gereken projelerde demir doğrama daha esnek bir çözüm sunar.",
        ],
      },
      {
        heading: "Bakım ihtiyacı",
        paragraphs: [
          "PVC doğrama düşük bakım gerektirirken, demir doğramada yüzey işlemine bağlı olarak periyodik kontrol faydalı olabilir. Paslanmaz çelik veya kaliteli kaplama bu ihtiyacı azaltır.",
        ],
      },
      {
        heading: "Hangi durumda hangisi?",
        paragraphs: [
          "Konut pencereleri ve balkon kapılarında yalıtım önceliğiyse PVC doğrama; giriş kapısı, korkuluk, merdiven ve iş yeri doğramalarında dayanıklılık ve özel tasarım önceliğiyse demir doğrama daha uygun bir seçim olabilir. Karma projelerde iki sistem birlikte de kullanılabilir.",
        ],
      },
    ],
    faq: [
      {
        q: "PVC doğrama demir doğramadan daha mı ucuzdur?",
        a: "Bu, ölçüye, cam/profil seçimine ve malzeme kalitesine göre değişir; kesin karşılaştırma için ikisi için de yerinde keşif sonrası fiyat teklifi almanızı öneririz.",
      },
      {
        q: "Aynı evde hem PVC hem demir doğrama kullanılabilir mi?",
        a: "Evet, örneğin pencerelerde PVC, giriş kapısı ve balkon korkuluğunda demir doğrama tercih edilmesi yaygın bir uygulamadır.",
      },
    ],
  },
  {
    slug: "balkon-korkuluk-secerken-dikkat-edilmesi-gerekenler",
    title: "Balkon Korkuluğu Seçerken Dikkat Edilmesi Gerekenler",
    seoDescription:
      "Balkon korkuluğu yüksekliği, çubuk aralığı ve malzeme seçimi nasıl olmalı? İzmir'de balkon korkuluğu yaptırmadan önce bilinmesi gerekenler.",
    excerpt:
      "Balkon korkuluğu sadece görünüm meselesi değil, güvenlik meselesidir. Doğru yükseklik, aralık ve malzeme seçimi için kısa bir rehber.",
    category: "Rehber",
    publishDate: "2026-04-18",
    updatedDate: "2026-08-22",
    readingTime: "4 dk",
    coverImage:
      "https://images.unsplash.com/photo-1532888033213-9e194587f77b?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt: "Paslanmaz çelik korkuluklu balkon",
    relatedServiceSlug: "korkuluk-izmir",
    sections: [
      {
        heading: "Yükseklik",
        paragraphs: [
          "Balkon korkulukları güvenlik standartları gereği genellikle 90-110 cm aralığında yapılır. Binanın kat yüksekliği ve konumu bu ölçüyü etkileyebilir; kesin ölçü yerinde keşifte belirlenir.",
        ],
      },
      {
        heading: "Çubuk aralığı",
        paragraphs: [
          "Özellikle çocuklu evlerde çubuklar arası boşluğun dar tutulması önemlidir. Bu detay tasarım aşamasında birlikte planlanır.",
        ],
      },
      {
        heading: "Malzeme seçimi",
        paragraphs: [
          "Paslanmaz çelik düşük bakım ister ve deniz kenarına yakın bölgelerde korozyona karşı avantaj sağlar. Boyalı demir ise daha ekonomik bir seçenek olup düzenli bakımla uzun ömürlü olur.",
        ],
      },
      {
        heading: "Tasarım ve görünüm",
        paragraphs: [
          "Dikey çubuklu klasik tasarımdan cam panelli modern uygulamalara kadar farklı seçenekler mevcuttur; binanın cephesiyle uyumlu bir tasarım tercih edilmesi önerilir.",
        ],
      },
    ],
    faq: [
      {
        q: "Korkuluk için ölçü almadan önce ne hazırlamalıyım?",
        a: "Herhangi bir hazırlık yapmanıza gerek yok; yerinde keşfe gelip gerekli ölçüleri ve önerileri biz sunuyoruz.",
      },
      {
        q: "Eski korkuluğu yenilerken söküm de dahil mi?",
        a: "Evet, mevcut korkuluğun sökümü ve yeni korkuluğun montajı süreç içinde birlikte planlanır.",
      },
    ],
  },
  {
    slug: "otomatik-garaj-kapisi-bakimi-nasil-yapilir",
    title: "Otomatik Garaj Kapısı Bakımı Nasıl Yapılır?",
    seoDescription:
      "Otomatik garaj kapısı bakımı ne sıklıkla yapılmalı? Arıza belirtileri ve düzenli bakımın önemi hakkında pratik bilgiler.",
    excerpt:
      "Otomatik garaj kapınızın uzun ömürlü çalışması için nelere dikkat etmeli, hangi belirtilerde bakım çağırmalısınız? Kısaca anlatıyoruz.",
    category: "Bakım",
    publishDate: "2026-05-22",
    updatedDate: "2026-08-25",
    readingTime: "3 dk",
    coverImage:
      "https://images.unsplash.com/photo-1770756051811-1612ac8bedfa?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt: "Modern ev cephesinde otomatik garaj kapısı",
    relatedServiceSlug: "otomatik-kapi-kepenk-izmir",
    sections: [
      {
        heading: "Neden düzenli bakım gerekir?",
        paragraphs: [
          "Otomatik kapı sistemlerinde motor, ray ve sensörler zamanla yıpranabilir. Düzenli bakım, ani arızaları önler ve sistemin ömrünü uzatır.",
        ],
      },
      {
        heading: "Dikkat edilmesi gereken belirtiler",
        paragraphs: [
          "Kapının açılış/kapanışta yavaşlaması, alışılmadık sesler çıkarması veya uzaktan kumandaya geç tepki vermesi, bakım zamanının geldiğine işaret edebilir.",
        ],
      },
      {
        heading: "Bakım sıklığı",
        paragraphs: [
          "Kullanım yoğunluğuna bağlı olarak yılda en az bir kez periyodik kontrol yapılması önerilir; yoğun kullanılan sistemlerde bu süre kısaltılabilir.",
        ],
      },
    ],
    faq: [
      {
        q: "Garaj kapım aniden çalışmıyor, ne yapmalıyım?",
        a: "Öncelikle elektrik bağlantısını ve kumanda pilini kontrol edin; sorun devam ediyorsa bize ulaşarak yerinde inceleme talep edebilirsiniz.",
      },
      {
        q: "Bakım sırasında hangi parçalar kontrol edilir?",
        a: "Motor, ray, kayış/zincir, sensörler ve kumanda sistemi bakım sırasında kontrol edilen temel bileşenlerdir.",
      },
    ],
  },
  {
    slug: "metal-merdiven-imalati-surec-nasil-isler",
    title: "Metal Merdiven İmalatı Süreci Nasıl İşler?",
    seoDescription:
      "Metal merdiven imalatı keşiften montaja kadar hangi aşamalardan geçer? İç ve dış mekân merdiven projeleri için süreç rehberi.",
    excerpt:
      "Bir metal merdiven projesine nereden başlanır, hangi aşamalardan geçer? Keşiften teslim aşamasına kısa bir süreç özeti.",
    category: "Rehber",
    publishDate: "2026-06-12",
    updatedDate: "2026-08-28",
    readingTime: "4 dk",
    coverImage:
      "https://images.unsplash.com/photo-1532888033213-9e194587f77b?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt: "Metal merdiven ve korkuluk uygulaması",
    relatedServiceSlug: "merdiven-izmir",
    sections: [
      {
        heading: "1. Keşif ve ölçü",
        paragraphs: [
          "Süreç, mekânın yerinde incelenmesi ve doğru ölçülerin alınmasıyla başlar. Basamak yüksekliği, genişlik ve alan kısıtları bu aşamada netleşir.",
        ],
      },
      {
        heading: "2. Tasarım ve malzeme seçimi",
        paragraphs: [
          "Düz, döner veya sarmal merdiven tipi; korkuluk detayı ve yüzey kaplaması bu aşamada birlikte belirlenir.",
        ],
      },
      {
        heading: "3. İmalat",
        paragraphs: [
          "Belirlenen ölçü ve tasarıma göre atölyede kesim, kaynak ve yüzey işlemleri tamamlanır.",
        ],
      },
      {
        heading: "4. Montaj",
        paragraphs: [
          "Hazırlanan merdiven yerinde monte edilir; korkuluk ve varsa basamak kaplaması bu aşamada tamamlanarak teslim edilir.",
        ],
      },
    ],
    faq: [
      {
        q: "Dar bir alana merdiven yaptırmak mümkün mü?",
        a: "Evet, sarmal veya özel açılı tasarımlarla dar alanlar için de uygun çözümler üretilebilir; bunun için yerinde keşif gereklidir.",
      },
      {
        q: "Merdiven basamaklarına ahşap kaplama yapılabilir mi?",
        a: "Evet, metal iskelet üzerine ahşap veya farklı kaplama seçenekleri talebe göre uygulanabilir.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
