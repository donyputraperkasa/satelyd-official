import { Calendar, Plus, Trash2, MapPin, BookOpen } from 'lucide-react'

export function InvoiceSessionsBuilder({
  sessions,
  onAddSession,
  onRemoveSession,
  onUpdateSession,
}) {
  return (
    <div className="sessions-builder-box">
      <div className="sessions-builder-header">
        <label className="input-label">
          <Calendar size={15} /> Rincian Sesi Les ({sessions.length} Sesi)
        </label>
        <button
          type="button"
          className="btn-add-session"
          onClick={onAddSession}
        >
          <Plus size={15} />
          <span>Tambah Sesi</span>
        </button>
      </div>

      <div className="sessions-list-inputs">
        {sessions.map((session, index) => (
          <div key={session.id} className="session-item-card">
            <div className="session-card-top">
              <span className="session-index-pill">
                Sesi #{index + 1}
              </span>
              {sessions.length > 1 && (
                <button
                  type="button"
                  className="btn-remove-session"
                  onClick={() => onRemoveSession(session.id)}
                  title="Hapus sesi ini"
                >
                  <Trash2 size={14} />
                  <span>Hapus</span>
                </button>
              )}
            </div>

            {/* Tempat & Tanggal */}
            <div className="form-item-inner">
              <label className="input-label-inner">
                <MapPin size={13} /> Tempat & Tanggal
              </label>
              <input
                type="text"
                className="text-input text-input-sm"
                placeholder="Contoh: home visit - 10 oktober 2026"
                value={session.tempatTanggal}
                onChange={(e) =>
                  onUpdateSession(session.id, 'tempatTanggal', e.target.value)
                }
              />
            </div>

            {/* Materi */}
            <div className="form-item-inner">
              <label className="input-label-inner">
                <BookOpen size={13} /> Materi
              </label>
              <input
                type="text"
                className="text-input text-input-sm"
                placeholder="Contoh: operasi aljabar"
                value={session.materi}
                onChange={(e) =>
                  onUpdateSession(session.id, 'materi', e.target.value)
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
