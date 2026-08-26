import { useEffect, useRef, useState } from "react";

/**
 * Bir eleman viewport'a girdiğinde "is-visible" durumunu tetikleyen basit
 * IntersectionObserver hook'u. Ağır kütüphane kullanmadan hafif scroll-reveal
 * animasyonları için kullanılır.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.18
) {
  const ref = useRef<T | null>(null);
  const noObserverSupport =
    typeof IntersectionObserver === "undefined";
  const [isVisible, setIsVisible] = useState(noObserverSupport);

  useEffect(() => {
    if (noObserverSupport) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, noObserverSupport]);

  return { ref, isVisible };
}
