import Link from 'next/link';
import './globals.css';
export default function RootLayout({children}:{children:React.ReactNode}){
  return (<html lang="ja"><body>
    <header><nav className="container" style={{display:'flex',gap:16,padding:16}}>
      <Link href="/">HitoriBIZ</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/works">Works</Link>
      <Link href="/contact">Contact</Link>
    </nav></header>
    <main className="container">{children}</main>
  </body></html>);
}
