import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickInfo from "./components/QuickInfo";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import CtaSection from "./components/CtaSection";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-warm-white overflow-x-hidden">
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
