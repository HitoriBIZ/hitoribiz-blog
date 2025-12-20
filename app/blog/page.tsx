// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  // どちらでも動くように両対応（mdのフロントマターが混在していてもOK）
  coverImage?: string;
  hero?: string;
};

export default function BlogPage() {
  const posts = getAllPosts() as Post[];

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16">
      {/* Crown / mark */}
      <div className="pt-10 flex justify-center">
        <div className="relative h-14 w-14 sm:h-16 sm:w-16">
          <Image
            src="/images/hitori-biz-mark.png"
            alt="HitoriBIZ"
            fill
            className="object-contain drop-shadow-sm"
            priority
          />
        </div>
      </div>

      {/* Hero */}
      <section className="mt-8">
        <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border bg-slate-100">
          <Image
            src="/images/blog-cover.jpg"
            alt="HitoriBIZ Blog cover"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Profile card（Heroの下） */}
      <section className="relative z-10 mx-auto mt-8">
        <div className="rounded-2xl border bg-white p-5 shadow-sm flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border bg-slate-100">
              <Image
                src="/images/avatar.jpg"
                alt="HitoriBIZ"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                HitoriBIZ Blog
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                制作・AI活用・ひとりビジネスの記録
              </p>
            </div>
          </div>

          {/* 右側ボタン（実績を見るは削除済み） */}
          <div className="sm:ml-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium hover:bg-slate-50"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {posts.map((post) => {
          const cover = post.coverImage || post.hero; // 混在対策
          return (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              {/* 画像がある時だけ表示 */}
              {cover ? (
                <div className="relative h-44 w-full bg-slate-100">
                  <Image
                    src={cover}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              ) : null}

              <div className="p-6">
                <p className="text-xs text-slate-500">{post.date}</p>
                <h2 className="mt-2 text-lg font-bold text-slate-900">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-semibold hover:underline"
                >
                  続きを読む →
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
