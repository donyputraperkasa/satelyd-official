import { ExternalLink, Sparkles } from 'lucide-react'

export function Card({ title, href, onClick, badge, isExternal, icon: IconComponent }) {
  const content = (
    <>
      {IconComponent && (
        <div className="card-icon-wrap">
          <IconComponent size={22} />
        </div>
      )}
      <span className="card-text">{title}</span>
      {badge && (
        <span className="card-action-badge">
          {isExternal ? <ExternalLink size={12} /> : <Sparkles size={12} />}
          {badge}
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="sketch-card"
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="sketch-card"
    >
      {content}
    </button>
  )
}
