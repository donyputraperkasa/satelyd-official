import { Gamepad2, UserRound, BookOpen, Code2 } from 'lucide-react'
import { Card } from './Card'

export function CardsLayout({ onOpenModal }) {
  return (
    <section className="cards-layout" aria-label="Menu Utama">
      {/* Div Sendiri: Highlight Game Kelas */}
      <div className="game-highlight-container">
        <Card
          title="game kelas"
          href="https://satelyd-fe.vercel.app/"
          isExternal={true}
          icon={Gamepad2}
          isHighlight={true}
        />
      </div>

      {/* Div Flex Kebawah: Tentang Saya, Les Matematika, dan Jasa Bikin Website */}
      <div className="side-cards-container">
        <Card
          title="tentang saya"
          onClick={() => onOpenModal('about_me')}
          isExternal={false}
          icon={UserRound}
          variant="side"
        />

        <Card
          title="jasa les matematika"
          onClick={() => onOpenModal('math_tutoring')}
          isExternal={false}
          icon={BookOpen}
          variant="side"
        />

        <Card
          title="jasa bikin website"
          onClick={() => onOpenModal('web_dev')}
          isExternal={false}
          icon={Code2}
          variant="side"
        />
      </div>
    </section>
  )
}
