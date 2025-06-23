'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import styles from './page.module.css'

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userName, setUserName] = useState<string | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      const { data, error } = await supabase.auth.getSession()

      if (error || !data.session) {
        router.push('/login')
      } else {
        const name = data.session.user.user_metadata?.name
        setUserName(name ?? 'ゲスト')
      }

      setLoading(false)
    }

    checkAuth()
  }, [router])

  if (loading) {
    return <p style={{ textAlign: 'center', padding: '2rem' }}>読み込み中...</p>
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ダッシュボード</h1>
      <p>ようこそ、{userName} さん！</p>
      <p>ここから会話トレーニングなどを始められるようにしていきます。</p>
    </div>
  )
}
