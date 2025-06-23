'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const handleAuth = async () => {
      const { error } = await supabase.auth.getSession()

      if (error) {
        console.error('認証エラー:', error.message)
        router.push('/signup')
      } else {
        router.push('/login') // ← ここが認証後に進む画面
      }
    }

    handleAuth()
  }, [router])

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <p>認証を確認しています...</p>
    </main>
  )
}
