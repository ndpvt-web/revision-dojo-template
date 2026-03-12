import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="w-full bg-white border-t border-gray-100 py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-gray-900 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
                <span className="text-white font-bold text-xs">RD</span>
              </div>
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </div>
            <p className="text-xs text-gray-400 mb-2">
              &copy; {footer.copyright} {siteConfig.name}
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              {footer.disclaimer}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2 border border-blue-100">
              <span className="text-xs font-bold text-blue-700">GDPR COMPLIANT</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
