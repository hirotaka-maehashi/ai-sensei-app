'use client'

import styles from './Header.module.css'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Header() {
  const [childName, setChildName] = useState<string>('')

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user?.user_metadata?.name) {
        setChildName(user.user_metadata.name)
      }
    }

    fetchUser()
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <span className={styles.name}>{childName} さん</span>
      </div>
    </header>
  )
}
