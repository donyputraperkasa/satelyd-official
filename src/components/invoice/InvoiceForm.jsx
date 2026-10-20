import { InvoiceFormHeader } from './InvoiceFormHeader'
import { InvoiceStudentInput } from './InvoiceStudentInput'
import { InvoiceSessionsBuilder } from './InvoiceSessionsBuilder'
import { InvoicePaymentSection } from './InvoicePaymentSection'
import { InvoiceFormActions } from './InvoiceFormActions'

export function InvoiceForm({
  nama,
  setNama,
  sessions,
  onAddSession,
  onRemoveSession,
  onUpdateSession,
  payment,
  setPayment,
  isPaid,
  setIsPaid,
  tanggalLunas,
  setTanggalLunas,
  onPrint,
  onReset,
}) {
  return (
    <div className="invoice-editor-panel no-print">
      <div className="editor-card">
        {/* Header Form & Navigasi */}
        <InvoiceFormHeader />

        <form
          className="simple-form"
          onSubmit={(e) => {
            e.preventDefault()
            onPrint()
          }}
        >
          {/* Input Nama Siswa */}
          <InvoiceStudentInput nama={nama} setNama={setNama} />

          {/* Builder Sesi Les (Dinamis Tambah/Hapus) */}
          <InvoiceSessionsBuilder
            sessions={sessions}
            onAddSession={onAddSession}
            onRemoveSession={onRemoveSession}
            onUpdateSession={onUpdateSession}
          />

          {/* Input Payment & Status Pembayaran */}
          <InvoicePaymentSection
            payment={payment}
            setPayment={setPayment}
            isPaid={isPaid}
            setIsPaid={setIsPaid}
            tanggalLunas={tanggalLunas}
            setTanggalLunas={setTanggalLunas}
          />

          {/* Tombol Aksi Download PDF & Reset */}
          <InvoiceFormActions onReset={onReset} />
        </form>
      </div>
    </div>
  )
}
