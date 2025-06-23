'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import styles from './page.module.css'

export default function DashboardPage() {
  const [name, setName] = useState('')
  const [badgeCount, setBadgeCount] = useState(0)
  const [history, setHistory] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchUserInfo = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user?.user_metadata?.name) {
        setName(user.user_metadata.name)
      }

      const { data: badgeData } = await supabase
        .from('badges')
        .select('count')
        .eq('user_id', user?.id)
        .single()

      if (badgeData?.count !== undefined) {
        setBadgeCount(badgeData.count)
      }

      setHistory([
        '✅ おはなし：すきなたべものの はなし',
        '✅ クイズ：3問正解！'
      ])
    }

    fetchUserInfo()
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.greeting}>{name} さん、こんにちは！</h1>
        <p className={styles.message}>きょうも たのしく れんしゅう しよう！</p>

        <section className={styles.block}>
          <h2 className={styles.blockTitle}>🎁 ごほうび</h2>
          <div className={styles.badgeBox}>⭐️ {badgeCount}こ</div>
        </section>

<section className={styles.block}>
  <button className={styles.talkButton} onClick={() => router.push('/talk-entry')}>
    <span className={styles.talkIcon}>▶︎</span>
    <span className={styles.talkText}>
      AIせんせいと<br />おはなしをする
    </span>
  </button>
</section>

        <section className={styles.block}>
          <h2 className={styles.blockTitle}>📘 きょうの れんしゅう</h2>
          <ul className={styles.historyList}>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}