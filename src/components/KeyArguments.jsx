import SectionToggle from './SectionToggle'

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
      <div className="section-toggles">
        <SectionToggle label="Sources" variant="source">
          <ul>
            <li>competitor_addition.md — Sunbay integrates with Fakturownia, wFirma, inFakt, Systim, Saldeo Smart, Subiekt123. All have public REST APIs rated Low to Moderate difficulty.</li>
            <li><a href="https://single-market-economy.ec.europa.eu/smes/challenges-and-resilience/late-payment/eu-payment-observatory/observatory-analysis_en" target="_blank" rel="noopener noreferrer">EU Payment Observatory 2025</a> — Poland 72% affected (highest in EU). <a href="https://www.intrum.com/insights/publications/epr-2025/" target="_blank" rel="noopener noreferrer">Intrum EPR 2025</a> (n=9,150). <a href="https://group.atradius.com/knowledge-and-research/reports/b2b-payment-practices-trends-western-europe-2025" target="_blank" rel="noopener noreferrer">Atradius 2025</a> (n=210).</li>
            <li>product_analysis.md — confirmed shipped features, team size</li>
            <li><a href="https://bdl.stat.gov.pl/BDL/start" target="_blank" rel="noopener noreferrer">GUS 2024</a> enterprise counts (market_sizing_PL.md). <a href="https://ec.europa.eu/eurostat/databrowser/view/SBS_SC_OVW/" target="_blank" rel="noopener noreferrer">Eurostat SBS</a> (market_sizing_EU.md).</li>
          </ul>
        </SectionToggle>
      </div>

      <h3>Key Risks</h3>
      <div className="opinion-card risk" style={{ borderLeftColor: 'var(--risk)' }}>
        <ul>
          <li>Scaling outside the current use case will either put them in direct competition with well-established solutions (EU expansion) or at risk of legal liability for AI agents. GDPR compliance is unclear.</li>
          <li>The team has experience in their jobs, but they are covering responsibilities previously out of scope for them.</li>
          <li>The product can be replicated relatively easily, especially if the user has an existing CRM.</li>
          <li>The differentiating point (market-specific tools integration) is shallow — the tools have APIs, so the barrier to entry for competition is low.</li>
          <li>The unit economics and other metrics are unclear.</li>
        </ul>
        <h4>Downside Scenario</h4>
        <p>Chaser builds an MCP integration platform where users connect their existing accounting software, CRM and banking with zero friction, resulting in a more complete product for $200 instead of EUR120. This makes Sunbay's product obsolete.</p>
      </div>
      <div className="section-toggles">
        <SectionToggle label="Sources" variant="source">
          <ul>
            <li><a href="https://app.dealroom.co/companies/chaser_1" target="_blank" rel="noopener noreferrer">Chaser</a> ($4.79M, <a href="https://www.chaserhq.com/" target="_blank" rel="noopener noreferrer">10K+ users</a>), Upflow (<a href="https://www.cbinsights.com/company/upflow-1/financials" target="_blank" rel="noopener noreferrer">$22.9M</a>), Gaviti (<a href="https://www.finsmes.com/2022/04/gaviti-raises-9m-in-series-a-funding.html" target="_blank" rel="noopener noreferrer">$11.5M</a>), Tesorio ($35.5M) — funded competitors</li>
            <li><a href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" target="_blank" rel="noopener noreferrer">EU AI Act</a> (2024/1689), <a href="https://www.dudkowiak.com/contract-law-in-poland/" target="_blank" rel="noopener noreferrer">Polish verbal contracts</a>, Germany <a href="https://www.cloudtalk.io/blog/is-call-recording-legal/" target="_blank" rel="noopener noreferrer">two-party consent</a> (s201 StGB), <a href="https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries" target="_blank" rel="noopener noreferrer">Stanford HAI</a> (1/6+ hallucination rate)</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/philipsz" target="_blank" rel="noopener noreferrer">Filip</a> (zero GTM titles), <a href="https://www.linkedin.com/in/dawiddzierzynski" target="_blank" rel="noopener noreferrer">Dawid</a> (finance ops), <a href="https://www.linkedin.com/in/cabalanikodem" target="_blank" rel="noopener noreferrer">Nikodem</a> (no management exp) — team_analysis.md</li>
            <li>competitor_addition.md — all Polish APIs public REST, Low to Moderate difficulty</li>
            <li><a href="https://www.chaserhq.com/" target="_blank" rel="noopener noreferrer">Chaser</a> 15+ integrations, <a href="https://www.chaserhq.com/chaser-pricing" target="_blank" rel="noopener noreferrer">$200/mo</a> — direct_competitor_landscape.md</li>
            <li>traction_benchmarking.md — missing: MRR, MoM growth, churn, NRR, CAC, payback period, pipeline, ACV distribution</li>
          </ul>
        </SectionToggle>
      </div>
    </section>
  )
}
