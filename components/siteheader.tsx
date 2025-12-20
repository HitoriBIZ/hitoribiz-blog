"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  /**
   * ✅ Blog 配下では SiteHeader を一切表示しない
   *   → Hero画像や冠ロゴと絶対に干渉させないため
   */
  if (pathname?.startsWith("/blog")) {
    return null;
  }

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
// 例：components/siteheader.tsx
<nav>
  <Link href="/">Home</Link>
  <Link href="/blog">Blog</Link>
  <Link href="/contact">Contact</Link>
</nav>

    </header>
  );
}
