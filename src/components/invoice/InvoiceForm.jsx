import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ShieldCheck,
  User,
  Calendar,
  MapPin,
  BookOpen,
  DollarSign,
  Plus,
  Trash2,
  Download,
  RotateCcw,
} from 'lucide-react'

export function InvoiceForm({
  nama,
  setNama,
  sessions,
  onAddSession,
  onRemoveSession,
  onUpdateSession,
  payment,
  setPayment,
  onPrint,
  onReset,
}) {
  return (
    <div className="invoice-editor-panel no-print">
      <div className="editor-card">
        <div className="editor-top-nav">
          <Link to="/" className="btn-back-home" title="Kembali ke Beranda">
            <ArrowLeft size={14} />
            <span>Beranda</span>
          </Link>
          <span className="editor-badge">
            <ShieldCheck size={13} /> Form Pembuat Invoice
          </span>
        </div>

        <div className="editor-header">
          <h1 className="editor-title">Invoice Les Matematika</h1>
          <p className="editor-subtitle">
            Isi rincian sesi belajar, lalu klik <strong>Unduh / Cetak PDF</strong>.
          </p>
        </div>

        <form
          className="simple-form"
          onSubmit={(e) => {
            e.preventDefault()
            onPrint()
          }}
        >
          {/* Nama Siswa */}
          <div className="form-item">
            <label className="input-label">
              <User size={15} /> Nama Siswa
            </label>
            <input
              type="text"
              className="text-input"
              placeholder="Contoh: adera"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          {/* Daftar Sesi Pembelajaran (Dinamis) */}
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

          {/* Payment */}
          <div className="form-item">
            <label className="input-label">
              <DollarSign size={15} /> Payment (Total Tagihan)
            </label>
            <input
              type="text"
              className="text-input text-input-payment"
              placeholder="Contoh: Rp100.000"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            />
          </div>

          {/* Tombol Aksi */}
          <div className="editor-buttons">
            <button type="submit" className="btn-download-pdf">
              <Download size={17} />
              <span>Unduh / Cetak Invoice (PDF)</span>
            </button>
            <button
              type="button"
              className="btn-reset"
              onClick={onReset}
              title="Kosongkan form"
            >
              <RotateCcw size={16} />
              <span>Reset</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
