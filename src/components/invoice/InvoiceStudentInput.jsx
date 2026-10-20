import { User } from 'lucide-react'

export function InvoiceStudentInput({ nama, setNama }) {
  return (
    <div className="form-item">
      <label className="input-label">
        <User size={15} /> Nama Siswa
      </label>
      <input
        type="text"
        className="text-input"
        placeholder="Nama Siswa"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
    </div>
  )
}
