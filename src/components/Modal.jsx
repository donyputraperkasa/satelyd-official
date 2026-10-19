import { useEffect } from 'react'
import {
  X,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  User,
  MapPin,
  GraduationCap,
  Briefcase,
  Coins,
} from 'lucide-react'
import { PortfolioShowcase } from './PortfolioShowcase'
import { jasa } from '../data'

export function Modal({ activeKey, onClose, isOpen, data: customData }) {
  const isModalOpen = isOpen !== undefined ? isOpen : Boolean(activeKey)
  const data = customData || (activeKey ? jasa[activeKey] : null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen, onClose])

  if (!isModalOpen || !data) return null

  const IconComponent = data.icon

  const getProfileIcon = (label = '') => {
    const lower = label.toLowerCase()
    if (lower.includes('nama')) return <User size={15} className="profile-icon" />
    if (lower.includes('tempat') || lower.includes('lahir') || lower.includes('lokasi')) return <MapPin size={15} className="profile-icon" />
    if (lower.includes('pendidikan')) return <GraduationCap size={15} className="profile-icon" />
    if (lower.includes('status') || lower.includes('bekerja')) return <Briefcase size={15} className="profile-icon" />
    if (lower.includes('tarif') || lower.includes('biaya') || lower.includes('harga')) return <Coins size={15} className="profile-icon" />
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-wrap">
            {IconComponent && (
              <div className="modal-icon-badge">
                <IconComponent size={24} />
              </div>
            )}
            <h2 className="modal-title">{data.title}</h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Tutup Modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {data.infoList && (
            <div className="modal-profile-grid">
              {data.infoList.map((item, idx) => (
                <div key={idx} className="modal-profile-row">
                  <span className="profile-label">
                    {getProfileIcon(item.label)}
                    <span>{item.label}</span>
                  </span>
                  <span className="profile-value">{item.value}</span>
                </div>
              ))}
            </div>
          )}

          <p className="modal-description">{data.description}</p>

          {/* Komponen Showcase Portofolio Terpisah */}
          {data.projects && <PortfolioShowcase projects={data.projects} />}

          {data.note && (
            <div className="modal-note-box">
              <span className="modal-note-label">note :</span>{' '}
              <span className="modal-note-text">{data.note}</span>
            </div>
          )}

          {data.features && (
            <ul className="modal-feature-list">
              {data.features.map((feature, idx) => (
                <li key={idx} className="modal-feature-item">
                  <CheckCircle2 size={18} className="modal-feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn-secondary"
            onClick={onClose}
          >
            Tutup
          </button>
          {data.buttonUrl ? (
            <a
              href={data.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-portfolio"
            >
              <ExternalLink size={17} />
              {data.buttonText || 'Lihat Portofolio Lengkap'}
            </a>
          ) : data.whatsappUrl ? (
            <a
              href={data.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-wa"
            >
              <MessageCircle size={17} />
              {data.buttonText || 'Hubungi via WhatsApp'}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}
