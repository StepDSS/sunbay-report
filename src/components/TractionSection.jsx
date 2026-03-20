export default function TractionSection() {
  return (
    <section id="traction">
      <h2>C5. Traction &amp; Benchmarking</h2>
      <div className="opinion-card">
        <ul>
          <li>April 2025 deck: $1.2-1.5K MRR + $3K consulting. Now ~10 paying customers = ~$2.4-3K MRR. Not enough to justify $6M post-money. No data on CAC or lifetime. All clients from founder network.</li>
          <li>Typical seed ARR: $150-500K. Sunbay: ~$30K. Upflow had ~$742K revenue and 18 employees at their $2.76M seed in 2019.</li>
          <li>Chaser: 12 years, $5-6M funding, 33 employees, revenue estimated under $5M.</li>
        </ul>
      </div>
      <h4>Traction Benchmarking</h4>
      <div style={{ overflowX: 'auto' }}>
      <table>
        <thead><tr><th>Metric</th><th>Sunbay (est.)</th><th>Seed Benchmarks</th></tr></thead>
        <tbody>
          <tr><td>MRR</td><td>~$2.4-3K</td><td>$20-50K+</td></tr>
          <tr><td>ARR</td><td>~$29-36K</td><td>$150-500K</td></tr>
          <tr><td>Paying Customers</td><td>~10</td><td>10-50+</td></tr>
          <tr><td>ACV</td><td>~EUR1,300/yr</td><td>$5-25K+</td></tr>
          <tr><td>Valuation Multiple</td><td style={{ color: 'var(--risk)' }}>~333x rev</td><td>20-50x</td></tr>
        </tbody>
      </table>
      </div>
      <details className="footnotes">
        <summary>Methodology — Traction Estimates</summary>
        <div className="detail-content">
          <ul>
            <li><strong>MRR estimation:</strong> Pitch deck (April 2025) states $1.2-1.5K MRR from 5-6 paying clients. Website (March 2026) shows ~10 client logos. Assuming ~2x clients at stable ACV (EUR100-120/mo) = ~$2.4-3K MRR, ~$29-36K ARR.</li>
            <li><strong>Caveats on client count:</strong> Not all logos may be paying customers. Two are nonprofits (PAGA, Kuek). Some could be pilots, free trials, or consulting-only relationships.</li>
            <li><strong>Valuation multiple:</strong> $6M post-money / ~$18K ARR (April 2025 figure, annualized) = ~333x revenue. Not unusual for pre-seed/angel but entirely forward-looking.</li>
            <li><strong>Benchmark sources:</strong> <a href="https://www.flowjam.com/blog/seed-round-valuation-2025-complete-founders-guide" target="_blank" rel="noopener noreferrer">Flowjam seed guide 2025</a>, <a href="https://tomtunguz.com/mrr-growth/" target="_blank" rel="noopener noreferrer">Tom Tunguz</a>, <a href="https://www.vitally.io/post/saas-churn-benchmarks" target="_blank" rel="noopener noreferrer">Recurly 2025 Churn Report</a>, <a href="https://www.re-cap.com/benchmarking-tool" target="_blank" rel="noopener noreferrer">re-cap benchmarking tool</a>.</li>
            <li><strong>Comp revenue estimates:</strong> Upflow revenue ($4.1M) from <a href="https://getlatka.com/companies/upflow" target="_blank" rel="noopener noreferrer">Getlatka</a> — algorithm-generated. Chaser revenue not disclosed.</li>
            <li>Source: traction_benchmarking.md, Sunbay Pitch Deck</li>
          </ul>
          <p style={{ marginTop: '0.75rem', marginBottom: 0 }}><a href="#sources" style={{ color: 'var(--orange)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>View all sources</a></p>
        </div>
      </details>
    </section>
  )
}
