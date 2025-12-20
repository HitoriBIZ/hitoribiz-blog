export default function BrandTopPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-4 py-20">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">HitoriBIZ へようこそ</h1>
        <p className="text-lg text-slate-600">
          ひとり社長・小さなチームのための
          <br />
          AI × デジタル活用パートナーです。
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/contact"
            className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600 transition"
          >
            お問い合わせ
          </a>
          <a
            href="/blog"
            className="text-sm font-semibold text-sky-700 hover:underline"
          >
            ブログを見る
          </a>
        </div>
      </section>
    </main>
  );
}
