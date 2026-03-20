import { useState } from 'react'

const systems = {
  Poland: [
    { name: 'Fakturownia', difficulty: 'Low', api: 'REST JSON/XML', integrated: true, note: 'Well-documented REST API, JSON and XML support. Straightforward auth.' },
    { name: 'Systim', difficulty: 'Low', api: 'JSON POST/GET', integrated: true, note: 'Simple JSON endpoints, basic auth. Minimal complexity.' },
    { name: 'wFirma', difficulty: 'Low-Mod', api: 'REST JSON', integrated: true, note: 'REST JSON API, moderate documentation. Some endpoint quirks.' },
    { name: 'Saldeo Smart', difficulty: 'Low-Mod', api: 'REST XML', integrated: true, note: 'XML-based REST API. Requires XML parsing but well-structured.' },
    { name: 'inFakt', difficulty: 'Low', api: 'REST JSON v3', integrated: true, note: 'Clean REST JSON v3 API, good documentation, sandbox available.' },
    { name: 'Subiekt123', difficulty: 'Moderate', api: 'REST via InsERT', integrated: true, note: 'REST API through InsERT nexo middleware. Additional abstraction layer.' },
  ],
  Germany: [
    { name: 'sevDesk', difficulty: 'Moderate', api: 'REST/JSON', integrated: false, note: 'REST/JSON API, decent docs. OAuth2 auth, moderate complexity.' },
    { name: 'Lexware', difficulty: 'Moderate', api: 'REST/JSON', integrated: false, note: 'REST/JSON API with OAuth2. German-language documentation primarily.' },
    { name: 'DATEV', difficulty: 'High', api: 'Batch CSV/XML', integrated: false, note: 'No public sandbox. Formal approval process required. Batch architecture — no real-time API. Dominant in German market (400K+ firms).' },
    { name: 'EasyBill', difficulty: 'Low-Mod', api: 'REST/JSON', integrated: false, note: 'Clean REST/JSON API. Good documentation, straightforward integration.' },
    { name: 'SumUp', difficulty: 'Low', api: 'REST', integrated: false, note: 'Simple REST API, well-documented. Primarily POS/payments.' },
  ],
  France: [
    { name: 'Pennylane', difficulty: 'Moderate', api: 'REST/JSON v2', integrated: false, note: 'REST/JSON v2 API. Growing fast in French market. Decent docs.' },
    { name: 'Sage Cloud', difficulty: 'Moderate', api: 'REST', integrated: false, note: 'REST API, complex auth flow. Large ecosystem but fragmented documentation.' },
    { name: 'Sage 100', difficulty: 'High', api: 'Custom', integrated: false, note: 'Legacy on-premise. Custom integration required. No modern REST API.' },
    { name: 'MyUnisoft', difficulty: 'Moderate', api: 'REST', integrated: false, note: 'REST API for French accountants. French-language docs primarily.' },
    { name: 'Tiime', difficulty: 'Low-Mod', api: 'REST', integrated: false, note: 'Modern REST API. Newer platform, decent developer experience.' },
  ],
}

const difficultyColor = {
  'Low': 'var(--green)',
  'Low-Mod': 'var(--yellow)',
  'Moderate': 'var(--orange)',
  'High': 'var(--risk)',
}

const difficultyBg = {
  'Low': 'rgba(46,204,113,0.12)',
  'Low-Mod': 'rgba(243,183,1,0.12)',
  'Moderate': 'rgba(246,103,49,0.12)',
  'High': 'rgba(232,76,61,0.12)',
}

const countries = ['Poland', 'Germany', 'France']

export default function IntegrationHeatmap() {
  const [active, setActive] = useState({ Poland: true, Germany: true, France: true })
  const [tooltip, setTooltip] = useState(null)

  const toggle = (country) => setActive((prev) => ({ ...prev, [country]: !prev[country] }))

  const visibleCountries = countries.filter((c) => active[c])

  return (
    <section id="integration-heatmap">
      <h2>Integration Landscape Heatmap</h2>
      <p>Accounting system API accessibility across Sunbay's current and expansion markets. Color indicates integration difficulty; checkmarks show Sunbay's current coverage.</p>

      <div className="comp-toggles">
        {countries.map((c) => (
          <button key={c} className={`comp-toggle${active[c] ? ' active' : ''}`} onClick={() => toggle(c)}>
            {c}
          </button>
        ))}
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="heatmap-table">
          <thead>
            <tr>
              <th>System</th>
              <th>API Type</th>
              <th>Difficulty</th>
              <th>Sunbay</th>
            </tr>
          </thead>
          <tbody>
            {visibleCountries.map((country) => (
              <>
                <tr key={`header-${country}`} className="heatmap-country-row">
                  <td colSpan={4}>
                    <strong>{country}</strong>
                    <span className="heatmap-count">
                      {systems[country].filter((s) => s.integrated).length}/{systems[country].length} integrated
                    </span>
                  </td>
                </tr>
                {systems[country].map((sys) => (
                  <tr
                    key={sys.name}
                    className="heatmap-row"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect()
                      setTooltip({ name: sys.name, note: sys.note, top: rect.bottom, left: rect.left })
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  >
                    <td style={{ fontWeight: 500, color: 'var(--text)' }}>{sys.name}</td>
                    <td><code className="api-tag">{sys.api}</code></td>
                    <td>
                      <span className="difficulty-badge" style={{ color: difficultyColor[sys.difficulty], background: difficultyBg[sys.difficulty] }}>
                        {sys.difficulty}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center', fontSize: '16px' }}>
                      {sys.integrated
                        ? <span style={{ color: 'var(--green)' }}>&#10003;</span>
                        : <span style={{ color: 'var(--risk)', opacity: 0.5 }}>&#10005;</span>
                      }
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>

      {tooltip && (
        <div className="heatmap-tooltip" style={{ top: tooltip.top + 4, left: tooltip.left }}>
          <strong>{tooltip.name}</strong>
          <span>{tooltip.note}</span>
        </div>
      )}

      <details className="footnotes">
        <summary>Methodology — Integration Difficulty Ratings</summary>
        <div className="detail-content">
          <ul>
            <li><strong>Difficulty ratings are editorial assessments</strong> based on: API architecture (REST vs batch/custom), documentation quality and language, authentication complexity, sandbox/test environment availability, and SDK maturity.</li>
            <li><strong>Low:</strong> REST/JSON API, good docs, sandbox available, simple auth. Integration in days.</li>
            <li><strong>Low-Moderate:</strong> REST API with quirks — XML payloads, partial docs, or non-standard auth. Integration in 1-2 weeks.</li>
            <li><strong>Moderate:</strong> REST API with OAuth2, complex data models, or limited docs. Integration in 2-4 weeks.</li>
            <li><strong>High:</strong> Batch/custom architecture, formal approval process, no sandbox, or legacy systems. Integration in months. DATEV (Germany) and Sage 100 (France) fall here.</li>
            <li><strong>All 6 Polish systems expose public REST APIs</strong> rated Low to Moderate difficulty. Any competitor with engineering resources could build the same connectors.</li>
            <li>Sources: competitor_addition.md, direct API documentation reviews, developer forums. All verified as of March 2026.</li>
          </ul>
          <p style={{ marginTop: '0.75rem', marginBottom: 0 }}><a href="#sources" style={{ color: 'var(--orange)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>View all sources</a></p>
        </div>
      </details>
    </section>
  )
}
