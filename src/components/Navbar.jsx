import { Orbit } from 'lucide-react'

export function Navbar() {
  return (
    <header className="navbar-bar">
      <a href="/" className="navbar-brand">
        <Orbit size={20} className="brand-orbit-icon" />
        <span>satel<span className="brand-accent">y</span>d.id</span>
      </a>
    </header>
  )
}
