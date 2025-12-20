import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* ✅ 新しいヘッダーここから */}
        <header style={{
          display: 'flex',
          alignItems: 'center',
          padding: '1rem',
          borderBottom: '1px solid #ccc',
          backgroundColor: '#f9f9f9'
        }}>
          {/* ロゴ画像がある場合は下記imgタグを使ってください */}
          {/* <img src="/logo.png" alt="HitoriBIZ ロゴ" style={{ height: '40px', marginRight: '1rem' }} /> */}

          {/* 今は文字で表示 */}
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>HitoriBIZ Blog</span>
        </header>
        {/* ✅ 新しいヘッダーここまで */}

        <main className="mx-auto max-w-5xl px-4">{children}</main>
      </body>
    </html>
  );
}
