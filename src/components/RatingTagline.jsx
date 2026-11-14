import { Star, MessageCircle } from 'lucide-react'

export function RatingTagline() {
  return (
    <div className="rating-action-wrapper">
      <div className="rating-action-container">
        {/* Rating Pill (Dibesarkan Sedikit) */}
        <div className="rating-pill-enlarged">
          <span className="rating-star-group">
            <Star size={16} className="star-gold-icon" fill="#F59E0B" />
            <span className="rating-score-num">4.8</span>
          </span>
          <span className="rating-pill-sep" aria-hidden="true">|</span>
          <span className="rating-pill-copy">© {new Date().getFullYear()} satelyd.id</span>
        </div>

        {/* Button Tanya Dulu di Sebelahnya (Pill Style seperti model button tulis ulasan) */}
        <a
          href="https://wa.me/6282236343404?text=Halo%20Mas%20Don%2C%20saya%20tertarik%20tanya%20informasi%20seputar%20les%20matematika%20atau%20pembuatan%20website%20di%20satelyd.id"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-tanya-dulu-outside"
          title="Tanya langsung ke WhatsApp Mas Don"
        >
          <MessageCircle size={15} />
          <span>Tanya Dulu</span>
        </a>
      </div>
    </div>
  )
}
