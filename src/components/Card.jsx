import { ChevronRight } from 'lucide-react'

export function Card({
  title,
  href,
  onClick,
  badge,
  isExternal,
  icon: IconComponent,
  isHighlight = false,
  variant = 'default',
  className = ''
}) {
  const cardClasses = [
    'sketch-card',
    isHighlight ? 'card-highlight' : '',
    variant ? `card-${variant}` : '',
    className
  ].filter(Boolean).join(' ')

  const content = (
    <>
      {IconComponent && (
        <div className="card-icon-wrap">
          <IconComponent size={isHighlight ? 36 : 24} />
        </div>
      )}
      <div className="card-info">
        <span className="card-text">{title}</span>
      </div>
      {variant === 'side' && (
        <ChevronRight size={20} className="card-arrow-icon" />
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={cardClasses}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cardClasses}
    >
      {content}
    </button>
  )
}

