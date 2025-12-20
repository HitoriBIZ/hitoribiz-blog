"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  // ✅ Blog 配下では SiteHeader を表示しない
  if (pathname?.startsWith("/blog")) {
    return null;
  }

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-slate-900">
          HitoriBIZ
        </Link>

        <nav className="flex items-center gap-6 text-sm text-slate-700">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link href="/blog" className="hover:text-slate-900">
            Blog
          </Link>

          {/* ✅ Worksページが app/hitoribiz-site/page.tsx にある想定 */}
          <Link href="/hitoribiz-site" className="hover:text-slate-900">
            Works
          </Link>

          <Link href="/contact" className="hover:text-slate-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
