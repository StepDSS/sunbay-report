import { useState, useEffect } from 'react'

const memoItems = [
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

const analysisItems = [
  { href: '#integration-heatmap', label: 'Integration Heatmap' },
  { href: '#tam-filter', label: 'TAM Adoption Filter' },
  { href: '#debt-recovery-calc', label: 'Debt Recovery Calculator' },
  { href: '#competitor-radar', label: 'Competitor Radar' },
  { href: '#calculator', label: 'Return Sensitivity Model' },
  { href: '#tam-waterfall', label: 'TAM Waterfall' },
]

export default function Nav({ view, setView }) {
  const [activeId, setActiveId] = useState('')
  const navItems = view === 'memo' ? memoItems : analysisItems

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
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [view])

  return (
    <nav>
      <div className="nav-title">Sunbay.io Memo</div>
      <div className="nav-view-toggle">
        <button className={`tam-btn${view === 'memo' ? ' active' : ''}`} onClick={() => setView('memo')}>
          Memo
        </button>
        <button className={`tam-btn${view === 'analysis' ? ' active' : ''}`} onClick={() => setView('analysis')}>
          Analysis
        </button>
      </div>
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
