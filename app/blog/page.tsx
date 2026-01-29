// app/blog/page.tsx
import { redirect } from "next/navigation";

/**
 * /blog は使わない
 * すべてのアクセスを /（ブログ一覧＝ホーム）へ集約する
 */
export default function BlogPage() {
  redirect("/");
}
