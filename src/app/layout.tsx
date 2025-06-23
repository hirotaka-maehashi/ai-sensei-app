import Header from './components/Header'
import FooterNav from './components/FooterNav' // ✅ 追加

export const metadata = {
  title: 'AIせんせいアプリ',
  description: '言語聴覚支援アプリ - サインアップ・ログイン・会話トレーニング',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1, overflowY: 'auto' }}>{children}</main>
        <FooterNav />
      </body>
    </html>
  )
}

