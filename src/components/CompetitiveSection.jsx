import { useState } from 'react'

const compNames = ['sunbay', 'chaser', 'upflow', 'gaviti', 'tesorio']
const compLabels = ['Sunbay', 'Chaser', 'Upflow', 'Gaviti', 'Tesorio']
const compRows = [
  ['HQ', 'Kraków', 'London', 'Paris', 'Tel Aviv', 'San Francisco'],
  ['Founded', '2025', '2013', '2018', '2018', '2015'],
  ['Employees', '3+1', '~30-33', '~68-72', '~35', '~62'],
  ['Funding', '$60K', '~$4.8M', '~$23M', '~$11.5M', '~$35.5M'],
  ['Est. Revenue', '~$18K ARR', '~$3.3M', '~$4.1M', '~$3.8-6.6M', '~$11M'],
  ['Polish Integrations', '6 tools', '0', '0', '0', '0'],
  ['Payment Portal', 'No', 'Yes', 'Yes', 'Yes', 'Yes'],
  ['Auto Calls', 'Planned', 'Yes', 'No', 'Yes', 'No'],
  ['Credit Checks', 'No', 'Yes', 'No', 'Yes', 'No'],
  ['Entry Price', 'EUR100/mo', '$200/mo', 'Custom', '$45/mo', 'Custom']
]
const accentCells = { 'Polish Integrations': [0], 'Payment Portal': [1, 2, 3, 4], 'Auto Calls': [1, 3], 'Credit Checks': [1, 3] }
const riskCells = { 'Polish Integrations': [1, 2, 3, 4], 'Payment Portal': [0], 'Auto Calls': [2, 4], 'Credit Checks': [0, 2, 4] }

export default function CompetitiveSection() {
  const [active, setActive] = useState({ sunbay: true, chaser: true, upflow: true, gaviti: true, tesorio: true })

  const toggle = (name) => setActive((prev) => ({ ...prev, [name]: !prev[name] }))
  const visibleIndices = compNames.map((n, i) => active[n] ? i : -1).filter((i) => i !== -1)

  return (
    <section id="competitive">
      <h2>C4. Competitive Landscape</h2>
      <div className="opinion-card">
        <ul>
          <li>Polish competition: Vindicat.pl (20K users, Fintech of Year 2023) = debt recovery. Comarch Optima (60K users) = ERP module. wFirma = basic reminders at 49 PLN/mo.</li>
          <li>International: Chaser is closest — almost every Sunbay feature plus much more, for only 2x the price. All raised $4.8-35.5M.</li>
          <li>Indirect: debt recovery agencies (PLN 3.7B industry, post-default) and automation tools (Zapier/Make, require technical skill).</li>
          <li>Sunbay's differentiator: Polish integration. Shallow — APIs are public, barrier is low.</li>
        </ul>
      </div>

      <h4 id="competitor-comparison">Competitor Comparison (International)</h4>
      <div className="comp-toggles">
        {compNames.map((name, i) => (
          <button key={name} className={`comp-toggle${active[name] ? ' active' : ''}`} onClick={() => toggle(name)}>
            {compLabels[i]}
          </button>
        ))}
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th></th>
              {visibleIndices.map((i) => <th key={i}>{compLabels[i]}</th>)}
            </tr>
          </thead>
          <tbody>
            {compRows.map((row) => (
              <tr key={row[0]}>
                <td>{row[0]}</td>
                {visibleIndices.map((i) => {
                  const isAccent = accentCells[row[0]]?.includes(i)
                  const isRisk = riskCells[row[0]]?.includes(i)
                  return (
                    <td key={i} style={isAccent ? { color: 'var(--green)' } : isRisk ? { color: 'var(--risk)' } : undefined}>
                      {row[i + 1]}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4>Polish Local Competitors</h4>
      <div style={{ overflowX: 'auto' }}>
      <table>
        <thead><tr><th></th><th>Sunbay</th><th>Vindicat.pl</th><th>Comarch Optima</th><th>wFirma</th></tr></thead>
        <tbody>
          <tr><td>Core Identity</td><td>AR automation</td><td>Debt recovery</td><td>ERP module</td><td>Accounting platform</td></tr>
          <tr><td>AR Lifecycle</td><td>Proactive</td><td>Reactive</td><td>Preventive</td><td>Basic</td></tr>
          <tr><td>Users</td><td>~10</td><td>20K+</td><td>60K+</td><td>N/A</td></tr>
          <tr><td>Entry Price</td><td>EUR100/mo</td><td>169 PLN (~EUR39)</td><td>~64 PLN (Comarch only)</td><td>49 PLN (~EUR11)</td></tr>
          <tr><td>Multi-step Workflows</td><td>Yes</td><td>Yes</td><td>Yes</td><td style={{ color: 'var(--risk)' }}>No</td></tr>
        </tbody>
      </table>
      </div>
      <details className="footnotes">
        <summary>Methodology — Competitor Data</summary>
        <div className="detail-content">
          <ul>
            <li><strong>Revenue estimates are third-party/algorithmic, not verified.</strong> Upflow: $4.1M from <a href="https://getlatka.com/companies/upflow" target="_blank" rel="noopener noreferrer">Getlatka</a>. Chaser: ranges from &lt;$1M (<a href="https://www.owler.com/company/chaserhq" target="_blank" rel="noopener noreferrer">Owler</a>) to $5.2M (<a href="https://growjo.com/company/Chaser" target="_blank" rel="noopener noreferrer">Growjo</a>). Gaviti: $3.8-6.6M from <a href="https://getlatka.com/companies/gaviti" target="_blank" rel="noopener noreferrer">Getlatka</a>. Tesorio: ~$11M from LeadIQ.</li>
            <li><strong>Employee counts</strong> from <a href="https://tracxn.com/d/companies/upflow/" target="_blank" rel="noopener noreferrer">Tracxn</a>, <a href="https://pitchbook.com/profiles/company/104545-63" target="_blank" rel="noopener noreferrer">PitchBook</a>, and LinkedIn.</li>
            <li><strong>Feature matrix</strong> compiled from direct observation of competitor websites: <a href="https://www.chaserhq.com/" target="_blank" rel="noopener noreferrer">chaserhq.com</a>, <a href="https://upflow.io" target="_blank" rel="noopener noreferrer">upflow.io</a>, <a href="https://www.gaviti.com" target="_blank" rel="noopener noreferrer">gaviti.com</a>, <a href="https://www.tesorio.com" target="_blank" rel="noopener noreferrer">tesorio.com</a>, <a href="https://vindicat.pl" target="_blank" rel="noopener noreferrer">vindicat.pl</a>. Accessed March 2026.</li>
            <li><strong>Funding data</strong> from <a href="https://www.crunchbase.com" target="_blank" rel="noopener noreferrer">Crunchbase</a>, PitchBook, <a href="https://app.dealroom.co/companies/chaser_1" target="_blank" rel="noopener noreferrer">Dealroom</a>.</li>
            <li><strong>Chaser UK filings:</strong> Files "total exemption full accounts" at <a href="https://find-and-update.company-information.service.gov.uk/company/08517987/filing-history" target="_blank" rel="noopener noreferrer">UK Companies House</a> — does not disclose revenue.</li>
            <li>Source: direct_competitor_landscape.md, competitor_addition.md, traction_benchmarking.md</li>
          </ul>
          <p style={{ marginTop: '0.75rem', marginBottom: 0 }}><a href="#sources" style={{ color: 'var(--orange)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>View all sources</a></p>
        </div>
      </details>
    </section>
  )
}
