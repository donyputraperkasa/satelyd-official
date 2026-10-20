import { useState } from 'react'
import { InvoiceForm } from '../components/invoice/InvoiceForm'
import { InvoiceSheet } from '../components/invoice/InvoiceSheet'
import '../Invoice.css'

export function InvoicePage() {
  const [nama, setNama] = useState('')
  const [sessions, setSessions] = useState([
    { id: 1, tempatTanggal: '', materi: '' },
  ])
  const [payment, setPayment] = useState('')
  const [isPaid, setIsPaid] = useState(false)
  const [tanggalLunas, setTanggalLunas] = useState('')

  const handleAddSession = () => {
    setSessions((prev) => [
      ...prev,
      { id: Date.now(), tempatTanggal: '', materi: '' },
    ])
  }

  const handleRemoveSession = (id) => {
    if (sessions.length === 1) return
    setSessions((prev) => prev.filter((s) => s.id !== id))
  }

  const handleUpdateSession = (id, field, value) => {
    setSessions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    )
  }

  const handlePrint = () => {
    window.print()
  }

  const handleReset = () => {
    if (confirm('Kosongkan semua isian form?')) {
      setNama('')
      setSessions([{ id: Date.now(), tempatTanggal: '', materi: '' }])
      setPayment('')
      setIsPaid(false)
      setTanggalLunas('')
    }
  }

  return (
    <div className="simple-invoice-wrapper">
      <div className="invoice-split-layout">
        {/* Kolom Kiri: Form Editor */}
        <InvoiceForm
          nama={nama}
          setNama={setNama}
          sessions={sessions}
          onAddSession={handleAddSession}
          onRemoveSession={handleRemoveSession}
          onUpdateSession={handleUpdateSession}
          payment={payment}
          setPayment={setPayment}
          isPaid={isPaid}
          setIsPaid={setIsPaid}
          tanggalLunas={tanggalLunas}
          setTanggalLunas={setTanggalLunas}
          onPrint={handlePrint}
          onReset={handleReset}
        />

        {/* Kolom Kanan: Pratinjau Lembar Invoice Resmi */}
        <div className="invoice-preview-wrapper">
          <div className="preview-label no-print">
            <span>Pratinjau Langsung (Sebelah Form):</span>
          </div>
          <InvoiceSheet
            nama={nama}
            sessions={sessions}
            payment={payment}
            isPaid={isPaid}
            tanggalLunas={tanggalLunas}
          />
        </div>
      </div>
    </div>
  )
}
