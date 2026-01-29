// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HitoriBIZ Blog",
  description: "ひとりビジネスのための実践ブログ｜AI × デジタル活用",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {/* ===== Header ===== */}
        <header className="border-b bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            {/* ロゴ / サイト名 */}
            <Link href="/" className="text-lg font-bold tracking-wide">
              HitoriBIZ
            </Link>

            {/* ナビゲーション */}
<nav className="flex gap-6 text-sm font-medium">
  <span className="text-red-600 font-bold">TEST-NAV</span>
</nav>
          </div>
        </header>

        {/* ===== Main ===== */}
        <main className="mx-auto w-full max-w-5xl px-4 py-8">{children}</main>

        {/* ===== Footer ===== */}
        <footer className="mt-auto border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} HitoriBIZ. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
