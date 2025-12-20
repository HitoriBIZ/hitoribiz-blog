// app/blog/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6">
        <Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900">
          ← Blogへ戻る
        </Link>
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
        {post.title}
      </h1>
      <p className="mt-2 text-sm text-slate-500">{post.date}</p>

      {/* ✅ Hero image */}
      {post.coverImage ? (
        <div className="relative mt-8 h-[260px] w-full overflow-hidden rounded-2xl border bg-slate-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : null}

      {/* ✅ Body */}
      <article className="prose prose-slate mt-10 max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
