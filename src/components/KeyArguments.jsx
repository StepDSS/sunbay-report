export default function KeyArguments() {
  return (
    <section id="arguments">
      <h2>B. Key Arguments &amp; Risks</h2>
      <h3>Why You Should Invest</h3>
      <div className="opinion-card">
        <ul>
          <li>The product is specific to the market, tailored to the existing ecosystem, where almost no competitor has done the same implementation of Poland-specific tools.</li>
          <li>The problem they focus on is highly relevant in their core market and in other EU countries.</li>
          <li>The product is focused on a certain, narrow problem and does not try to solve everything at once.</li>
        </ul>
        <h4>Upside Scenario</h4>
        <p>They "automate automation" and find a way to connect and maintain the market-specific tools with almost no cost of maintenance. That will let them address tools that are not integrated into their competitors, creating a gap they can fill. And move from the Polish market to the EU with a small to no upcost. (Moving from 50-60M TAM to 1.3-1.4B TAM, giving them the potential to become a unicorn.)</p>
      </div>
      <details className="footnotes">
        <summary>Sources -- Why Invest</summary>
        <div className="detail-content">
          <ul>
            <li><strong>Polish integrations:</strong> Sunbay integrates with Fakturownia, wFirma, inFakt, Systim, Saldeo Smart, Subiekt123. <a href="https://www.chaserhq.com/" target="_blank" rel="noopener noreferrer">Chaser</a>, <a href="https://upflow.io" target="_blank" rel="noopener noreferrer">Upflow</a>, Gaviti, Tesorio show zero Polish integrations. All 6 Polish tools have public REST APIs rated Low to Moderate difficulty. (competitor_addition.md)</li>
            <li><strong>Late payment data:</strong> Poland 72% affected (<a href="https://single-market-economy.ec.europa.eu/smes/challenges-and-resilience/late-payment/eu-payment-observatory/observatory-analysis_en" target="_blank" rel="noopener noreferrer">EU Payment Observatory 2025</a>, highest in EU). Avg B2B payment period 60+ days (<a href="https://www.intrum.com/insights/publications/epr-2025/" target="_blank" rel="noopener noreferrer">Intrum EPR 2025</a>, n=9,150). 38% of B2B invoices overdue (<a href="https://group.atradius.com/knowledge-and-research/reports/b2b-payment-practices-trends-western-europe-2025" target="_blank" rel="noopener noreferrer">Atradius 2025</a>, n=210). EU-wide: 52% report late payment problems (2024), up from 42% in 2021.</li>
            <li><strong>Focused product:</strong> Confirmed shipped = reminder sequences, workflows, tracking, interest notes, dashboard. Team of 3 + 1 student, $60K raised. Appropriate scope for stage. (product_analysis.md)</li>
            <li><strong>TAM upside:</strong> Poland TAM = EUR48.7-62.9M (<a href="https://bdl.stat.gov.pl/BDL/start" target="_blank" rel="noopener noreferrer">GUS 2024</a> enterprise counts). EU-27 TAM = EUR1.23-1.48B (<a href="https://ec.europa.eu/eurostat/databrowser/view/SBS_SC_OVW/" target="_blank" rel="noopener noreferrer">Eurostat SBS</a>). (market_sizing_PL.md, market_sizing_EU.md)</li>
          </ul>
        </div>
      </details>

      <h3>Key Risks</h3>
      <div className="opinion-card risk" style={{ borderLeftColor: 'var(--risk)' }}>
        <ul>
          <li>Scaling outside the current use case will either put them in direct competition with well-established solutions (EU expansion) or at risk of legal liability for AI agents. GDPR compliance is unclear.</li>
          <li>The team has experience in their jobs, but they are covering responsibilities previously out of scope for them.</li>
          <li>The product can be replicated relatively easily, especially if the user has an existing CRM.</li>
          <li>The differentiating point (market-specific tools integration) is shallow -- the tools have APIs, so the barrier to entry for competition is low.</li>
          <li>The unit economics and other metrics are unclear.</li>
        </ul>
        <h4>Downside Scenario</h4>
        <p>Chaser builds an MCP integration platform where users connect their existing accounting software, CRM and banking with zero friction, resulting in a more complete product for $200 instead of EUR120. This makes Sunbay's product obsolete.</p>
      </div>
      <details className="footnotes">
        <summary>Sources -- Risks</summary>
        <div className="detail-content">
          <ul>
            <li><strong>Funded competitors:</strong> <a href="https://app.dealroom.co/companies/chaser_1" target="_blank" rel="noopener noreferrer">Chaser</a> ($4.79M raised, <a href="https://www.chaserhq.com/" target="_blank" rel="noopener noreferrer">10K+ users</a>), Upflow (<a href="https://www.cbinsights.com/company/upflow-1/financials" target="_blank" rel="noopener noreferrer">$22.9M</a>), Gaviti (<a href="https://www.finsmes.com/2022/04/gaviti-raises-9m-in-series-a-funding.html" target="_blank" rel="noopener noreferrer">$11.5M</a>), Tesorio ($35.5M). Multi-year head starts.</li>
            <li><strong>AI regulatory risk:</strong> <a href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" target="_blank" rel="noopener noreferrer">EU AI Act</a> (2024/1689) high-risk classification for legal-adjacent AI. <a href="https://www.dudkowiak.com/contract-law-in-poland/" target="_blank" rel="noopener noreferrer">Polish verbal contracts are legally binding</a>. Germany requires <a href="https://www.cloudtalk.io/blog/is-call-recording-legal/" target="_blank" rel="noopener noreferrer">two-party consent</a> (s201 StGB). <a href="https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries" target="_blank" rel="noopener noreferrer">Stanford HAI</a>: legal AI hallucinate in 1/6+ queries.</li>
            <li><strong>Team gaps:</strong> CEO (<a href="https://www.linkedin.com/in/philipsz" target="_blank" rel="noopener noreferrer">Filip</a>): zero GTM titles in 9 years. COO/CRO (<a href="https://www.linkedin.com/in/dawiddzierzynski" target="_blank" rel="noopener noreferrer">Dawid</a>): finance ops background, not revenue. CTO (<a href="https://www.linkedin.com/in/cabalanikodem" target="_blank" rel="noopener noreferrer">Nikodem</a>): no management experience. All first-time founders.</li>
            <li><strong>Replicability:</strong> All Polish accounting systems have public REST APIs rated Low to Moderate difficulty. "The barrier is knowing which Polish systems to integrate with and doing the work. This is an execution advantage, not a technical moat." (competitor_addition.md)</li>
            <li><strong>Missing metrics:</strong> Current MRR, MoM growth, churn, NRR, CAC, payback period, pipeline, ACV distribution -- none provided. (traction_benchmarking.md)</li>
            <li><strong>Downside comp:</strong> <a href="https://www.chaserhq.com/chaser-pricing" target="_blank" rel="noopener noreferrer">Chaser</a> already has 15+ integrations, payment portal, auto-calls, credit checks, AI payer ratings at <a href="https://www.chaserhq.com/chaser-pricing" target="_blank" rel="noopener noreferrer">$200/mo</a>. (direct_competitor_landscape.md)</li>
          </ul>
          <p style={{ marginTop: '0.75rem', marginBottom: 0 }}><a href="#sources" style={{ color: 'var(--orange)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>View all sources</a></p>
        </div>
      </details>
    </section>
  )
}
