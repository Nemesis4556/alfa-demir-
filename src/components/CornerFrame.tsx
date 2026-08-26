import type { ReactNode } from "react";

/**
 * Sitenin imza görsel öğesi: görselleri ince pirinç (brass) çerçeve ve
 * yumuşak gölge ile saran, vitrin/salon hissi veren çerçeveleme.
 */
export default function CornerFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`corner-frame ${className}`}>{children}</div>;
}
