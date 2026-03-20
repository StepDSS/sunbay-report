import { useState } from 'react'

export default function SectionToggle({ label, variant = 'analysis', children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="section-toggle">
      <button
        className={`section-toggle-btn${variant !== 'analysis' ? ` ${variant}` : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="section-toggle-label">{label}</span>
        <span className="section-toggle-icon">{open ? '\u2212' : '+'}</span>
      </button>
      {open && <div className="section-toggle-panel">{children}</div>}
    </div>
  )
}
