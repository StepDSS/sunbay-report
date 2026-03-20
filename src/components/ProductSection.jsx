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
      <h4>Confirmed Shipped Features</h4>
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
      <h4>Pricing</h4>
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
      </div>
      <details className="footnotes">
        <summary>Sources — Product</summary>
        <div className="detail-content">
          <ul>
            <li>Confirmed features sourced from sunbay.io website (accessed March 2026) and pitch deck. Three sources (website, deck, pitch video) describe materially different products.</li>
            <li>Pitch video shows CRM integrations (HubSpot, Pipedrive, Docusign), bank integrations (HSBC, Revolut, Alior, mBank), payment matching, and invoicing module — none appear on the website.</li>
            <li>AI voice agent planned via <a href="https://elevenlabs.io/blog/how-do-you-optimize-latency-for-conversational-ai" target="_blank" rel="noopener noreferrer">ElevenLabs</a> (conversational AI). Latency analysis from <a href="https://hamming.ai/resources/voice-ai-latency-whats-fast-whats-slow-how-to-fix-it" target="_blank" rel="noopener noreferrer">Hamming AI</a> (4M+ calls analyzed).</li>
            <li>EU AI Act: <a href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" target="_blank" rel="noopener noreferrer">Regulation (EU) 2024/1689</a>, Annex III lists AI systems in legal/employment contexts as high-risk. <a href="https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence" target="_blank" rel="noopener noreferrer">European Parliament summary</a>.</li>
            <li>Polish verbal contracts: <a href="https://www.dudkowiak.com/contract-law-in-poland/" target="_blank" rel="noopener noreferrer">Dudkowiak &amp; Putyra</a> confirms verbal contracts are legally binding under Polish civil law. Germany two-party consent: <a href="https://www.cloudtalk.io/blog/is-call-recording-legal/" target="_blank" rel="noopener noreferrer">CloudTalk analysis</a> citing s201 StGB.</li>
            <li>AI hallucination in legal contexts: <a href="https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries" target="_blank" rel="noopener noreferrer">Stanford HAI study</a> — legal AI hallucinate in 1/6+ benchmarking queries (2024).</li>
            <li>Pricing from sunbay.io pricing page, accessed March 2026. At ACV ~EUR1,300/yr, reaching EUR1M ARR requires ~770 paying customers.</li>
            <li>Source: product_analysis.md, sunbay_website_snapshot.md</li>
          </ul>
          <p style={{ marginTop: '0.75rem', marginBottom: 0 }}><a href="#sources" style={{ color: 'var(--orange)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>View all sources</a></p>
        </div>
      </details>
    </section>
  )
}
