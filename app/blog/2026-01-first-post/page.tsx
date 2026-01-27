export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* ===== 記事ヘッダー ===== */}
      <header className="mb-8">
        <p className="text-sm text-gray-500">2026年1月</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          ロゴマークと名刺づくり｜HitoriBIZはここから始まりました
        </h1>
        <p className="mt-3 text-base text-gray-600">
          ひとりで始めるビジネスに、AIスタッフが加わると何が起きるのか。
          まずは「ロゴ」と「名刺」づくりから。
        </p>
      </header>

      {/* ===== ロゴ画像 ===== */}
      <figure className="mb-8">
        <img
          src="/images/blog/2026-01-first-post/logo.png"
          alt="HitoriBIZ ロゴマーク"
          className="
            w-full
            max-w-xl
            mx-auto
            rounded-lg
            border
            bg-white
          "
        />
      </figure>

      {/* ===== 本文（前半） ===== */}
      <section
        className="
          space-y-4
          text-[16px]
          leading-7
          sm:leading-6
        "
      >
        <p>
          2025年12月、長年勤めた会社を定年退職しました。
          そしてそのタイミングで、「ひとりでビジネスを立ち上げてみよう」と決めました。
        </p>

        <p>
          事業名は「ひとりビジネス」。
          英語表記では <strong>Hitori Biz</strong> としています。
        </p>

        <p>
          名前のとおり、私は一人です。
          でも実は、まったく孤独ではありません。
        </p>

        <p>
          今の私は、たくさんのAIスタッフに囲まれて仕事をしています。
          企画を考えるのも、文章を書くのも、デザインを作るのも——
          いつもAIたちがそばにいます。
        </p>
      </section>

      {/* ===== 名刺画像 ===== */}
      <figure className="my-8">
        <img
          src="/images/blog/2026-01-first-post/namecard-1.png"
          alt="HitoriBIZ 名刺（表）"
          className="w-full max-w-2xl mx-auto rounded-lg border bg-white"
        />
      </figure>

      <figure className="my-8">
        <img
          src="/images/blog/2026-01-first-post/namecard-2.png"
          alt="HitoriBIZ 名刺（裏）"
          className="w-full max-w-2xl mx-auto rounded-lg border bg-white"
        />
      </figure>

      {/* ===== 本文（後半） ===== */}
      <section
        className="
          space-y-4
          text-[16px]
          leading-7
          sm:leading-6
        "
      >
        <p>
          まず最初に取りかかったのは、HitoriBIZのロゴマークづくりでした。
          ロゴは、AIに相談しながら何度もやり取りを重ねて完成させました。
        </p>

        <p>
          そして、そのロゴをもとに作ったのが、今回ご紹介した名刺です。
        </p>

        <p>
          このブログでは、「HitoriBIZって何をしているの？」という疑問に答えるような形で、
          制作の過程や、AIと一緒に仕事をする感覚を、時系列で記録していこうと思います。
        </p>

        <p>
          まずは、ロゴと名刺づくりから。
          HitoriBIZの物語は、ここから始まります。
        </p>
      </section>
    </main>
  );
}
