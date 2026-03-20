import { useState } from 'react'

const axes = [
  'Polish Integrations',
  'Payment Portal',
  'Automated Calls',
  'Credit/Risk Scoring',
  'Feature Breadth',
  'Market Maturity',
]

const competitors = [
  { name: 'Sunbay', key: 'sunbay', color: '#F3B701', scores: [10, 0, 2, 0, 3, 1] },
  { name: 'Chaser', key: 'chaser', color: '#F66731', scores: [0, 10, 10, 10, 9, 10] },
  { name: 'Upflow', key: 'upflow', color: '#3A2F98', scores: [0, 10, 0, 0, 7, 6] },
  { name: 'Gaviti', key: 'gaviti', color: '#2ECC71', scores: [0, 10, 10, 10, 8, 6] },
  { name: 'Tesorio', key: 'tesorio', color: '#E84C3D', scores: [0, 10, 0, 0, 9, 8] },
]

const CX = 200
const CY = 200
const R = 150
const AXIS_COUNT = 6

function polarToXY(value, axisIndex) {
  const angle = (Math.PI * 2 * axisIndex) / AXIS_COUNT - Math.PI / 2
  const r = (value / 10) * R
  return [CX + r * Math.cos(angle), CY + r * Math.sin(angle)]
}

function polygonPoints(scores) {
  return scores.map((s, i) => polarToXY(s, i).join(',')).join(' ')
}

function gridPolygon(fraction) {
  return Array.from({ length: AXIS_COUNT }, (_, i) => {
    const angle = (Math.PI * 2 * i) / AXIS_COUNT - Math.PI / 2
    const r = fraction * R
    return `${CX + r * Math.cos(angle)},${CY + r * Math.sin(angle)}`
  }).join(' ')
}

const labelOffsets = [
  { dx: 0, dy: -16, anchor: 'middle' },    // top
  { dx: 16, dy: 4, anchor: 'start' },      // top-right
  { dx: 16, dy: 4, anchor: 'start' },      // bottom-right
  { dx: 0, dy: 18, anchor: 'middle' },     // bottom
  { dx: -16, dy: 4, anchor: 'end' },       // bottom-left
  { dx: -16, dy: 4, anchor: 'end' },       // top-left
]

export default function CompetitorRadar() {
  const [active, setActive] = useState({
    sunbay: true, chaser: true, upflow: true, gaviti: true, tesorio: true,
  })

  const toggle = (key) => setActive((prev) => ({ ...prev, [key]: !prev[key] }))
  const visibleComps = competitors.filter((c) => active[c.key])

  return (
    <section id="competitor-radar">
      <h2>Competitor Capability Radar</h2>
      <p>Spider chart comparing Sunbay against international competitors across 6 capability axes. Toggle competitors to isolate comparisons.</p>

      <div className="comp-toggles">
        {competitors.map((c) => (
          <button
            key={c.key}
            className={`comp-toggle${active[c.key] ? ' active' : ''}`}
            style={active[c.key] ? { background: c.color, borderColor: c.color, color: c.color === '#F3B701' ? '#000' : '#fff' } : undefined}
            onClick={() => toggle(c.key)}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="radar-container">
        <svg viewBox="0 0 400 400" className="radar-svg">
          {/* Grid rings */}
          {[0.2, 0.4, 0.6, 0.8, 1.0].map((f) => (
            <polygon
              key={f}
              points={gridPolygon(f)}
              fill="none"
              stroke="var(--border)"
              strokeWidth={f === 1.0 ? 1.5 : 0.75}
              opacity={0.6}
            />
          ))}

          {/* Axis lines */}
          {Array.from({ length: AXIS_COUNT }, (_, i) => {
            const [x, y] = polarToXY(10, i)
            return <line key={i} x1={CX} y1={CY} x2={x} y2={y} stroke="var(--border)" strokeWidth={0.75} opacity={0.5} />
          })}

          {/* Scale labels (2, 4, 6, 8, 10) on the first axis */}
          {[2, 4, 6, 8, 10].map((v) => {
            const [x, y] = polarToXY(v, 0)
            return (
              <text key={v} x={x + 8} y={y + 4} fontSize="9" fill="var(--text-dim)" opacity={0.5}>
                {v}
              </text>
            )
          })}

          {/* Competitor polygons */}
          {visibleComps.map((c) => (
            <g key={c.key}>
              <polygon
                points={polygonPoints(c.scores)}
                fill={c.color}
                fillOpacity={0.15}
                stroke={c.color}
                strokeWidth={2}
                strokeLinejoin="round"
              />
              {c.scores.map((s, i) => {
                const [x, y] = polarToXY(s, i)
                return <circle key={i} cx={x} cy={y} r={3.5} fill={c.color} />
              })}
            </g>
          ))}

          {/* Axis labels */}
          {axes.map((label, i) => {
            const [x, y] = polarToXY(10, i)
            const off = labelOffsets[i]
            return (
              <text
                key={label}
                x={x + off.dx}
                y={y + off.dy}
                textAnchor={off.anchor}
                fontSize="11"
                fontWeight="500"
                fill="var(--text-secondary)"
              >
                {label}
              </text>
            )
          })}
        </svg>
      </div>

      {/* Legend */}
      {visibleComps.length > 0 && (
        <div className="radar-legend">
          {visibleComps.map((c) => (
            <div key={c.key} className="radar-legend-item">
              <span className="radar-legend-swatch" style={{ background: c.color }} />
              {c.name}
            </div>
          ))}
        </div>
      )}

      {/* Score table */}
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Axis</th>
              {visibleComps.map((c) => <th key={c.key}>{c.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {axes.map((axis, ai) => (
              <tr key={axis}>
                <td style={{ fontWeight: 500, color: 'var(--text)' }}>{axis}</td>
                {visibleComps.map((c) => (
                  <td key={c.key} style={{ fontWeight: 600, color: c.scores[ai] >= 8 ? 'var(--green)' : c.scores[ai] <= 2 ? 'var(--risk)' : 'var(--text-secondary)' }}>
                    {c.scores[ai]}/10
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <details className="footnotes">
        <summary>Methodology — Scoring Criteria</summary>
        <div className="detail-content">
          <ul>
            <li><strong>Polish Integrations:</strong> Binary — has integrations with Polish accounting tools (10) or doesn't (0). Sunbay has 6 integrations; no international competitor has any.</li>
            <li><strong>Payment Portal:</strong> Dedicated portal where debtors can view and pay invoices. Chaser, Upflow, Gaviti, Tesorio all offer this; Sunbay does not.</li>
            <li><strong>Automated Calls:</strong> System-initiated phone calls for collections. Chaser and Gaviti have this; Sunbay has it planned (AI voice via ElevenLabs). Sunbay scored 2 for planned/partial.</li>
            <li><strong>Credit/Risk Scoring:</strong> Built-in credit checks or AI-based payer risk ratings. Chaser and Gaviti offer this; others do not.</li>
            <li><strong>Feature Breadth:</strong> Count of distinct feature categories (payment portal, auto-calls, credit checks, dispute management, cash application, reconciliation, advanced reporting). Each worth ~1.4 points. Chaser leads with 9/10.</li>
            <li><strong>Market Maturity:</strong> Linear scale normalized to Chaser at 13 years = 10. Upflow 8yr = 6, Gaviti 8yr = 6, Tesorio 11yr = 8, Sunbay 1yr = 1.</li>
            <li>Sources: direct_competitor_landscape.md, competitor websites (<a href="https://www.chaserhq.com" target="_blank" rel="noopener noreferrer">chaserhq.com</a>, <a href="https://upflow.io" target="_blank" rel="noopener noreferrer">upflow.io</a>, <a href="https://www.gaviti.com" target="_blank" rel="noopener noreferrer">gaviti.com</a>, <a href="https://www.tesorio.com" target="_blank" rel="noopener noreferrer">tesorio.com</a>), Crunchbase. Accessed March 2026.</li>
          </ul>
          <p style={{ marginTop: '0.75rem', marginBottom: 0 }}><a href="#sources" style={{ color: 'var(--orange)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>View all sources</a></p>
        </div>
      </details>
    </section>
  )
}
