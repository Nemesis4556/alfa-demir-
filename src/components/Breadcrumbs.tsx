import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** Görsel breadcrumb; yapısal veri (BreadcrumbList) ayrıca sayfa
 * bileşeninde schema.ts yardımıyla üretilip Seo'ya verilir. */
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs sm:text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-steel">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="text-copper-light" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    to={item.path}
                    className="hover:text-copper-light transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className="text-steel/50">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
