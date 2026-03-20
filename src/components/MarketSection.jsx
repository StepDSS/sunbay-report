import { useState } from 'react'

const tamData = {
  conservative: [
    ['Poland', 'EUR48.7M', '36,858', 'EUR1,320'],
    ['Germany', 'EUR303.2M', '229,732', 'EUR1,320'],
    ['France', 'EUR127.5M', '96,578', 'EUR1,320'],
    ['EU-27', 'EUR1.23B', '~932K', 'EUR1,320']
  ],
  extended: [
    ['Poland', 'EUR62.9M', '47,685', 'EUR1,320'],
    ['Germany', 'EUR376.4M', '285,175', 'EUR1,320'],
    ['France', 'EUR158.3M', '119,959', 'EUR1,320'],
    ['EU-27', 'EUR1.48B', '~1.12M', 'EUR1,320']
  ]
}

export default function MarketSection() {
  const [tamType, setTamType] = useState('conservative')
  const rows = tamData[tamType]

  return (
    <section id="market">
      <h2>C3. Market</h2>
      <div className="opinion-card">
        <ul>
          <li>Poland: late payment is huge (72% affected, 60+ day avg, 38% overdue). TAM = EUR50M, ~37K companies. KSeF mandatory digital invoicing from April 2026.</li>
          <li>EU: EUR1.3B TAM, 1.82M companies. 52% report late payment problems. 47.7% of SMEs use no ERP/CRM/BI at all.</li>
          <li>Germany + France combined: ~EUR430M TAM, ~326K companies.</li>
        </ul>
      </div>
      <h4>TAM Summary</h4>
      <div>
        <div className="tam-toggle">
          <button className={`tam-btn${tamType === 'conservative' ? ' active' : ''}`} onClick={() => setTamType('conservative')}>Conservative</button>
          <button className={`tam-btn${tamType === 'extended' ? ' active' : ''}`} onClick={() => setTamType('extended')}>Extended</button>
        </div>
        <table>
          <thead><tr><th>Geography</th><th>TAM</th><th>Enterprise Count</th><th>ARPC</th></tr></thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: '12px', color: 'var(--text-dim)' }}>Assumptions: ARPC = EUR1,320/yr; 10-249 employee firms; B2B sectors only; no adoption rate applied.</p>
      </div>
      <details className="footnotes">
        <summary>Methodology -- TAM Calculation</summary>
        <div className="detail-content">
          <ul>
            <li><strong>Enterprise scope:</strong> 10-249 employees (NACE non-financial economy). Micro (0-9) excluded: too small for dedicated AR tooling. Large (250+) excluded: served by enterprise solutions (Tesorio, HighRadius).</li>
            <li><strong>ARPC calculation:</strong> Midpoint of Sunbay Basic (EUR1,200/yr) and Standard (EUR1,440/yr) = EUR1,320/yr. Custom tier excluded. Blended ARPC depends on customer mix.</li>
            <li><strong>Conservative sectors:</strong> B+C+D+E (Industry), F (Construction), H (Transport), M (Professional/scientific/tech), N (Admin &amp; support).</li>
            <li><strong>Extended additions:</strong> G46 Wholesale (100% B2B), G45 Motor vehicles (50% B2B), J Info &amp; communication (75% B2B), L Real estate (50% B2B). G47 Retail excluded (B2C).</li>
            <li><strong>Data quality:</strong> [A] = official government statistics (GUS 2024, Destatis, Eurostat). [B] = survey data. [C] = market reports. [D] = own estimates.</li>
            <li><strong>Key caveat:</strong> No adoption rate applied. The 10-249 segment is shrinking (-0.6% YoY).</li>
            <li><strong>Sources:</strong> <a href="https://bdl.stat.gov.pl/BDL/start" target="_blank" rel="noopener noreferrer">GUS Bank Danych Lokalnych</a>, <a href="https://ec.europa.eu/eurostat/databrowser/view/SBS_SC_OVW/" target="_blank" rel="noopener noreferrer">Eurostat SBS</a>, <a href="https://sunbay.io/pricing" target="_blank" rel="noopener noreferrer">Sunbay.io pricing page</a>.</li>
          </ul>
        </div>
      </details>

      <h4>Late Payment Severity (Poland)</h4>
      <table>
        <thead><tr><th>Metric</th><th>Value</th><th>Source</th></tr></thead>
        <tbody>
          <tr><td>Companies affected by late payments</td><td style={{ color: 'var(--risk)' }}>72% (highest in EU)</td><td><a href="https://single-market-economy.ec.europa.eu/smes/challenges-and-resilience/late-payment/eu-payment-observatory/observatory-analysis_en" target="_blank" rel="noopener noreferrer">EU Payment Observatory 2025</a></td></tr>
          <tr><td>Avg B2B payment period</td><td>60+ days</td><td><a href="https://www.intrum.com/insights/publications/epr-2025/" target="_blank" rel="noopener noreferrer">Intrum EPR 2025</a></td></tr>
          <tr><td>B2B invoices overdue</td><td>38%</td><td><a href="https://group.atradius.com/knowledge-and-research/reports/b2b-payment-practices-trends-western-europe-2025" target="_blank" rel="noopener noreferrer">Atradius 2025</a> (n=210)</td></tr>
          <tr><td>Total overdue business debt</td><td>&gt;45 bn PLN</td><td><a href="https://big.pl/raporty" target="_blank" rel="noopener noreferrer">BIG InfoMonitor</a> end 2025</td></tr>
          <tr><td>Firms planning mitigation in 2026</td><td>76%</td><td><a href="https://big.pl/raporty" target="_blank" rel="noopener noreferrer">BIG InfoMonitor</a> (n=500)</td></tr>
        </tbody>
      </table>

      <h4>Integration Landscape</h4>
      <table>
        <thead><tr><th>System</th><th>API Type</th><th>Difficulty</th><th>Sunbay?</th></tr></thead>
        <tbody>
          <tr><td>Fakturownia</td><td>REST JSON/XML</td><td>Low</td><td>Yes</td></tr>
          <tr><td>Systim</td><td>JSON POST/GET</td><td>Low</td><td>Yes</td></tr>
          <tr><td>wFirma</td><td>REST JSON</td><td>Low-Mod</td><td>Yes</td></tr>
          <tr><td>Saldeo Smart</td><td>REST XML</td><td>Low-Mod</td><td>Yes</td></tr>
          <tr><td>inFakt</td><td>REST JSON v3</td><td>Low</td><td>Yes</td></tr>
          <tr><td>Subiekt123</td><td>REST via InsERT</td><td>Moderate</td><td>Yes</td></tr>
          <tr><td>DATEV (DE)</td><td>Batch CSV/XML</td><td style={{ color: 'var(--risk)' }}>High</td><td>No</td></tr>
          <tr><td>sevDesk (DE)</td><td>REST/JSON</td><td>Moderate</td><td>No</td></tr>
          <tr><td>Lexware (DE)</td><td>REST/JSON</td><td>Moderate</td><td>No</td></tr>
          <tr><td>Pennylane (FR)</td><td>REST/JSON v2</td><td>Moderate</td><td>No</td></tr>
          <tr><td>Sage 100 (FR)</td><td>Custom</td><td style={{ color: 'var(--risk)' }}>High</td><td>No</td></tr>
        </tbody>
      </table>
    </section>
  )
}
