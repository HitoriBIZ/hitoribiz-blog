"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-900">お問い合わせ</h1>
      <p className="mt-2 text-sm text-slate-600">
        内容を確認のうえ、通常1〜2営業日以内にご連絡いたします。
      </p>

      <form
        action="https://submit-form.com/UWNAVrVsy"
        method="POST"
        className="mt-8 space-y-4"
        onSubmit={() => setSending(true)}
      >
        {/* ✅ 送信後の遷移先（本番URL・localhost禁止） */}
        <input
          type="hidden"
          name="_redirect"
          value="https://hitoribiz-blog-prod.vercel.app/contact/thanks"
        />

        {/* スパム対策（Formspark推奨） */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        <div>
          <label className="text-sm font-medium text-slate-700">
            お名前
          </label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            メールアドレス
          </label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            お問い合わせ内容
          </label>
          <textarea
            name="message"
            rows={6}
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none"
          />
        </div>

        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={sending}
          className="rounded-full bg-slate-900 px-6 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-60"
        >
          {sending ? "送信中…" : "送信する"}
        </button>
      </form>
    </main>
  );
}
