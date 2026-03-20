export default function Recommendation() {
  return (
    <section id="recommendation">
      <h2>A. Top Recommendation</h2>
      <div className="verdict">PASS</div>
      <div className="opinion-card">
        <p>
          Even though they did find a relevant issue, especially for the Polish market (their main and so far only market), the product itself does not contain any technological know-how, nor do they seem to have any point that will tie clients to them. The product is relatively easily replicable; any tech-savvy user will manage to build the same thing just for their system using APIs in a weekend. Also, the system at this point is pretty much a complicated reminder feature, with good automations. So far, their main differentiator is focus on the Polish market and Poland-specific tooling, but moving down this road with the current direction, they won't be big enough to cover Fund's Risks.
        </p>
      </div>
      <details className="footnotes">
        <summary>Sources — Recommendation</summary>
        <div className="detail-content">
          <ul>
            <li><strong>No technical moat:</strong> All 6 Polish accounting systems Sunbay integrates with expose public REST APIs rated Low to Moderate integration difficulty. "The integration layer Sunbay has built is technically replicable by any competitor — there is no proprietary connector advantage." (competitor_addition.md)</li>
            <li><strong>Product scope:</strong> Core workflow is "connect accounting system -&gt; define collection rules and templates -&gt; system sends reminders on schedule -&gt; dashboard tracks status." Confirmed shipped features are limited to reminder sequences, workflows, tracking, interest notes, and dashboard. (product_analysis.md)</li>
            <li><strong>Polish-only advantage:</strong> No international player (<a href="https://www.chaserhq.com/" target="_blank" rel="noopener noreferrer">Chaser</a>, <a href="https://upflow.io" target="_blank" rel="noopener noreferrer">Upflow</a>, <a href="https://www.gaviti.com" target="_blank" rel="noopener noreferrer">Gaviti</a>, <a href="https://www.tesorio.com" target="_blank" rel="noopener noreferrer">Tesorio</a>) has any Polish integrations. (direct_competitor_landscape.md, Part C)</li>
            <li><strong>Fund math:</strong> $1.2M check on $70M fund (<a href="https://www.eu.vc/p/the-path-to-oversubscribed-the-learnings" target="_blank" rel="noopener noreferrer">eu.vc confirmed</a>) = ~1.7% of Fund II capital. At 20% ownership, required exit for 1x fund return = $350M (pre-dilution). (s16vc_portfolio_deep_dive.md)</li>
            <li><strong>Valuation context:</strong> $6M post-money on ~$18K ARR = ~333x revenue multiple. Comp: Upflow raised $2.76M seed at an estimated ~$742K revenue with 18 employees and <a href="https://www.ycombinator.com/companies/upflow" target="_blank" rel="noopener noreferrer">YC W20</a> backing. (traction_benchmarking.md)</li>
          </ul>
          <p style={{ marginTop: '0.75rem', marginBottom: 0 }}><a href="#sources" style={{ color: 'var(--orange)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>View all sources</a></p>
        </div>
      </details>
    </section>
  )
}
