import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { business } from "../data/content";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Sayfa Bulunamadı | Alfa Metal"
        description="Aradığınız sayfa bulunamadı."
        path="/404"
        noindex
      />
      <section className="bg-charcoal min-h-[70vh] flex items-center pt-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <p className="font-mono text-copper-light text-sm tracking-[0.25em] uppercase mb-4">
            404
          </p>
          <h1 className="font-display uppercase text-warm-white text-3xl sm:text-5xl tracking-wide">
            Sayfa Bulunamadı
          </h1>
          <p className="mt-5 text-steel-light text-base sm:text-lg">
            Aradığınız sayfa taşınmış veya kaldırılmış olabilir. {business.name}
            {" "}ana sayfasına dönebilir ya da hizmetlerimize göz atabilirsiniz.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-warm-white text-sm font-medium uppercase tracking-wide px-6 py-3.5 transition-colors duration-200 rounded-sm"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              to="/hizmetler"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-warm-white text-sm font-medium uppercase tracking-wide px-6 py-3.5 transition-colors duration-200 rounded-sm"
            >
              Hizmetlere Göz At
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
