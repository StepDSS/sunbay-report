import SectionToggle from './SectionToggle'

export default function ProductSection() {
  return (
    <section id="product">
      <h2>C2. Product</h2>
      <div className="opinion-card">
        <ul>
          <li>The product automates a very narrow part of the user flow: invoice payment reminders. No complete payment flow (issuance, collection, analytics). Integrated with ICP's tools in core market.</li>
          <li>Pitch video claims "better accuracy" for payment monitoring. No data supports this.</li>
          <li>Two scaling paths in the deck: geographic expansion (risk of losing local edge, competing with larger players) and AI features (legal/regulatory risk: EU AI Act, GDPR, binding verbal contracts in Poland, two-party consent in Germany).</li>
        </ul>
      </div>
      <div className="section-toggles">
        <SectionToggle label="Shipped Features">
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead><tr><th>Feature</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>Automated email/SMS reminders</td><td>Shipped</td></tr>
                <tr><td>Configurable collection workflows</td><td>Shipped</td></tr>
                <tr><td>Open/read tracking</td><td>Shipped</td></tr>
                <tr><td>Interest notes &amp; late-payment docs</td><td>Shipped</td></tr>
                <tr><td>Dashboard</td><td>Shipped</td></tr>
                <tr><td>8 accounting integrations (6 PL + Xero + QB)</td><td>Shipped</td></tr>
                <tr><td>AI voice agent (ElevenLabs)</td><td style={{ color: 'var(--risk)' }}>Launching Soon</td></tr>
                <tr><td>AI legal document generation</td><td style={{ color: 'var(--risk)' }}>Under Development</td></tr>
                <tr><td>CRM integrations (HubSpot, Pipedrive)</td><td style={{ color: 'var(--text-dim)' }}>Video only</td></tr>
                <tr><td>Bank integrations (Revolut, mBank)</td><td style={{ color: 'var(--text-dim)' }}>Video only</td></tr>
              </tbody>
            </table>
          </div>
        </SectionToggle>
        <SectionToggle label="Pricing">
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead><tr><th>Plan</th><th>Price</th><th>Scope</th></tr></thead>
              <tbody>
                <tr><td>Basic</td><td>EUR100/mo</td><td>1 flow, 1 system, single language, unlimited users</td></tr>
                <tr><td>Standard</td><td>EUR120/mo</td><td>Multiple flows/systems/languages</td></tr>
                <tr><td>Custom</td><td>Contact</td><td>3000+ invoices, premium support</td></tr>
                <tr><td>SMS add-on</td><td>+EUR20/mo</td><td>100 SMS credits</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-dim)' }}>At ACV ~EUR1,300/yr, reaching EUR1M ARR requires ~770 paying customers.</p>
          </div>
        </SectionToggle>
        <SectionToggle label="Sources" variant="source">
          <ul>
            <li>product_analysis.md — confirmed shipped features, "What's Shipped vs. What's Claimed"</li>
            <li>sunbay_website_snapshot.md — pricing, feature list</li>
            <li><a href="https://elevenlabs.io/blog/how-do-you-optimize-latency-for-conversational-ai" target="_blank" rel="noopener noreferrer">ElevenLabs</a> (conversational AI), <a href="https://hamming.ai/resources/voice-ai-latency-whats-fast-whats-slow-how-to-fix-it" target="_blank" rel="noopener noreferrer">Hamming AI</a> (4M+ calls analyzed)</li>
            <li><a href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" target="_blank" rel="noopener noreferrer">EU AI Act</a> (Regulation 2024/1689), <a href="https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence" target="_blank" rel="noopener noreferrer">European Parliament summary</a></li>
            <li><a href="https://www.dudkowiak.com/contract-law-in-poland/" target="_blank" rel="noopener noreferrer">Polish verbal contracts legally binding</a>. Germany <a href="https://www.cloudtalk.io/blog/is-call-recording-legal/" target="_blank" rel="noopener noreferrer">two-party consent</a> (s201 StGB).</li>
            <li><a href="https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries" target="_blank" rel="noopener noreferrer">Stanford HAI</a> — legal AI hallucinate in 1/6+ queries</li>
            <li>Three sources (website, deck, pitch video) describe materially different products — product_analysis.md</li>
            <li>traction_benchmarking.md — ACV and customer count math</li>
          </ul>
        </SectionToggle>
      </div>
    </section>
  )
}
