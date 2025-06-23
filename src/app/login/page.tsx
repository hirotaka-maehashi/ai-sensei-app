'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Eye, EyeOff } from 'lucide-react'
import styles from './page.module.css'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setMessage(`ログインに失敗しました: ${error.message}`)
    } else {
      setMessage('')
      router.push('/dashboard')
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ログイン</h1>

      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="メールアドレス"
        className={styles.input}
      />

      <div className={styles.passwordWrapper}>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="パスワード"
          className={styles.input}
        />
        <div
          className={styles.eyeIcon}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
        </div>
      </div>

      <button onClick={handleLogin} className={styles.button}>
        ログイン
      </button>
      <p className={styles.message}>{message}</p>
    </div>
  )
}
