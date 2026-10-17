import { Terminal, Mail } from 'lucide-react'
import { FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa'
import { medsos } from '../data'

export function Footer() {
  return (
    <footer className="footer-bar footer-centered-layout">
      {/* Social Media Links Row */}
      <div className="footer-social-row" aria-label="Media Sosial & Kontak">
        {/* Instagram */}
        <a
          href={medsos.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-btn"
          title="Instagram"
          aria-label="Instagram"
        >
          <FaInstagram size={15} />
        </a>

        {/* TikTok */}
        <a
          href={medsos.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-btn"
          title="TikTok"
          aria-label="TikTok"
        >
          <FaTiktok size={14} />
        </a>

        {/* LinkedIn */}
        <a
          href={medsos.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-btn"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={14} />
        </a>

        {/* Email */}
        <a
          href={medsos.email}
          className="footer-social-btn"
          title="Kirim Email"
          aria-label="Email"
        >
          <Mail size={15} />
        </a>
      </div>

      {/* Developer Credit */}
      <p className="footer-credit">
        <Terminal size={13} className="footer-dev-icon" />
        <span>developer by :</span>{' '}
        <a 
          href="https://portofolio-ku-gold.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-dev-link"
        >
          dony putra perkasa
        </a>
      </p>

      {/* Tagline & Copyright */}
      <div className="footer-centered-sub">
        <span>mathematics and software engineering</span>
      </div>
    </footer>
  )
}
