import { useState } from 'react'

const BASE_ENTERPRISES = 36858
const ARPC = 1320

const filters = [
  {
    id: 'erp',
    label: 'Uses any ERP / CRM / BI',
    rate: 0.523,
    color: 'var(--purple)',
    source: 'Eurostat ICT Usage Survey 2025 (isoc_eb_iip), 10-249 employee band',
  },
  {
    id: 'website',
    label: 'Has a website',
    rate: 0.70,
    color: 'var(--orange)',
    source: 'Eurostat 2025: 62.4% small (10-49), 87.4% medium (50-249). Weighted ~70% using GUS size distribution.',
  },
  {
    id: 'latepay',
    label: 'Reports late payment issues',
    rate: 0.72,
    color: 'var(--risk)',
    source: 'EU Payment Observatory 2025 — 72% of Polish companies affected (highest in EU).',
  },
  {
    id: 'cloud',
    label: 'Uses cloud computing',
    rate: 0.55,
    color: 'var(--yellow)',
    source: 'Eurostat 2025: 49.6% small (10-49), 72.0% medium (50-249). Weighted ~55% using GUS size distribution.',
  },
]

function fmtNum(n) {
  return n.toLocaleString('en-US')
}

function fmtEur(n) {
  if (n >= 1e6) return 'EUR ' + (n / 1e6).toFixed(1) + 'M'
  if (n >= 1e3) return 'EUR ' + (n / 1e3).toFixed(0) + 'K'
  return 'EUR ' + n.toFixed(0)
}

export default function TAMAdoptionFilter() {
  const [active, setActive] = useState({ erp: false, website: false, latepay: false, cloud: false })

  const toggle = (id) => setActive((prev) => ({ ...prev, [id]: !prev[id] }))

  // Compute filtered count (multiplicative)
  const activeFilters = filters.filter((f) => active[f.id])
  const combinedRate = activeFilters.reduce((acc, f) => acc * f.rate, 1)
  const filtered = Math.round(BASE_ENTERPRISES * combinedRate)
  const tam = filtered * ARPC
  const pctRemaining = (filtered / BASE_ENTERPRISES) * 100

  // Build segments for the bar
  const segments = []
  let remaining = BASE_ENTERPRISES
  for (const f of filters) {
    if (active[f.id]) {
      const removed = Math.round(remaining * (1 - f.rate))
      segments.push({ ...f, removed })
      remaining = remaining - removed
    }
  }

  return (
    <section id="tam-filter">
      <h2>TAM Digital-Readiness Filter</h2>
      <p>How Poland's addressable market narrows when digital-readiness filters are applied. Toggle each filter independently to see the impact on addressable enterprises.</p>

      <div className="filter-controls">
        {filters.map((f) => (
          <label key={f.id} className="filter-checkbox">
            <input
              type="checkbox"
              checked={active[f.id]}
              onChange={() => toggle(f.id)}
            />
            <span className="filter-check-mark" style={active[f.id] ? { background: f.color, borderColor: f.color } : undefined} />
            <span className="filter-label">{f.label}</span>
            <span className="filter-rate">{(f.rate * 100).toFixed(1)}%</span>
          </label>
        ))}
      </div>

      <div className="filter-bar-container">
        <div className="filter-bar-bg">
          <div
            className="filter-bar-fill"
            style={{
              width: `${Math.max(pctRemaining, 2)}%`,
              background: activeFilters.length > 0 ? 'var(--purple)' : 'var(--border)',
              transition: 'width 0.5s ease, background 0.3s ease',
            }}
          />
        </div>
        <div className="filter-bar-labels">
          <span>0</span>
          <span>{fmtNum(BASE_ENTERPRISES)}</span>
        </div>
      </div>

      <div className="filter-results">
        <div className="calc-out" style={{ background: 'var(--bg-white)', border: '1px solid var(--border)' }}>
          <div className="label" style={{ color: 'var(--text-dim)' }}>Addressable Enterprises</div>
          <div className="value" style={{ color: 'var(--purple)' }}>{fmtNum(filtered)}</div>
        </div>
        <div className="calc-out" style={{ background: 'var(--bg-white)', border: '1px solid var(--border)' }}>
          <div className="label" style={{ color: 'var(--text-dim)' }}>Implied TAM</div>
          <div className="value" style={{ color: 'var(--purple)' }}>{fmtEur(tam)}</div>
        </div>
        <div className="calc-out" style={{ background: 'var(--bg-white)', border: '1px solid var(--border)' }}>
          <div className="label" style={{ color: 'var(--text-dim)' }}>% of Base</div>
          <div className="value" style={{ color: pctRemaining < 30 ? 'var(--risk)' : 'var(--purple)' }}>{pctRemaining.toFixed(1)}%</div>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="filter-breakdown">
          <h4>Filter Cascade</h4>
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Filter</th>
                <th>Pass Rate</th>
                <th>Removed</th>
                <th>Remaining</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td style={{ color: 'var(--text)' }}>Base (10-249 emp, B2B sectors)</td>
                <td>--</td>
                <td>--</td>
                <td style={{ fontWeight: 600 }}>{fmtNum(BASE_ENTERPRISES)}</td>
              </tr>
              {(() => {
                let rem = BASE_ENTERPRISES
                return activeFilters.map((f, i) => {
                  const removed = Math.round(rem * (1 - f.rate))
                  rem = rem - removed
                  return (
                    <tr key={f.id}>
                      <td>{i + 1}</td>
                      <td style={{ color: 'var(--text)' }}>{f.label}</td>
                      <td>{(f.rate * 100).toFixed(1)}%</td>
                      <td style={{ color: 'var(--risk)' }}>-{fmtNum(removed)}</td>
                      <td style={{ fontWeight: 600 }}>{fmtNum(rem)}</td>
                    </tr>
                  )
                })
              })()}
            </tbody>
          </table>
        </div>
      )}

      <details className="footnotes">
        <summary>Methodology — TAM Filtering Assumptions</summary>
        <div className="detail-content">
          <ul>
            <li><strong>Base enterprise count:</strong> 36,858 firms with 10-249 employees in B2B sectors. Source: GUS (Central Statistical Office of Poland) 2024 enterprise register. Breakdown: ~30,900 small (10-49) and ~5,958 medium (50-249).</li>
            <li><strong>ERP/CRM/BI usage (52.3%):</strong> Eurostat ICT Usage Survey 2025 indicator isoc_eb_iip, 10-249 employee band, Poland. Includes any enterprise resource planning, CRM, or business intelligence software.</li>
            <li><strong>Website ownership (~70%):</strong> Weighted average of Eurostat 2025 data — 62.4% for small enterprises (10-49 employees) and 87.4% for medium (50-249). Weighted by GUS size distribution (30,900 small / 5,958 medium).</li>
            <li><strong>Late payment issues (72%):</strong> EU Payment Observatory 2025 — Poland reports the highest rate of late payment problems in the EU. Consistent with Intrum European Payment Report 2025 (average B2B payment exceeds 60 days).</li>
            <li><strong>Cloud computing (~55%):</strong> Eurostat 2025 — 49.6% small, 72.0% medium. Weighted by GUS size distribution.</li>
            <li><strong>ARPC:</strong> EUR 1,320/year — midpoint of Sunbay Basic (EUR 100/mo = EUR 1,200/yr) and Standard (EUR 120/mo = EUR 1,440/yr) tiers.</li>
            <li style={{ color: 'var(--risk)' }}><strong>Caveat:</strong> Filters are applied multiplicatively and independently. In reality, these populations heavily overlap — a company using cloud computing likely also has a website. The multiplicative approach overstates the filtering effect. This visualization is illustrative of relative filter impact, not a precise addressable market calculation.</li>
          </ul>
          <p style={{ marginTop: '0.75rem', marginBottom: 0 }}><a href="#sources" style={{ color: 'var(--orange)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>View all sources</a></p>
        </div>
      </details>
    </section>
  )
}
