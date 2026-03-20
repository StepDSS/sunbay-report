import { useState } from 'react'

function fmtEur(n) {
  if (n >= 1e6) return 'EUR ' + (n / 1e6).toFixed(1) + 'M'
  if (n >= 1e3) return 'EUR ' + (n / 1e3).toFixed(1) + 'K'
  return 'EUR ' + Math.round(n)
}

export default function DebtRecoveryCalc() {
  const [receivables, setReceivables] = useState(50000)
  const [overdueRate, setOverdueRate] = useState(10)
  const [commission, setCommission] = useState(10)

  const monthlyOverdue = receivables * (overdueRate / 100)
  const annualAgencyCost = monthlyOverdue * (commission / 100) * 12
  const annualSunbay = 1320
  const savings = annualAgencyCost - annualSunbay
  const breakeven = annualSunbay / ((overdueRate / 100) * (commission / 100) * 12)
  const roi = savings > 0 ? savings / annualSunbay : 0

  return (
    <section id="debt-recovery-calc">
      <h2>Debt Recovery Cost Comparison</h2>
      <p>Compare the annual cost of outsourcing overdue collections to a recovery agency vs. using Sunbay's flat-fee AR automation.</p>

      <div className="calc-container">
        <div className="calc-grid">
          <div className="calc-input">
            <label>Monthly B2B Receivables</label>
            <span className="val">{fmtEur(receivables)}</span>
            <input type="range" min="10000" max="500000" step="5000" value={receivables} onChange={(e) => setReceivables(+e.target.value)} />
          </div>
          <div className="calc-input">
            <label>% Going Overdue</label>
            <span className="val">{overdueRate}%</span>
            <input type="range" min="5" max="40" step="1" value={overdueRate} onChange={(e) => setOverdueRate(+e.target.value)} />
          </div>
          <div className="calc-input" style={{ gridColumn: '1 / -1' }}>
            <label>Agency Commission Rate</label>
            <span className="val">{commission}%</span>
            <input type="range" min="5" max="20" step="1" value={commission} onChange={(e) => setCommission(+e.target.value)} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>
              <span>5% (low)</span><span>10% (standard)</span><span>20% (complex)</span>
            </div>
          </div>
        </div>

        <div className="vs-row">
          <div className="vs-card agency">
            <div className="vs-label">Recovery Agency</div>
            <div className="vs-amount">{fmtEur(annualAgencyCost)}<span>/yr</span></div>
            <div className="vs-detail">{fmtEur(monthlyOverdue)} overdue/mo x {commission}% commission</div>
          </div>
          <div className="vs-divider">VS</div>
          <div className="vs-card sunbay">
            <div className="vs-label">Sunbay.io</div>
            <div className="vs-amount">EUR 1,320<span>/yr</span></div>
            <div className="vs-detail">EUR 110/mo flat fee (midpoint Basic/Standard)</div>
          </div>
        </div>

        <div className="calc-outputs">
          <div className="calc-out">
            <div className="label">Monthly Overdue Amount</div>
            <div className="value">{fmtEur(monthlyOverdue)}</div>
          </div>
          <div className="calc-out">
            <div className="label">Annual Savings</div>
            <div className="value" style={{ color: savings > 0 ? 'var(--green)' : 'var(--risk)' }}>
              {savings > 0 ? '+' : ''}{fmtEur(savings)}
            </div>
          </div>
          <div className="calc-out">
            <div className="label">ROI Multiple</div>
            <div className="value" style={{ color: roi > 1 ? 'var(--green)' : 'var(--yellow)' }}>
              {roi > 0 ? roi.toFixed(1) + 'x' : 'N/A'}
            </div>
          </div>
          <div className="calc-out">
            <div className="label">Breakeven Receivables</div>
            <div className="value">{fmtEur(breakeven)}<span style={{ fontSize: '10px', opacity: 0.6 }}>/mo</span></div>
          </div>
        </div>
      </div>

      <details className="footnotes">
        <summary>Methodology — Cost Comparison Assumptions</summary>
        <div className="detail-content">
          <ul>
            <li><strong>Agency commission range (5-20%):</strong> Standard B2B amicable collection fees in Poland: 7-10% (Kancelaria Rubikon); broader range 5-18% (LT LAW Kancelaria, Aug 2022). 10% is used as default.</li>
            <li><strong>Poland debt recovery market:</strong> PLN 3.7B total industry revenue, 89 firms, 6,801 employees (GUS "Dzialalnosc windykacyjna" 2024). Estimated B2B slice: PLN 700M-1B/year, ~0.9M claims/year.</li>
            <li><strong>Sunbay cost:</strong> EUR 1,320/year — midpoint of Basic (EUR 100/mo) and Standard (EUR 120/mo) published pricing. SMS add-on costs excluded.</li>
            <li style={{ color: 'var(--risk)' }}><strong>Caveat:</strong> This is not a direct substitution model. Agencies handle post-default collections (30-90+ days overdue), while Sunbay automates pre-default reminders (before the invoice becomes severely delinquent). Sunbay reduces the volume flowing to agencies rather than replacing them entirely. A company using Sunbay may still need agency services for the remaining hard-default cases.</li>
            <li><strong>Breakeven formula:</strong> EUR 1,320 / (overdue% x commission% x 12). This is the monthly receivable volume at which agency cost equals Sunbay's flat fee.</li>
          </ul>
          <p style={{ marginTop: '0.75rem', marginBottom: 0 }}><a href="#sources" style={{ color: 'var(--orange)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>View all sources</a></p>
        </div>
      </details>
    </section>
  )
}
