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
  { href: '#interactive-analysis', label: 'Interactive Analysis' },
  { href: '#tam-filter', label: 'TAM Adoption Filter', sub: true, analysis: true },
  { href: '#tam-waterfall', label: 'TAM Waterfall', sub: true, analysis: true },
  { href: '#integration-heatmap', label: 'Integration Heatmap', sub: true, analysis: true },
  { href: '#debt-recovery-calc', label: 'Debt Recovery Calc', sub: true, analysis: true },
  { href: '#calculator', label: 'Return Sensitivity', sub: true, analysis: true },
  { href: '#sources', label: 'Sources' },
]

export default function Nav({ analysisOpen }) {
  const [activeId, setActiveId] = useState('header')

  useEffect(() => {
    const visible = navItems.filter((item) => !item.analysis || analysisOpen)
    const targetIds = visible.map((item) => item.href.slice(1))
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
  }, [analysisOpen])

  return (
    <nav>
      <div className="nav-title">Sunbay.io Memo</div>
      {navItems.map((item) => {
        if (item.analysis && !analysisOpen) return null
        return (
          <a
            key={item.href}
            href={item.href}
            className={`${item.sub ? 'sub' : ''}${activeId === item.href.slice(1) ? ' active' : ''}`}
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}
