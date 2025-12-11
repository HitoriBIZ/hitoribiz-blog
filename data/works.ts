export type Work = {
  slug: string;
  title: string;
  category: "WEBサイト設計・制作" | "アプリ + Web 連携" | "自社サイト, etc.";
  period?: string;
  thumbnail?: string;
  summary: string;
  siteUrl?: string;
};

export const works: Work[] = [
  // ① HitoriBIZ 自社サイト
  {
    slug: "hitoribiz-site",
    title: "HitoriBIZ 自社サイト／ひとりビジネス支援のモデルサイト",
    category: "自社サイト, etc.",
    period: "2024–2025",
    thumbnail: "/images/hitoribiz-hero.png",
    summary:
      "ひとりビジネスを支援するサービスを体系化し、AI × デジタルで何ができるかを見える化するために構築した自社サイト。Works・Blog が連動し、サービスの実例とノウハウを立体的に伝える構造が特徴。",
    siteUrl: "https://hitori-biz.com"
  },

  // ② Hikaru：アプリ + Web 連携
  {
    slug: "app-and-web-integration-hikaru",
    title: "IoT電気ドリップコーヒーメーカー「Hikaru」アプリ + Web 連携",
    category: "アプリ + Web 連携",
    period: "2024–2025",
    thumbnail: "/images/work_app_web.png",
    summary:
      "Bluetoothアプリと Web（LP・EC・FAQ・動画チュートリアル）を統合し、ユーザー体験を一貫化。サポート導線を強化し、初回ユーザーでも直感的に操作できる導線設計を構築。",
    siteUrl: "https://hitori-biz.com/hikaru"
  },

  // ③ WEBサイト設計・制作（一般事例）
  {
    slug: "web-site-design-build-general",
    title: "中小企業向けWEBサイト設計・制作（情報設計〜実装）",
    category: "WEBサイト設計・制作",
    period: "2023–2025",
    thumbnail: "/images/work_web_site.png",
    summary:
      "中小企業・個人事業主向けに、情報設計・コピーライティング・デザイン・実装・計測設定まで一気通貫で支援。事業の強みを明確化し、問い合わせ導線を改善する構造に最適化。",
    siteUrl: "https://hitori-biz.com"
  }
];
