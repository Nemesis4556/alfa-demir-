import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Rota değiştiğinde: hash varsa ilgili bölüme kaydırır, yoksa sayfayı
 * başa alır. Navbar/Footer'daki "/#hizmetler" gibi bağlantıların farklı
 * bir sayfadan ana sayfaya dönüp doğru bölüme inmesini sağlar.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // İçerik mount olduktan hemen sonra elementi bulmak için kısa gecikme
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
