import Hero from "../components/Hero";
import QuickInfo from "../components/QuickInfo";
import Services from "../components/Services";
import Projects from "../components/Projects";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Process from "../components/Process";
import CtaSection from "../components/CtaSection";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      {/* Ana sayfanın title/description/JSON-LD'si index.html içinde statik
          olarak da bulunur (JS çalıştırmayan botlar için). Burada sadece
          değerleri senkronize tutuyoruz; JSON-LD tekrarını önlemek için
          jsonLd prop'u kasıtlı olarak boş bırakılmıştır. */}
      <Seo
        title="Alfa Metal | İzmir Demir Doğrama, PVC Doğrama ve Metal İmalat"
        description="İzmir'de demir doğrama, PVC doğrama, korkuluk, merdiven ve otomatik kapı/kepenk hizmetleri. Ücretsiz keşif için Alfa Metal'i arayın."
        path="/"
      />
      <Hero />
      <QuickInfo />
      <Services />
      <Projects />
      <About />
      <WhyUs />
      <Process />
      <CtaSection />
      <FAQ />
      <Contact />
    </>
  );
}
