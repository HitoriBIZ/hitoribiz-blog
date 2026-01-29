"use client";

import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* ロゴ */}
        <Link href="/" className="font-semibold text-slate-900">
          HitoriBIZ
        </Link>

        {/* ナビゲーション */}
        <nav className="flex items-center gap-6 text-sm text-slate-700">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>

          {/* Works（必要なければ後で消してOK） */}
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
