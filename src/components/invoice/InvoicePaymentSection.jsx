import { DollarSign, Stamp, Clock, BadgeCheck, Calendar } from 'lucide-react'

export function InvoicePaymentSection({
  payment,
  setPayment,
  isPaid,
  setIsPaid,
  tanggalLunas,
  setTanggalLunas,
}) {
  return (
    <>
      {/* Input Payment (Total Tagihan) */}
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

      {/* Status Pembayaran */}
      <div className="form-item">
        <label className="input-label">
          <Stamp size={15} /> Status Pembayaran
        </label>

        {/* 2 Tombol Pilihan Status */}
        <div className="payment-status-toggle-grid">
          <button
            type="button"
            className={`status-btn-choice ${!isPaid ? 'active unpaid' : ''}`}
            onClick={() => setIsPaid(false)}
          >
            <Clock size={15} />
            <span>Belum Bayar</span>
          </button>
          <button
            type="button"
            className={`status-btn-choice ${isPaid ? 'active paid' : ''}`}
            onClick={() => setIsPaid(true)}
          >
            <BadgeCheck size={16} />
            <span>Sudah Bayar (Lunas)</span>
          </button>
        </div>

        {/* Form Tanggal Pelunasan di Bawah 2 Tombol */}
        {isPaid && (
          <div className="payment-date-under-field">
            <Calendar size={15} style={{ color: '#38BDF8', flexShrink: 0 }} />
            <input
              type="text"
              className="text-input-date"
              placeholder="Tanggal Pelunasan (Contoh: 20 Oktober 2026, atau kosongkan)"
              value={tanggalLunas}
              onChange={(e) => setTanggalLunas(e.target.value)}
            />
            <button
              type="button"
              className="btn-quick-today"
              onClick={() => {
                const today = new Date().toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
                setTanggalLunas(today)
              }}
              title="Isi otomatis dengan tanggal hari ini"
            >
              + Hari Ini
            </button>
          </div>
        )}
      </div>
    </>
  )
}
