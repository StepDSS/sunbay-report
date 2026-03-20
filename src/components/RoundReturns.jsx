export default function RoundReturns() {
  return (
    <section id="round">
      <h2>C6. The Round &amp; Returns</h2>
      <div className="opinion-card">
        <ul>
          <li>Fund is $70M, avg check ~$1-1.4M. The $1.2M round is within terms, but the product does not give a perception of 59x growth potential needed to cover the fund.</li>
          <li>$1.2M for 20% is too much without proof-of-traction. Requires growth beyond a narrow market and likely a vision change.</li>
          <li>The angel round ($60K) from Brodziak and Bobrowski is what they need now -- means to find PMF.</li>
          <li>Successful if they make foundations stronger (less replicable product) or find a market deep enough for 60x growth.</li>
        </ul>
      </div>
      <h4>Fund Math</h4>
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
      <details className="footnotes">
        <summary>Methodology -- Fund Return Math</summary>
        <div className="detail-content">
          <ul>
            <li><strong>Ownership:</strong> $1.2M / $6M post-money = 20% at entry. With 50% dilution: 20% x 0.5 = 10% at exit.</li>
            <li><strong>1x fund return:</strong> $70M / 10% = $700M required exit. Without dilution: $70M / 20% = $350M. The table shows no-dilution; the calculator models dilution.</li>
            <li><strong>Market ceiling:</strong> Poland TAM EUR49-63M. At 10% capture, revenue = EUR5-6M. At 5-7x multiple, valuation = ~$30-40M. ~10x below $350M needed for 1x.</li>
            <li><strong>Check size context:</strong> S16VC Fund II ($70M) estimated initial checks at $1-3M. At 20% ownership, S16VC would be lead or sole institutional investor.</li>
            <li><strong>Fund data:</strong> <a href="https://www.eu.vc/p/the-path-to-oversubscribed-the-learnings" target="_blank" rel="noopener noreferrer">eu.vc interview</a> (April 2025), <a href="https://pitchbook.com/profiles/fund/22388-32F" target="_blank" rel="noopener noreferrer">PitchBook Fund II</a>, <a href="https://www.cbinsights.com/investor/s16vc" target="_blank" rel="noopener noreferrer">CB Insights</a>, <a href="https://tracxn.com/d/venture-capital/s16vc/" target="_blank" rel="noopener noreferrer">Tracxn</a> (Jan 2026).</li>
            <li><strong>Data limitation:</strong> Individual check sizes are not publicly disclosed. Estimates are triangulated from round sizes, co-investor counts, and fund structure.</li>
            <li>Source: s16vc_portfolio_deep_dive.md</li>
          </ul>
        </div>
      </details>
    </section>
  )
}
