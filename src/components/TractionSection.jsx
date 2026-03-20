import SectionToggle from './SectionToggle'

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
      <div className="section-toggles">
        <SectionToggle label="Benchmarking">
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
        </SectionToggle>
        <SectionToggle label="Sources" variant="source">
          <ul>
            <li>Sunbay Pitch Deck (April 2025) — MRR, client count, consulting revenue</li>
            <li>sunbay_website_snapshot.md (March 2026) — ~10 client logos. Caveats: not all may be paying; two are nonprofits (PAGA, Kuek).</li>
            <li><a href="https://www.flowjam.com/blog/seed-round-valuation-2025-complete-founders-guide" target="_blank" rel="noopener noreferrer">Flowjam seed guide 2025</a> — seed-stage ARR benchmarks</li>
            <li><a href="https://tomtunguz.com/mrr-growth/" target="_blank" rel="noopener noreferrer">Tom Tunguz</a> — MRR growth benchmarks</li>
            <li><a href="https://www.vitally.io/post/saas-churn-benchmarks" target="_blank" rel="noopener noreferrer">Recurly 2025 Churn Report</a>, <a href="https://www.re-cap.com/benchmarking-tool" target="_blank" rel="noopener noreferrer">re-cap benchmarking tool</a></li>
            <li>Upflow revenue ($4.1M) from <a href="https://getlatka.com/companies/upflow" target="_blank" rel="noopener noreferrer">Getlatka</a> — algorithm-generated. traction_benchmarking.md.</li>
          </ul>
        </SectionToggle>
      </div>
    </section>
  )
}
