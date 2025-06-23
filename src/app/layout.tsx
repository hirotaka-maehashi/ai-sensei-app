import Header from './components/Header'
import FooterNav from './components/FooterNav' // ✅ 追加

export const metadata = {
  title: 'AIせんせいアプリ',
  description: '言語聴覚支援アプリ - サインアップ・ログイン・会話トレーニング',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  )
}


