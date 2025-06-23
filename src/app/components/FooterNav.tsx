'use client'

import { useRouter } from 'next/navigation'
import styles from './FooterNav.module.css'
import { Home, BookOpen, Gift, Settings } from 'lucide-react'

export default function FooterNav() {
  const router = useRouter()

  return (
    <footer className={styles.footer}>
      <button onClick={() => router.push('/dashboard')} className={styles.item}>
        <Home size={20} />
        <span>ホーム</span>
      </button>

      <button onClick={() => router.push('/dashboard#themes')} className={styles.item}>
        <BookOpen size={20} />
        <span>テーマ</span>
      </button>

      <button onClick={() => router.push('/reward')} className={styles.item}>
        <Gift size={20} />
        <span>ごほうび</span>
      </button>

      <button onClick={() => router.push('/settings')} className={styles.item}>
        <Settings size={20} />
        <span>せってい</span>
      </button>
    </footer>
  )
}
