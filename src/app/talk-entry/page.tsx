'use client'

import { useRouter } from 'next/navigation'
import styles from './page.module.css'

const chapters = [
  { id: 'food', label: '🍛 すきなたべもの' },
  { id: 'animals', label: '🐶 どうぶつのおしゃべり' },
  { id: 'outing', label: '🚌 おでかけごっこ' },
  { id: 'home', label: '🏠 おうちのなか' },
  { id: 'random', label: '❓ なんでもしつもん' }
]

export default function TalkEntryPage() {
  const router = useRouter()

  const handleSelect = (chapterId: string) => {
    router.push(`/talk?chapter=${chapterId}`)
  }

  return (
    <div className={styles.container}>
  <h1 className={styles.title}>おはなしの テーマを{'\n'}えらんでね！</h1>

  <div className={styles.grid}>
    {chapters.map((chapter) => (
      <button
        key={chapter.id}
        className={styles.card}
        onClick={() => handleSelect(chapter.id)}
      >
        {chapter.label}
      </button>
    ))}
  </div>

  {/* ⬇️ 通常のフッター要素として配置 */}
  <div className={styles.backArea}>
    <button className={styles.backButton} onClick={() => router.push('/dashboard')}>
      ← はじめの画面にもどる
    </button>
  </div>
</div>
  )
}