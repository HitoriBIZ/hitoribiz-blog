  {/* Hero */}
  <section className="border-b border-slate-200 bg-white">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 lg:grid-cols-2 lg:items-center lg:py-14">
      <div>
        <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
          PROJECT
        </p>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
          hitori-biz.com 制作の流れ
          <span className="block text-slate-700">設計 → 実装 → 公開 → 運用</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
          「どんな構造で作っているか」「なぜその設計にしているか」を、
          小さなお店・工房でも再現できるように整理します。
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/blog#projects"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Blogへ戻る
          </Link>
          <Link
            href="https://www.hitori-biz.com"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            hitori-biz.com を見る
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="relative h-[240px] overflow-hidden rounded-3xl border border-slate-200 sm:h-[300px]">
          <Image
            src="/images/blog/hitoribiz-site-hero.jpg"
            alt="コーヒーを飲みながらノートPCで仕事をする小規模事業主"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/35 via-transparent to-sky-500/10" />
        </div>
        <p className="mt-3 text-xs text-slate-500">
          ※ ここは後で「サイト構造図」や「ページ一覧」の画像に差し替えると一気に“感動UI”になります
        </p>
      </div>
    </div>
  </section>

  {/* Contents */}
  <section className="mx-auto max-w-6xl px-4 py-12">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-bold text-slate-900">1. 情報設計</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          目的（問い合わせ/購入/信頼）を先に決めて、ページ構成と導線を設計します。
          まず「誰が」「何を見て」「どう動くか」を紙に落とします。
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-bold text-slate-900">2. UI設計</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          “ビジネスっぽさ”より、“安心して相談できる温度”を重視。
          余白・読みやすさ・写真の空気感で信頼を作ります。
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-bold text-slate-900">3. 実装と公開</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Next.js / GitHub / Vercel で更新しやすい構成へ。
          公開後は「改善→反映」を小さく回して成果に繋げます。
        </p>
      </div>
    </div>

    <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-base font-bold text-slate-900">このページに今後追加したいもの（おすすめ）</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>サイトマップ図（Home / Services / Works / About / Pricing / Contact）</li>
        <li>制作の流れ：要件ヒアリング → ワイヤー → デザイン → 実装 → 公開</li>
        <li>運用：記事追加・改善のサイクル（KPI/CVRなど）</li>
      </ul>
    </div>
  </section>
</main>
