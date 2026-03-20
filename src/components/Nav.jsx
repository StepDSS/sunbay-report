import { useState, useEffect } from 'react'

const navItems = [
  { href: '#header', label: 'Overview' },
  { href: '#recommendation', label: 'Recommendation' },
  { href: '#arguments', label: 'Key Arguments & Risks' },
  { href: '#team', label: 'Team', sub: true },
  { href: '#product', label: 'Product', sub: true },
  { href: '#market', label: 'Market', sub: true },
  { href: '#competitive', label: 'Competitive Landscape', sub: true },
  { href: '#traction', label: 'Traction & Benchmarks', sub: true },
  { href: '#round', label: 'The Round & Returns', sub: true },
  { href: '#calculator', label: 'Return Calculator' },
  { href: '#competitor-comparison', label: 'Competitor Comparison' },
  { href: '#tam-waterfall', label: 'TAM Waterfall' },
  { href: '#sources', label: 'Sources' },
]

export default function Nav() {
  const [activeId, setActiveId] = useState('header')

  useEffect(() => {
    const targetIds = navItems.map((item) => item.href.slice(1))
    function onScroll() {
      const selector = targetIds.map((id) => `[id="${id}"]`).join(',')
      const elements = document.querySelectorAll(selector)
      let current = ''
      elements.forEach((el) => {
        if (window.scrollY >= el.offsetTop - 100) current = el.id
      })
      if (current) setActiveId(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav>
      <div className="nav-title">Sunbay.io Memo</div>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`${item.sub ? 'sub' : ''}${activeId === item.href.slice(1) ? ' active' : ''}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
