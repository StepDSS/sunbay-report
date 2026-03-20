export default function TeamSection() {
  return (
    <section id="team">
      <h2>C1. Team</h2>
      <div className="opinion-card">
        <ul>
          <li>The CEO lacks strategic experience; the CRO (ex-COO) has a background in financial operations, not sales/revenue. CTO has no management experience. Otherwise, responsibilities barely overlap -- potential for a highly effective team.</li>
          <li>All three founders are now full-time. Major green flag.</li>
          <li>All founders either worked or studied together -- they know how to work as a team.</li>
          <li>Poland's network is strong. All 10 clients are Polish. Angel investors: Szymon Brodziak (S16VC Head of Investment Analytics, personal) and Sebastian Bobrowski (inFakt co-founder).</li>
        </ul>
      </div>
      <h4>Team Overview</h4>
      <table>
        <thead><tr><th>Name</th><th>Role</th><th>Background</th><th>Gap</th></tr></thead>
        <tbody>
          <tr><td>Filip Szczecinski</td><td>CEO</td><td>~9 yrs ops (HCM Deck, CallPage, Plane YC W17)</td><td>Zero sales/GTM titles</td></tr>
          <tr><td>Dawid Dzierzynski</td><td>COO/CRO</td><td>Finance Dir at Droppe, Biz Ops at HCM Deck</td><td>Title discrepancy. Finance ops, not revenue.</td></tr>
          <tr><td>Nikodem Cabala</td><td>CTO</td><td>~5 yrs .NET (mBank/BLIK, Metro Bank)</td><td>No CTO/lead exp. Solo engineer.</td></tr>
          <tr><td>Kamil Jalowiec</td><td>GTM Engineer</td><td>University student, ~1yr marketing internships</td><td>Junior. Entire sales/marketing function.</td></tr>
        </tbody>
      </table>
      <details className="footnotes">
        <summary>Sources &amp; Footnotes -- Team</summary>
        <div className="detail-content">
          <ul>
            <li>LinkedIn profiles: <a href="https://www.linkedin.com/in/philipsz" target="_blank" rel="noopener noreferrer">Filip Szczecinski</a>, <a href="https://www.linkedin.com/in/dawiddzierzynski" target="_blank" rel="noopener noreferrer">Dawid Dzierzynski</a>, <a href="https://www.linkedin.com/in/cabalanikodem" target="_blank" rel="noopener noreferrer">Nikodem Cabala</a>, <a href="https://www.linkedin.com/in/kamil-jalowiec" target="_blank" rel="noopener noreferrer">Kamil Jalowiec</a>. Accessed March 2026.</li>
            <li>CEO title history: 9 years across HCM Deck, CallPage, Plane (YC W17). All titles are operations/project management. Zero sales, GTM, or revenue titles in career history.</li>
            <li>COO/CRO title discrepancy: LinkedIn profile says "CRO," pitch deck says "COO." Background is finance operations (Finance Director at Droppe, Business Operations at HCM Deck), not revenue generation.</li>
            <li>CTO background: ~5 years as IC .NET engineer at mBank/BLIK and Metro Bank. No prior tech lead, staff engineer, or architecture ownership experience.</li>
            <li>Filip and Dawid overlapped at HCM Deck (~18 months). Dawid and Nikodem attended UEK Krakow (Uniwersytet Ekonomiczny w Krakowie).</li>
            <li>All ~10 clients are Polish SMBs, mostly Krakow-based. Both angel investors are from the same ecosystem.</li>
            <li>Source: Sunbay Pitch Deck, team_analysis.md</li>
          </ul>
        </div>
      </details>
    </section>
  )
}
