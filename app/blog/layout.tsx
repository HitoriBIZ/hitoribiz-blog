import Link from "next/link";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">HitoriBIZ Blog</h1>
              <p className="mt-2 text-gray-600">
                制作・AI活用・ひとりビジネスの記録（フレンドリーな会話形式で更新）
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/"
                className="rounded-full border bg-white px-4 py-2 text-sm hover:bg-gray-100"
              >
                Homeへ
              </Link>
            </div>
          </div>
          <hr className="mt-8 border-gray-200" />
        </header>

        {children}

        <footer className="mt-14 border-t border-gray-200 pt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} HitoriBIZ
        </footer>
      </div>
    </div>
  );
}
