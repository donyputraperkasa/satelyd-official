import { useEffect } from 'react'
import { X, CheckCircle2, MessageCircle } from 'lucide-react'

export function Modal({ isOpen, onClose, data }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !data) return null

  const IconComponent = data.icon

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
                <IconComponent size={22} />
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
          <p className="modal-description">{data.description}</p>

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
          <a
            href={data.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-wa"
          >
            <MessageCircle size={17} />
            {data.buttonText || 'Hubungi via WhatsApp'}
          </a>
        </div>
      </div>
    </div>
  )
}
