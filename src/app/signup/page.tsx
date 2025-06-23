'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Eye, EyeOff } from 'lucide-react'
import styles from './page.module.css'

export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  const redirectTo =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/auth/callback'
      : 'https://ai-sensei-app.vercel.app/auth/callback'

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectTo,
        data: {
          name: name, // Supabaseのuser_metadataに保存される
        },
      },
    })

    setMessage(error ? `エラー: ${error.message}` : '確認メールを送信しました📩')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>サインアップ</h1>

      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="名前の入力：（例）山田太郎"
        className={styles.input}
      />

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

      <button onClick={handleSignUp} className={styles.button}>
        登録
      </button>
      <p className={styles.message}>{message}</p>
    </div>
  )
}
