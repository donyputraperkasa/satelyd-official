import { useState } from 'react'
import { BookOpen, Code2, UserRound, Gamepad2, Star } from 'lucide-react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Card } from './components/Card'
import { Modal } from './components/Modal'
import { jasa } from './data'
import './App.css'

function App() {
  const [activeModalKey, setActiveModalKey] = useState(null)

  const handleOpenModal = (key) => {
    setActiveModalKey(key)
  }

  const handleCloseModal = () => {
    setActiveModalKey(null)
  }

  return (
    <div className="page-container">
      {/* Navbar Section */}
      <Navbar />

      {/* Main Content Area */}
      <main className="main-content">
        <h1 className="page-title">welcome to satelyd.id</h1>
        <p className="page-subtitle">
          Selamat datang di satelyd.id — platform media pembelajaran interaktif, bimbingan les matematika, dan pembuatan website.
        </p>

        <section className="cards-grid" aria-label="Menu Utama">
          {/* Card 1: About Me -> Navigates to CV / Portfolio */}
          <Card
            title="tentang aku"
            href="https://portofolio-ku-gold.vercel.app/"
            isExternal={true}
            icon={UserRound}
          />

          {/* Card 2: Media Pembelajaran -> Navigates to satelyd-fe web */}
          <Card
            title="game kelas"
            href="https://satelyd-fe.vercel.app/"
            isExternal={true}
            icon={Gamepad2}
          />

          {/* Card 3: Jasa Les Matematika -> Opens Modal */}
          <Card
            title="jasa les matematika"
            onClick={() => handleOpenModal('math_tutoring')}
            isExternal={false}
            icon={BookOpen}
          />

          {/* Card 4: Jasa Bikin Website -> Opens Modal */}
          <Card
            title="jasa bikin website"
            onClick={() => handleOpenModal('web_dev')}
            isExternal={false}
            icon={Code2}
          />
        </section>

        {/* Tagline: Copyright & Rating Inline */}
        <div className="footer-tagline">
          <span className="footer-rating-group">
            <Star size={13} className="rating-star-inline-icon" />
            <span>4.8</span>
          </span>
          <span className="footer-tagline-separator">|</span>
          <span className="footer-tagline-copy">© {new Date().getFullYear()} satelyd.id</span>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Service Detail Modal */}
      <Modal
        isOpen={Boolean(activeModalKey)}
        onClose={handleCloseModal}
        data={activeModalKey ? jasa[activeModalKey] : null}
      />
    </div>
  )
}

export default App
