import { useState } from 'react'
import { Lock, Layers, Maximize2, ChevronDown, ChevronUp } from 'lucide-react'

export function PortfolioShowcase({ projects }) {
  // Awalnya null sehingga preview embed belum terbuka
  const [activeProjectId, setActiveProjectId] = useState(null)

  if (!projects || projects.length === 0) return null

  const handleToggleProject = (id) => {
    setActiveProjectId((prev) => (prev === id ? null : id))
  }

  const activeProject = projects.find((p) => p.id === activeProjectId)

  return (
    <div className="portfolio-showcase">
      {/* Header Bar */}
      <div className="portfolio-header-bar">
        <span className="portfolio-section-title">
          <Layers size={16} /> Daftar Portofolio
        </span>
        {activeProjectId && (
          <button
            type="button"
            className="portfolio-close-preview-btn"
            onClick={() => setActiveProjectId(null)}
          >
            Tutup Preview
          </button>
        )}
      </div>

      {/* Tabs / Tombol Pilihan Project (Tanpa Icon Globe) */}
      <div className="portfolio-tabs-nav" role="tablist">
        {projects.map((project) => {
          const isSelected = activeProjectId === project.id
          return (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`portfolio-tab-pill ${isSelected ? 'active' : ''}`}
              onClick={() => handleToggleProject(project.id)}
            >
              {project.isPrivate && (
                <Lock size={13} className="tab-pill-icon lock" />
              )}
              <span className="tab-pill-title">{project.title}</span>
              {isSelected ? (
                <ChevronUp size={13} className="tab-pill-arrow" />
              ) : (
                <ChevronDown size={13} className="tab-pill-arrow" />
              )}
            </button>
          )
        })}
      </div>

      {/* Container Preview Embed: HANYA MUNCUL DI BAWAHNYA SETELAH TOMBOL DIKLIK */}
      {activeProject && (
        <div className="portfolio-viewer-box">
          {/* Browser Window Header Mockup */}
          <div className="browser-mockup-bar">
            <div className="browser-window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>

            <div className="browser-url-pill">
              {activeProject.isPrivate ? (
                <span className="private-badge">
                  <Lock size={12} /> URL Dirahasiakan (Permintaan Klien)
                </span>
              ) : (
                <span className="url-text">
                  {activeProject.url}
                </span>
              )}
            </div>

            <div className="browser-actions">
              {activeProject.url && (
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="browser-open-btn"
                  title="Buka di tab baru (Layar Penuh)"
                >
                  <Maximize2 size={13} />
                  <span>Buka Penuh</span>
                </a>
              )}
            </div>
          </div>

          {/* Keterangan Singkat Project */}
          <div className="project-info-bar">
            <div className="project-info-text">
              <span className="project-category">{activeProject.category}</span>
              <p className="project-desc">{activeProject.description}</p>
            </div>
          </div>

          {/* Frame Embed / Fallback */}
          <div className="browser-viewport-frame">
            {activeProject.isPrivate ? (
              <div className="private-project-placeholder">
                <div className="private-icon-circle">
                  <Lock size={28} />
                </div>
                <h3>Proyek Undangan Digital Bersifat Privat</h3>
                <p>
                  Proyek ini selesai dikerjakan secara eksklusif. Untuk menjaga privasi data mempelai & keluarga, live preview publik tidak ditampilkan.
                </p>
              </div>
            ) : (
              <iframe
                src={activeProject.url}
                title={`Live Preview - ${activeProject.title}`}
                className="portfolio-iframe"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
