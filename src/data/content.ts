// Merkezi içerik dosyası. Tüm metinler ve görsel referansları burada tutulur.

export const business = {
  name: "ALFA METAL",
  phoneDisplay: "0553 011 74 87",
  phoneTel: "+905530117487",
  whatsappUrl: "https://wa.me/905530117487",
  address: "Yavuz Selim Caddesi No:49/B",
  city: "İzmir",
  instagramHandle: "@alfa_demir_dograma",
  instagramUrl: "https://www.instagram.com/alfa_demir_dograma",
};

export const images = {
  hero: "https://images.unsplash.com/photo-1509024368907-57294758cfc5?auto=format&fit=crop&w=1600&q=80",
  heroAlt: "İnşaat halindeki gri metal yapı, gündüz ışığında",
  about: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?auto=format&fit=crop&w=1200&q=80",
  aboutAlt: "Gri çelik iskelet parçası tutan bir usta",
  ctaBg: "https://images.unsplash.com/photo-1531053326607-9d349096d887?auto=format&fit=crop&w=1800&q=60",
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1714504904786-b6732390b206?auto=format&fit=crop&w=1200&q=80",
      alt: "Atölyede metal parça üzerinde çalışan usta",
      size: "large" as const,
    },
    {
      src: "https://images.unsplash.com/photo-1564182998523-6923112e7d6b?auto=format&fit=crop&w=800&q=80",
      alt: "Taşlama makinesiyle metal işleme, kıvılcımlar",
      size: "small" as const,
    },
    {
      src: "https://images.unsplash.com/photo-1548683726-203119be6a39?auto=format&fit=crop&w=800&q=80",
      alt: "Masa üzerinde dizili metal flanşlar",
      size: "small" as const,
    },
    {
      src: "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?auto=format&fit=crop&w=800&q=80",
      alt: "Açı taşlama ile metal kesim, kıvılcım saçan uygulama",
      size: "small" as const,
    },
    {
      src: "https://images.unsplash.com/photo-1641893823219-38b433f736c0?auto=format&fit=crop&w=800&q=80",
      alt: "Şalümeyle metal profil kaynağı yapan usta",
      size: "small" as const,
    },
  ],
};

export const services = [
  {
    no: "01",
    title: "DEMİR DOĞRAMA",
    desc: "Kapı, pencere ve doğrama sistemlerinde ölçüye özel metal imalat.",
  },
  {
    no: "02",
    title: "METAL İMALAT",
    desc: "Proje ihtiyacına göre kesim, kaynak ve montaj süreçleriyle imalat.",
  },
  {
    no: "03",
    title: "KORKULUK SİSTEMLERİ",
    desc: "Balkon, teras ve merdiven için dayanıklı korkuluk uygulamaları.",
  },
  {
    no: "04",
    title: "MERDİVEN UYGULAMALARI",
    desc: "İç ve dış mekân için metal merdiven imalatı ve montajı.",
  },
  {
    no: "05",
    title: "ÇATI / SUNDURMA",
    desc: "Metal çatı ve sundurma sistemlerinde uygulama ve montaj hizmeti.",
  },
  {
    no: "06",
    title: "ÖZEL METAL UYGULAMALARI",
    desc: "Standart dışı projeler için özel tasarım metal çözümleri.",
  },
  {
    no: "07",
    title: "PVC DOĞRAMA",
    desc: "Isı ve ses yalıtımlı PVC pencere ve kapı sistemlerinde ölçü, tedarik ve montaj.",
  },
  {
    no: "08",
    title: "OTOMATİK KAPI & KEPENK",
    desc: "Otomatik garaj kapısı, bariyer ve kepenk sistemlerinin kurulumu ve bakımı.",
  },
];

export const whyUs = [
  {
    no: "01",
    title: "ÖZENLİ İŞÇİLİK",
    desc: "Her parça, doğru ölçü ve temiz kaynak işçiliğiyle üretilir.",
  },
  {
    no: "02",
    title: "PROJE ODAKLI ÇALIŞMA",
    desc: "Her iş, kendi ölçüsüne ve mekânına göre ayrı ele alınır.",
  },
  {
    no: "03",
    title: "DOĞRUDAN İLETİŞİM",
    desc: "Süreç boyunca doğrudan telefon veya WhatsApp üzerinden bilgi alırsınız.",
  },
  {
    no: "04",
    title: "BÖLGESEL HİZMET",
    desc: "İzmir ve Ege Bölgesi genelinde yerinde keşif ve uygulama.",
  },
];

export const process = [
  {
    no: "01",
    title: "İLETİŞİM",
    desc: "Talebinizi telefon veya WhatsApp üzerinden iletin.",
  },
  {
    no: "02",
    title: "KEŞİF / ÖLÇÜ",
    desc: "Yerinde inceleme yapılır, doğru ölçüler alınır.",
  },
  {
    no: "03",
    title: "İMALAT",
    desc: "Ölçüye uygun kesim, kaynak ve yüzey işlemleri tamamlanır.",
  },
  {
    no: "04",
    title: "MONTAJ",
    desc: "Ürün yerinde montajı yapılarak teslim edilir.",
  },
];

export const faq = [
  {
    q: "İzmir'de demir doğrama fiyatları neye göre belirlenir?",
    a: "Fiyat; ölçü (metretül), profil kalınlığı, kullanılan malzeme (demir, alüminyum veya PVC) ve yüzey işlemine (boya/kaplama) göre değişir. Kesin fiyat için yerinde ölçü ve keşif sonrası ücretsiz teklif veriyoruz.",
  },
  {
    q: "PVC doğrama ile demir doğrama arasındaki fark nedir?",
    a: "PVC doğrama ısı ve ses yalıtımı ön planda olan pencere/kapı sistemleri için tercih edilir. Demir doğrama ise dayanıklılık ve özel tasarım gerektiren kapı, korkuluk ve merdiven gibi uygulamalarda kullanılır. İhtiyacınıza göre doğru sistemi birlikte belirleriz.",
  },
  {
    q: "İzmir genelinde hangi bölgelere hizmet veriyorsunuz?",
    a: "İzmir'in tüm bölgelerinde yerinde keşif, ölçü ve montaj hizmeti sağlıyoruz. Talebinizi telefon veya WhatsApp üzerinden iletmeniz yeterli.",
  },
  {
    q: "Keşif ve ölçü ücretli mi?",
    a: "Hayır, İzmir sınırları içinde keşif ve ölçü hizmeti ücretsizdir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.",
  },
  {
    q: "Korkuluk ve merdiven imalatında ölçü nasıl alınır?",
    a: "Yerinde inceleme yaparak balkon, teras veya merdiven için doğru ölçüleri alıyor, projeye özel çizim ve malzeme seçimini sizinle birlikte netleştiriyoruz.",
  },
  {
    q: "Otomatik kapı ve kepenk montajı ile bakımı da yapıyor musunuz?",
    a: "Evet, otomatik garaj kapısı, bariyer ve kepenk sistemlerinin hem kurulumunu hem de periyodik bakımını yapıyoruz.",
  },
  {
    q: "Bir işin teslim süresi ortalama ne kadar sürer?",
    a: "Süreç; iletişim, keşif/ölçü, imalat ve montaj aşamalarından oluşur. Süre işin büyüklüğüne göre değişir; keşif sonrası size net bir teslim takvimi paylaşırız.",
  },
] as const;

export const seo = {
  openingHours: "Mo-Su 08:00-20:00",
  areaServed: "İzmir",
} as const;

export const navLinks = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Projeler", href: "#projeler" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "S.S.S.", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];
