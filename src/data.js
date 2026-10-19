import { BookOpen, Code2, UserRound } from 'lucide-react'
import { webProjects } from './projectsData'

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
    infoList: [
      { label: 'Jenjang Belajar', value: 'SMP dan SMA/K' },
      { label: 'Model', value: 'Home Visit atau Coffee Shop' },
      { label: 'SMP', value: 'Rp 50.000 / Sesi / Anak' },
      { label: 'SMA', value: 'Rp 70.000 / Sesi / Anak' }
    ],
    description:
      'Referensi coffee shop : tetra coffee, ramble coffee, fore, cold n brew, tomoro coffee',
    buttonText: 'Tanya Dulu',
    whatsappUrl:
      'https://wa.me/6282236343404?text=Halo%20Masdon%2C%20saya%20ingin%20tanya%20informasi%20Jasa%20Les%20Privat%20Matematika.',
    note: 'memiliki sertifikasi guru',
  },

  web_dev: {
    title: 'Jasa Bikin Website',
    icon: Code2,
    description:
      'Wujudkan kebutuhan digital Anda melalui website yang modern, interaktif, dan fungsional, dengan solusi yang dirancang sesuai kebutuhan sekolah, organisasi, maupun bisnis Anda.',
    buttonText: 'Tanya Dulu',
    whatsappUrl:
      'https://wa.me/6282236343404?text=Halo%20Masdon%2C%20saya%20tertarik%20untuk%20konsultasi%20Jasa%20Pembuatan%20Website%20%2F%20Aplikasi.',
    projects: webProjects,
    note: 'alumni revou FSSE',
  },
}

export const medsos = {
  instagram: 'https://www.instagram.com/donyputraperkasa/',
  tiktok: 'https://www.tiktok.com/@donyputraperkasa',
  linkedin: 'https://www.linkedin.com/in/dony-putra-perkasa-49ba87233/?isSelfProfile=true',
  email: 'mailto:donyputraperkasa@gmail.com',
}
