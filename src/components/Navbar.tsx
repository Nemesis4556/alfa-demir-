import { useEffect, useState } from "react";
import { business, navLinks } from "../data/content";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-5 h-5 shrink-0"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 5.5c0-1.1.9-2 2-2H8l1.8 4.3-2 1.6a11.5 11.5 0 0 0 5.3 5.3l1.6-2L19 14.5v2.5c0 1.1-.9 2-2 2h-.5C9.6 19 5 14.4 5 8.5V8"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-5 h-5 shrink-0"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8c-1.1 0-2.2-.2-3.1-.7L4 20l1.1-4.4A7.9 7.9 0 0 1 4 12Z"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-charcoal/95 backdrop-blur-sm border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between transition-all duration-300 h-16 ${
          scrolled ? "lg:h-16" : "lg:h-20"
        }`}
      >
        <a
          href="#anasayfa"
          onClick={() => setMenuOpen(false)}
          className="font-display tracking-wide text-warm-white text-base sm:text-xl font-semibold uppercase whitespace-nowrap relative z-10"
        >
          {business.name}
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-steel-light hover:text-warm-white transition-colors duration-200 uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#iletisim"
          className="hidden lg:inline-flex items-center border border-copper text-copper-light hover:bg-copper hover:text-warm-white transition-colors duration-200 text-sm font-medium uppercase tracking-wide px-5 py-2 rounded-sm"
        >
          Teklif Al
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden relative z-10 text-warm-white p-2 -mr-2"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-0.5 bg-warm-white transition-transform duration-300 origin-center ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-warm-white transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-warm-white transition-transform duration-300 origin-center ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobil tam ekran menü */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-16 h-[calc(100dvh-4rem)] transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-charcoal-deep backdrop-blur-md" />

        <nav className="relative h-full flex flex-col px-6 pt-6 pb-8 overflow-y-auto">
          <div className="flex-1 flex flex-col justify-center gap-0.5">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center justify-between gap-4 py-3.5 border-b border-white/10 transition-all duration-500 ease-out ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${100 + i * 55}ms` : "0ms",
                }}
              >
                <span className="flex items-baseline gap-4 min-w-0">
                  <span className="font-mono text-copper text-xs shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display uppercase text-2xl sm:text-3xl text-warm-white tracking-wide truncate">
                    {link.label}
                  </span>
                </span>
                <span
                  className="text-warm-white/25 group-hover:text-copper-light transition-all duration-200 shrink-0"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            ))}
          </div>

          <div
            className={`shrink-0 pt-6 border-t border-white/10 transition-all duration-500 ease-out ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: menuOpen ? "380ms" : "0ms" }}
          >
            <p className="font-mono text-steel text-xs uppercase tracking-[0.2em] mb-4">
              Bize Ulaşın
            </p>
            <div className="flex flex-col gap-3.5">
              <a
                href={`tel:${business.phoneTel}`}
                className="flex items-center gap-3 text-warm-white text-base"
              >
                <PhoneIcon />
                {business.phoneDisplay}
              </a>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-warm-white text-base"
              >
                <ChatIcon />
                WhatsApp'tan Yazın
              </a>
            </div>

            <a
              href="#iletisim"
              onClick={() => setMenuOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 bg-copper text-warm-white uppercase tracking-wide text-sm font-medium px-5 py-4 w-full rounded-sm"
            >
              Teklif Al <span aria-hidden="true">→</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
