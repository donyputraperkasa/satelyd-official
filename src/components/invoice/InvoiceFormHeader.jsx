import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck } from 'lucide-react'

export function InvoiceFormHeader() {
  return (
    <>
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
    </>
  )
}
