import { Orbit, BadgeCheck } from 'lucide-react'

export function InvoiceSheet({
  nama,
  sessions,
  payment,
  isPaid,
  tanggalLunas = '',
}) {
  return (
    <div className="invoice-official-sheet" id="invoice-sheet">
      {/* Header Kop Satelyd */}
      <header className="sheet-header">
        <div className="sheet-brand">
          <div className="brand-title-row">
            <Orbit size={26} className="sheet-orbit-icon" />
            <span className="sheet-brand-name">
              satel<span className="brand-accent-y">y</span>d.id
            </span>
          </div>
        </div>

        <div className="sheet-meta-right">
          <h2 className="sheet-doc-heading">INVOICE LES</h2>
        </div>
      </header>

      <div className="sheet-divider" />

      {/* Nama Siswa */}
      <section className="sheet-student-section">
        <div className="detail-row">
          <div className="detail-label">Nama Siswa</div>
          <div className="detail-separator">:</div>
          <div className="detail-value font-bold">
            {nama || <span className="empty-placeholder">(Belum diisi)</span>}
          </div>
        </div>
      </section>

      {/* Tabel / Daftar Sesi Pembelajaran */}
      <section className="sheet-sessions-table-wrap">
        <div className="table-caption">Daftar Pertemuan & Sesi Les:</div>
        <table className="sheet-sessions-table">
          <thead>
            <tr>
              <th className="th-no">#</th>
              <th className="th-tempat">Tempat & Tanggal</th>
              <th className="th-materi">Materi Pembelajaran</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((item, idx) => (
              <tr key={item.id}>
                <td className="td-no">{idx + 1}</td>
                <td className="td-tempat">
                  {item.tempatTanggal || (
                    <span className="empty-placeholder">(Tempat & Tanggal belum diisi)</span>
                  )}
                </td>
                <td className="td-materi">
                  {item.materi || (
                    <span className="empty-placeholder">(Materi belum diisi)</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Payment Section */}
      <section className="sheet-payment-row">
        <div className="payment-left-group">
          <div className="detail-label">Total Payment</div>
          <div className="detail-separator">:</div>
          <div className="detail-value payment-amount">
            {payment || <span className="empty-placeholder">(Belum diisi)</span>}
          </div>
        </div>

        {isPaid && (
          <div className="sheet-payment-badge badge-red">
            <BadgeCheck size={16} />
            <span className="badge-main-text">STATUS: LUNAS</span>
            {tanggalLunas && (
              <span className="badge-date-text">({tanggalLunas})</span>
            )}
          </div>
        )}
      </section>

      {/* Rekening Pembayaran */}
      <section className="sheet-payment-box">
        <div className="payment-box-title">Metode Pembayaran (Transfer Bank):</div>
        <div className="payment-bank-details">
          <strong>BCA: 0374555339</strong>
          <span>a.n Dony Putra Perkasa</span>
        </div>
        <div className="payment-bank-details">
          <strong>Mandiri: 1370016948529</strong>
          <span>a.n Dony Putra Perkasa</span>
        </div>
        <p className="payment-note">
          {isPaid ? (
            <span className="payment-note-paid">
              ✓ Tagihan ini telah dibayar lunas. Terima kasih banyak atas kepercayaan Ayah / Bunda!
            </span>
          ) : (
            '*Mohon konfirmasi dan kirimkan bukti transfer setelah pembayaran dilakukan.'
          )}
        </p>
      </section>

      {/* Footer Paper */}
      <footer className="sheet-footer">
        <p>© {new Date().getFullYear()} satelyd.id • WhatsApp: +62 822-3634-3404 • Yogyakarta, Indonesia</p>
      </footer>
    </div>
  )
}
