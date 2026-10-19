import { useState } from 'react'
import { Footer } from './components/Footer'
import { Modal } from './components/Modal'
import { ShootingStars } from './components/ShootingStars'
import { CardsLayout } from './components/CardsLayout'
import { RatingTagline } from './components/RatingTagline'
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
      <ShootingStars />

      <main className="main-content">
        <h1 className="page-title">welcome to satelyd.id</h1>
        <p className="page-subtitle">
          Selamat datang di satelyd.id — platform media pembelajaran interaktif, bimbingan les matematika, dan pembuatan website.
        </p>
        <CardsLayout onOpenModal={handleOpenModal} />
      </main>

      <div className="bottom-section">
        <RatingTagline />
        <Footer />
      </div>

      <Modal
        activeKey={activeModalKey}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default App
