import SectionToggle from './SectionToggle'

export default function RoundReturns() {
  return (
    <section id="round">
      <h2>C6. The Round &amp; Returns</h2>
      <div className="opinion-card">
        <ul>
          <li>Fund is $70M, avg check ~$1-1.4M. The $1.2M round is within terms, but the product does not give a perception of ~58x growth potential needed to cover the fund.</li>
          <li>$1.2M for 20% is too much without proof-of-traction. Requires growth beyond a narrow market and likely a vision change.</li>
          <li>The angel round ($60K) from Brodziak and Bobrowski is what they need now — means to find PMF.</li>
          <li>Successful if they make foundations stronger (less replicable product) or find a market deep enough for 60x growth.</li>
        </ul>
      </div>
      <div className="section-toggles">
        <SectionToggle label="Fund Math">
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead><tr><th>Metric</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>S16VC Fund II</td><td>$70M</td></tr>
                <tr><td>Check Size</td><td>$1.2M (1.7% of fund)</td></tr>
                <tr><td>Ownership at Entry</td><td>20%</td></tr>
                <tr><td>Required Exit for 1x Fund</td><td style={{ color: 'var(--risk)' }}>$350M</td></tr>
                <tr><td>Required Exit for 3x Fund</td><td style={{ color: 'var(--risk)' }}>$1.05B</td></tr>
                <tr><td>Poland-only TAM</td><td>EUR49-63M</td></tr>
                <tr><td>10% Market Capture (PL)</td><td>EUR5-6M rev = ~$30-40M valuation</td></tr>
              </tbody>
            </table>
          </div>
        </SectionToggle>
        <SectionToggle label="Sources" variant="source">
          <ul>
            <li><a href="https://www.eu.vc/p/the-path-to-oversubscribed-the-learnings" target="_blank" rel="noopener noreferrer">eu.vc interview</a> (April 2025) — Fund II size confirmed $70M</li>
            <li><a href="https://pitchbook.com/profiles/fund/22388-32F" target="_blank" rel="noopener noreferrer">PitchBook Fund II</a> — fund structure</li>
            <li><a href="https://www.cbinsights.com/investor/s16vc" target="_blank" rel="noopener noreferrer">CB Insights</a> — S16VC investor profile</li>
            <li><a href="https://tracxn.com/d/venture-capital/s16vc/" target="_blank" rel="noopener noreferrer">Tracxn</a> (Jan 2026) — portfolio data</li>
            <li>s16vc_portfolio_deep_dive.md — check size analysis, ownership context</li>
            <li>s16vc_fund_profile.md — fund math, return requirements</li>
            <li>market_sizing_PL.md — Poland TAM ceiling ($30-40M valuation at 10% capture)</li>
          </ul>
        </SectionToggle>
      </div>
    </section>
  )
}
