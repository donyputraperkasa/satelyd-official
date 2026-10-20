import { Download, RotateCcw } from 'lucide-react'

export function InvoiceFormActions({ onReset }) {
  return (
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
  )
}
