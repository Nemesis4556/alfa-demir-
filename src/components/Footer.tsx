import { business, navLinks, services } from "../data/content";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-4 h-4 shrink-0"
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
      className="w-4 h-4 shrink-0"
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

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21.5s7-6.4 7-11.8a7 7 0 1 0-14 0c0 5.4 7 11.8 7 11.8Z"
      />
      <circle cx="12" cy="9.7" r="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const footerServices = services.slice(0, 6);

  return (
    <footer className="bg-charcoal-deep border-t border-white/10">
      <div className="h-px bg-gradient-to-r from-transparent via-copper/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Marka */}
          <div className="col-span-2 lg:col-span-4">
            <p className="font-display uppercase text-warm-white text-xl sm:text-2xl tracking-wide">
              {business.name}
            </p>
            <p className="mt-4 text-steel text-sm leading-relaxed max-w-xs">
              İzmir ve Ege Bölgesi'nde profesyonel demir doğrama, PVC doğrama
              ve metal imalat hizmetleri.
            </p>

            <a
              href="#iletisim"
              className="mt-6 inline-flex items-center gap-2 border border-copper text-copper-light hover:bg-copper hover:text-warm-white transition-colors duration-200 text-xs font-medium uppercase tracking-wide px-5 py-2.5 rounded-sm"
            >
              Teklif Al <span aria-hidden="true">→</span>
            </a>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-9 h-9 border border-white/15 text-steel-light hover:text-copper-light hover:border-copper transition-colors duration-200 rounded-full"
              >
                <ChatIcon />
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 border border-white/15 text-steel-light hover:text-copper-light hover:border-copper transition-colors duration-200 rounded-full"
              >
                <InstagramIcon />
              </a>
              <a
                href={`tel:${business.phoneTel}`}
                aria-label="Telefon"
                className="flex items-center justify-center w-9 h-9 border border-white/15 text-steel-light hover:text-copper-light hover:border-copper transition-colors duration-200 rounded-full"
              >
                <PhoneIcon />
              </a>
            </div>
          </div>

          {/* Hızlı bağlantılar */}
          <div className="col-span-1 lg:col-span-2">
            <p className="font-mono text-steel text-xs uppercase tracking-[0.2em] mb-5">
              Hızlı Bağlantılar
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-steel-light text-sm hover:text-copper-light transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Hizmetler */}
          <div className="col-span-1 lg:col-span-3">
            <p className="font-mono text-steel text-xs uppercase tracking-[0.2em] mb-5">
              Hizmetlerimiz
            </p>
            <nav className="flex flex-col gap-3">
              {footerServices.map((service) => (
                <a
                  key={service.no}
                  href="#hizmetler"
                  className="text-steel-light text-sm hover:text-copper-light transition-colors duration-200 w-fit"
                >
                  {service.title.charAt(0) + service.title.slice(1).toLowerCase()}
                </a>
              ))}
            </nav>
          </div>

          {/* İletişim */}
          <div className="col-span-2 lg:col-span-3">
            <p className="font-mono text-steel text-xs uppercase tracking-[0.2em] mb-5">
              İletişim
            </p>
            <div className="flex flex-col gap-3.5">
              <a
                href={`tel:${business.phoneTel}`}
                className="flex items-center gap-3 text-steel-light text-sm hover:text-copper-light transition-colors duration-200 w-fit"
              >
                <PhoneIcon />
                {business.phoneDisplay}
              </a>
              <div className="flex items-start gap-3 text-steel-light text-sm">
                <span className="mt-0.5">
                  <PinIcon />
                </span>
                <span>
                  {business.address}
                  <br />
                  {business.city}
                </span>
              </div>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-steel-light text-sm hover:text-copper-light transition-colors duration-200 w-fit"
              >
                <InstagramIcon />
                {business.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-steel text-xs text-center sm:text-left">
            © {year} {business.name}. Tüm hakları saklıdır.
            <span className="hidden sm:inline text-steel/40"> · </span>
            <br className="sm:hidden" />
            <span className="text-steel/70">
              Tasarım: <span className="text-copper-light/80">CKR Tech</span>
            </span>
          </p>

          <a
            href="#anasayfa"
            aria-label="Sayfa başına dön"
            className="flex items-center gap-2 text-steel-light hover:text-copper-light text-xs uppercase tracking-wide transition-colors duration-200"
          >
            Yukarı Çık
            <span className="flex items-center justify-center w-7 h-7 border border-white/15 rounded-full">
              <ArrowUpIcon />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
