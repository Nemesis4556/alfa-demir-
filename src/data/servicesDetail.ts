// Her hizmet için ayrı, indexlenebilir sayfa (/hizmetler/:slug) içeriği.
// content.ts > services dizisiyle "slug" alanı üzerinden eşleşir.

export interface ServiceDetail {
  slug: string;
  no: string;
  title: string; // kısa başlık (kart/nav için)
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string[];
  bullets: string[];
  image: string;
  imageAlt: string;
  keywords: string[];
  faq: { q: string; a: string }[];
}

export const servicesDetail: ServiceDetail[] = [
  {
    slug: "demir-dograma-izmir",
    no: "01",
    title: "Demir Doğrama",
    seoTitle: "İzmir Demir Doğrama Fiyatları ve Uygulamaları | Alfa Metal",
    seoDescription:
      "İzmir'de demir doğrama: kapı, pencere ve doğrama sistemlerinde ölçüye özel imalat. Ücretsiz keşif, yerinde ölçü ve montaj. Hemen teklif alın.",
    h1: "İzmir Demir Doğrama",
    intro: [
      "Demir doğrama, kapı, pencere ve cephe uygulamalarında dayanıklılık ve özel tasarım arayan projeler için tercih edilen bir metal imalat yöntemidir. Alfa Metal olarak İzmir ve Ege Bölgesi'nde konut, işyeri ve sanayi projeleri için ölçüye özel demir doğrama imalatı ve montajı yapıyoruz.",
      "Her proje; yerinde keşif ve ölçü, malzeme ve profil seçimi, atölyede kesim/kaynak imalatı ve son olarak yerinde montaj aşamalarından oluşur. Profil kalınlığı ve yüzey işlemi (boya/kaplama), kullanım alanına göre birlikte belirlenir.",
    ],
    bullets: [
      "Ölçüye özel kapı, pencere ve doğrama imalatı",
      "Kaynak ve montajda özenli işçilik",
      "Korozyona dayanıklı yüzey işlemi (boya/kaplama) seçenekleri",
      "İzmir genelinde ücretsiz keşif ve ölçü",
    ],
    image:
      "https://images.unsplash.com/photo-1569888249531-684c7f75b88f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Özel imalat siyah demir kapı — İzmir demir doğrama uygulaması",
    keywords: [
      "izmir demir doğrama",
      "izmir demir doğrama fiyatları",
      "izmir demir kapı imalatı",
      "izmir demir pencere doğrama",
    ],
    faq: [
      {
        q: "Demir doğrama kapı ve pencereler ne kadar dayanıklıdır?",
        a: "Doğru profil kalınlığı ve yüzey işlemiyle uygulanan demir doğrama, dış hava koşullarına karşı uzun yıllar dayanıklı kalır. Bakım periyodu ve kullanılan boya/kaplama türü ömrü doğrudan etkiler.",
      },
      {
        q: "Demir doğrama fiyatı metretül üzerinden mi hesaplanır?",
        a: "Evet, fiyatlandırmada temel birim metretüldür; buna profil kalınlığı, malzeme ve yüzey işlemi de eklenir. Net fiyat için yerinde ücretsiz keşif yapıyoruz.",
      },
    ],
  },
  {
    slug: "pvc-dograma-izmir",
    no: "07",
    title: "PVC Doğrama",
    seoTitle: "İzmir PVC Doğrama | Isı ve Ses Yalıtımlı Pencere-Kapı | Alfa Metal",
    seoDescription:
      "İzmir'de PVC doğrama pencere ve kapı sistemleri: ısı/ses yalıtımı, ölçü, tedarik ve montaj bir arada. Ücretsiz keşif için Alfa Metal'i arayın.",
    h1: "İzmir PVC Doğrama",
    intro: [
      "PVC doğrama, ısı ve ses yalıtımının ön planda olduğu pencere ve kapı sistemleri için tercih edilir. Alfa Metal, İzmir genelinde konut ve işyerlerinde PVC doğrama ölçü, tedarik ve montaj hizmeti sunar.",
      "Cam seçimi (çift cam/ısıcam), profil rengi ve donanım (kilit, menteşe) ihtiyaca göre birlikte belirlenir; yerinde ölçü sonrası net teklif verilir.",
    ],
    bullets: [
      "Isı ve ses yalıtımlı çift camlı sistemler",
      "Balkon, oda ve mutfak pencereleri için özel ölçü",
      "Kapı ve pencerede donanım (kilit/menteşe) seçenekleri",
      "İzmir genelinde ücretsiz keşif ve montaj",
    ],
    image:
      "https://images.unsplash.com/photo-1695928668952-c3c01a638e1d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Beyaz çerçeveli PVC pencere sistemi — İzmir PVC doğrama uygulaması",
    keywords: [
      "izmir pvc doğrama",
      "izmir pvc pencere fiyatları",
      "izmir pvc kapı",
      "pvc doğrama montajı izmir",
    ],
    faq: [
      {
        q: "PVC doğrama ile demir doğrama arasındaki fark nedir?",
        a: "PVC doğrama ısı ve ses yalıtımı ön planda olan pencere/kapı sistemleri için tercih edilir. Demir doğrama ise dayanıklılık ve özel tasarım gerektiren kapı, korkuluk ve merdiven gibi uygulamalarda kullanılır.",
      },
      {
        q: "PVC pencere montajı ne kadar sürer?",
        a: "Standart bir konut için montaj genellikle bir gün içinde tamamlanır; pencere sayısı ve mevcut doğramanın sökümüne göre süre değişebilir.",
      },
    ],
  },
  {
    slug: "korkuluk-izmir",
    no: "03",
    title: "Korkuluk Sistemleri",
    seoTitle: "İzmir Korkuluk İmalatı | Balkon ve Teras Korkuluğu | Alfa Metal",
    seoDescription:
      "İzmir'de balkon, teras ve merdiven için metal korkuluk imalatı ve montajı. Yerinde ölçü, dayanıklı işçilik. Ücretsiz keşif için hemen arayın.",
    h1: "İzmir Korkuluk Sistemleri",
    intro: [
      "Balkon, teras ve merdiven korkulukları hem güvenlik hem de görünüm açısından önemlidir. Alfa Metal, İzmir'de yerinde ölçü alarak ihtiyaca uygun korkuluk tasarımı ve montajını gerçekleştirir.",
      "Korkuluk yüksekliği, çubuk aralığı ve yüzey işlemi; bina yönetmeliği ve kullanım alanına göre belirlenir.",
    ],
    bullets: [
      "Balkon ve teras korkulukları",
      "Merdiven ve rampa korkulukları",
      "Paslanmaz ve boyalı demir seçenekleri",
      "Yerinde ölçü ile hatasız montaj",
    ],
    image:
      "https://images.unsplash.com/photo-1532888033213-9e194587f77b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Paslanmaz çelik korkuluklu merdiven — İzmir korkuluk uygulaması",
    keywords: [
      "izmir korkuluk imalatı",
      "izmir balkon korkuluğu fiyatları",
      "izmir merdiven korkuluğu",
      "teras korkuluğu izmir",
    ],
    faq: [
      {
        q: "Balkon korkuluğu yüksekliği ne olmalı?",
        a: "Güvenlik standartları gereği balkon korkulukları genellikle 90-110 cm aralığında yapılır; kesin ölçü, binanın konumuna ve yönetmeliğe göre yerinde keşifte belirlenir.",
      },
      {
        q: "Korkuluk ve merdiven imalatında ölçü nasıl alınır?",
        a: "Yerinde inceleme yaparak balkon, teras veya merdiven için doğru ölçüleri alıyor, projeye özel çizim ve malzeme seçimini sizinle birlikte netleştiriyoruz.",
      },
    ],
  },
  {
    slug: "merdiven-izmir",
    no: "04",
    title: "Merdiven Uygulamaları",
    seoTitle: "İzmir Metal Merdiven İmalatı | İç-Dış Mekân | Alfa Metal",
    seoDescription:
      "İzmir'de iç ve dış mekân için metal merdiven imalatı ve montajı. Ölçüye özel tasarım, sağlam kaynak işçiliği. Ücretsiz keşif için arayın.",
    h1: "İzmir Metal Merdiven Uygulamaları",
    intro: [
      "İç veya dış mekân merdivenleri, alan ölçüsüne ve kullanım amacına göre özel olarak tasarlanır. Alfa Metal, İzmir'de metal merdiven imalatı ve montajında yerinde ölçü ile hatasız uygulama sağlar.",
      "Basamak genişliği, korkuluk detayı ve yüzey kaplaması; mekânın ihtiyacına göre birlikte planlanır.",
    ],
    bullets: [
      "İç mekân sarmal ve düz merdivenler",
      "Dış mekân ve çelik konstrüksiyon merdivenler",
      "Korkuluk ile bütünleşik tasarım",
      "Yerinde ölçü ve montaj",
    ],
    image:
      "https://images.unsplash.com/photo-1532888033213-9e194587f77b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Metal merdiven ve korkuluk uygulaması — İzmir",
    keywords: [
      "izmir merdiven imalatı",
      "izmir metal merdiven fiyatları",
      "çelik merdiven izmir",
      "dış mekan merdiven imalatı izmir",
    ],
    faq: [
      {
        q: "Metal merdiven imalatı ne kadar sürer?",
        a: "Süreç; keşif/ölçü, imalat ve montaj aşamalarından oluşur. Basit bir merdiven için süre kısa olsa da, özel tasarım projelerde süre uzayabilir; keşif sonrası net takvim paylaşılır.",
      },
      {
        q: "Merdivenin korkuluğu ayrı mı sipariş edilir?",
        a: "Hayır, merdiven ve korkuluk genellikle tek projede birlikte tasarlanır ve uygulanır; böylece görsel bütünlük ve doğru ölçü sağlanır.",
      },
    ],
  },
  {
    slug: "catı-sundurma-izmir",
    no: "05",
    title: "Çatı / Sundurma",
    seoTitle: "İzmir Çatı ve Sundurma Sistemleri | Alfa Metal",
    seoDescription:
      "İzmir'de metal çatı ve sundurma imalatı, uygulama ve montaj hizmeti. Otopark, teras ve bahçe sundurmaları için ücretsiz keşif.",
    h1: "İzmir Çatı ve Sundurma Sistemleri",
    intro: [
      "Otopark, teras veya bahçe alanlarını hava koşullarından korumak için metal çatı ve sundurma sistemleri tercih edilir. Alfa Metal, İzmir genelinde ölçüye özel sundurma imalatı ve montajı yapar.",
      "Konstrüksiyon malzemesi, örtü seçeneği (sac/polikarbon) ve eğim; kullanım alanına göre birlikte belirlenir.",
    ],
    bullets: [
      "Otopark ve garaj sundurmaları",
      "Teras ve bahçe kanopileri",
      "Sac veya polikarbon örtü seçenekleri",
      "Yerinde keşif ve ölçü ile uygulama",
    ],
    image:
      "https://images.unsplash.com/photo-1541028271966-c2ff13a6fd4c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Metal saçak ve kanopi yapısı — İzmir çatı ve sundurma uygulaması",
    keywords: [
      "izmir sundurma imalatı",
      "izmir çatı sundurma fiyatları",
      "otopark sundurması izmir",
      "polikarbon sundurma izmir",
    ],
    faq: [
      {
        q: "Sundurma için hangi örtü malzemesi tercih edilmeli?",
        a: "Işık geçirgenliği önemliyse polikarbon, daha yalıtımlı ve dayanıklı bir yüzey isteniyorsa sac örtü tercih edilebilir. Kullanım alanına göre yerinde keşifte doğru seçeneği birlikte belirleriz.",
      },
      {
        q: "Otopark sundurması için ruhsat gerekir mi?",
        a: "Yapının büyüklüğüne ve bulunduğu bölgeye göre yerel yönetmelikler değişebilir; proje öncesi bu konuda size yol gösteririz.",
      },
    ],
  },
  {
    slug: "metal-imalat-izmir",
    no: "02",
    title: "Metal İmalat",
    seoTitle: "İzmir Metal İmalat | Kesim, Kaynak, Montaj | Alfa Metal",
    seoDescription:
      "İzmir'de proje bazlı metal imalat: kesim, kaynak ve montaj hizmeti. Standart dışı projeler için özel çözümler. Ücretsiz keşif için arayın.",
    h1: "İzmir Metal İmalat",
    intro: [
      "Standart doğrama ve korkuluk işlerinin dışında kalan, proje bazlı metal imalat ihtiyaçlarında Alfa Metal İzmir genelinde kesim, kaynak ve montaj hizmeti sunar.",
      "Sanayi tesisi ekipmanları, özel konstrüksiyonlar ve dekoratif metal uygulamaları bu kapsamda değerlendirilir.",
    ],
    bullets: [
      "Proje bazlı kesim ve kaynak imalatı",
      "Sanayi ve ticari alanlar için özel konstrüksiyon",
      "Dekoratif ve mimari metal uygulamaları",
      "Yerinde keşif ile ihtiyaca özel çözüm",
    ],
    image:
      "https://images.unsplash.com/photo-1714504904786-b6732390b206?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Atölyede metal parça üzerinde çalışan usta — İzmir metal imalat",
    keywords: [
      "izmir metal imalat",
      "izmir metal atölye",
      "izmir özel metal işleri",
      "izmir kaynak ve montaj",
    ],
    faq: [
      {
        q: "Standart dışı bir metal projesi için de teklif alabilir miyim?",
        a: "Evet, özel tasarım gerektiren projeler için de yerinde keşif sonrası size özel bir teklif hazırlıyoruz.",
      },
      {
        q: "Sanayi tesisleri için de hizmet veriyor musunuz?",
        a: "Evet, sanayi ve ticari alanlar için proje bazlı kesim, kaynak ve montaj hizmeti sağlıyoruz.",
      },
    ],
  },
  {
    slug: "ozel-metal-uygulamalari-izmir",
    no: "06",
    title: "Özel Metal Uygulamaları",
    seoTitle: "İzmir Özel Tasarım Metal Uygulamaları | Alfa Metal",
    seoDescription:
      "İzmir'de standart dışı projeler için özel tasarım metal çözümleri. Mimari ve dekoratif uygulamalar. Ücretsiz keşif için Alfa Metal'i arayın.",
    h1: "İzmir Özel Metal Uygulamaları",
    intro: [
      "Standart ürün kataloğuna girmeyen, mimari veya dekoratif özel tasarım metal ihtiyaçlarında Alfa Metal İzmir genelinde çözüm ortağınızdır.",
      "Fikir aşamasından imalata; ölçü, malzeme ve yüzey işlemi seçimi projeyle birlikte netleştirilir.",
    ],
    bullets: [
      "Mimari ve dekoratif metal tasarımlar",
      "Özel kesim ve şekillendirme",
      "Farklı malzeme ve kaplama seçenekleri",
      "Fikirden uygulamaya birlikte çalışma",
    ],
    image:
      "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Açı taşlama ile metal kesim uygulaması — İzmir özel metal işleri",
    keywords: [
      "izmir özel metal tasarım",
      "izmir dekoratif metal işleri",
      "izmir mimari metal uygulama",
    ],
    faq: [
      {
        q: "Elimde sadece bir fikir/çizim var, yine de teklif alabilir miyim?",
        a: "Evet, elinizdeki fikir veya çizimle birlikte yerinde keşif yapıp uygulanabilirliğini ve maliyetini birlikte değerlendiriyoruz.",
      },
    ],
  },
  {
    slug: "otomatik-kapi-kepenk-izmir",
    no: "08",
    title: "Otomatik Kapı & Kepenk",
    seoTitle: "İzmir Otomatik Kapı ve Kepenk Kurulum-Bakım | Alfa Metal",
    seoDescription:
      "İzmir'de otomatik garaj kapısı, bariyer ve kepenk kurulumu ile bakımı. Arıza onarımı için hızlı destek. Ücretsiz keşif için arayın.",
    h1: "İzmir Otomatik Kapı ve Kepenk",
    intro: [
      "Otomatik garaj kapısı, bariyer ve kepenk sistemleri; güvenlik ve kullanım konforu için tercih edilir. Alfa Metal, İzmir genelinde bu sistemlerin kurulumunu ve periyodik bakımını yapar.",
      "Motor tipi, uzaktan kumanda seçeneği ve kepenk malzemesi; kullanım amacına göre birlikte belirlenir. Arızalı sistemlerde onarım desteği de sağlanır.",
    ],
    bullets: [
      "Otomatik garaj kapısı kurulumu",
      "Bariyer sistemleri",
      "Kepenk kurulum ve arıza onarımı",
      "Periyodik bakım hizmeti",
    ],
    image:
      "https://images.unsplash.com/photo-1770756051811-1612ac8bedfa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern ev cephesinde otomatik garaj kapısı — İzmir uygulaması",
    keywords: [
      "izmir otomatik kapı",
      "izmir kepenk tamiri",
      "izmir garaj kapısı motoru",
      "izmir bariyer sistemleri",
    ],
    faq: [
      {
        q: "Otomatik kapı ve kepenk montajı ile bakımı da yapıyor musunuz?",
        a: "Evet, otomatik garaj kapısı, bariyer ve kepenk sistemlerinin hem kurulumunu hem de periyodik bakımını yapıyoruz.",
      },
      {
        q: "Kepenk motoru arızalandığında ne kadar sürede müdahale edilir?",
        a: "Arıza bildirimini aldığımızda İzmir sınırları içinde en kısa sürede yerinde inceleme yapıp onarım için bilgi veriyoruz.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicesDetail.find((s) => s.slug === slug);
}
