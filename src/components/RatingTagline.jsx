import { Star } from 'lucide-react'

export function RatingTagline() {
  return (
    <div className="footer-tagline-container">
      <div className="footer-tagline">
        <span className="footer-rating-group">
          <Star size={13} className="rating-star-inline-icon" />
          <span>4.8</span>
        </span>
        <span className="footer-tagline-separator">|</span>
        <span className="footer-tagline-copy">© {new Date().getFullYear()} satelyd.id</span>
      </div>
    </div>
  )
}
