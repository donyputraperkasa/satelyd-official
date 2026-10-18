import { BookOpen, Code2, UserRound } from 'lucide-react'

export const jasa = {
  about_me: {
    title: 'Tentang Saya',
    icon: UserRound,
    type: 'profile',
    infoList: [
      { label: 'Nama Lengkap', value: 'Dony Putra Perkasa' },
      { label: 'Tempat Lahir', value: 'Yogyakarta, Indonesia' },
      { label: 'Pendidikan', value: 'Matematika & Software Engineering' },
      { label: 'Status Bekerja', value: 'Staff IT - Yayasan BOPKRI Yogyakarta' },
    ],
    buttonText: 'Kunjungi Portofolio Lengkap',
    buttonUrl: 'https://portofolio-ku-gold.vercel.app/',
  },
  math_tutoring: {
    title: 'Les Matematika',
    icon: BookOpen,
    description:
      'Bimbingan belajar matematika intensif untuk jenjang SD, SMP, hingga SMA. Untuk info lebih lanjut dapat menghubungi nomor berikut.',
    buttonText: 'Tanya Les via WhatsApp',
    whatsappUrl:
      'https://wa.me/6282236343404?text=Halo%20Masdon%2C%20saya%20ingin%20tanya%20informasi%20Jasa%20Les%20Privat%20Matematika.',
  },
  web_dev: {
    title: 'Jasa Bikin Website',
    icon: Code2,
    description:
      'Layanan pembuatan website sederhana untuk bisnismu. Untuk info lebih lanjut dapat berkonsultasi via WhatsApp.',
    buttonText: 'Konsultasi via WhatsApp',
    whatsappUrl:
      'https://wa.me/6282236343404?text=Halo%20Masdon%2C%20saya%20tertarik%20untuk%20konsultasi%20Jasa%20Pembuatan%20Website%20%2F%20Aplikasi.',
  },
}

export const medsos = {
  instagram: 'https://www.instagram.com/donyputraperkasa/',
  tiktok: 'https://www.tiktok.com/@donyputraperkasa',
  linkedin: 'https://www.linkedin.com/in/dony-putra-perkasa-49ba87233/?isSelfProfile=true',
  email: 'mailto:donyputraperkasa@gmail.com',
}
