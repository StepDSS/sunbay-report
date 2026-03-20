# CLAUDE.md — Sunbay.io Investment Memo Webpage

## What This Is

Build a single-page interactive investment memo for Sunbay.io, a Polish B2B accounts receivable automation startup. This is a recruitment task for an analyst internship at S16VC ($70M early-stage VC fund). The deliverable is one hosted webpage containing the full memo plus at least one interactive element.

## Tech Stack

- Single HTML file with embedded CSS and JS, OR a React app (Vite + Tailwind) — choose whichever is easier to deploy as a static site
- Must be hostable on Vercel, Netlify, or GitHub Pages with zero backend
- All data is static (hardcoded from research). No API calls needed except for the interactive elements if they use client-side computation
- Mobile-responsive

## Design Direction

**Tone:** Serious, analytical, investor-grade. Think: a Stripe press page meets a Bloomberg terminal report. NOT a startup marketing site.

**Typography:** Use a sharp serif for headings (e.g., Playfair Display, Fraunces, or similar from Google Fonts) and a clean sans-serif for body (e.g., DM Sans, Outfit, or similar). No Inter, no Roboto, no Arial.

**Color palette:** Dark background (#0a0a0a or similar near-black) with off-white text (#e8e5e0). Accent color: amber/gold (#d4a843 or similar) for highlights, key numbers, and interactive elements. Secondary accent: a muted red (#c45c4a) for risk/negative indicators. Keep it restrained — this is a financial document, not a landing page.

**Layout:** Long-scroll single page with a sticky left-side nav (desktop) or hamburger nav (mobile). Sections clearly delineated. Use generous whitespace between sections. Tables should be clean with subtle grid lines, not heavy borders. Charts should feel integrated, not bolted on.

**What to avoid:** Gradients, rounded-everything, card-heavy layouts, emoji, exclamation marks, any startup-marketing aesthetic. This should feel like a document a GP would actually read.

---

## Page Structure & Content

### 0. Header

- Title: "Investment Memo: Sunbay.io"
- Subtitle: "Prepared for S16VC | March 2026"
- Company one-liner: "B2B accounts receivable collections automation for Polish SMBs"
- Deal terms summary: "$1.2M raise at $6M post-money valuation"

### A. Top Recommendation

**Verdict: PASS**

Rationale (3-5 sentences):
Sunbay addresses a real problem — 72% of Polish companies report late payment issues, and no international AR automation tool integrates with Polish accounting systems. However, the product is a collections reminder tool with no technical moat; all integrated Polish systems expose public REST APIs, making the integration layer replicable. At $6M post-money on ~$18K ARR (estimated), the valuation is ~333x revenue with no demonstrated PMF. Neither of the two closest funded comps (Upflow: $23M raised, ~$4M revenue after 7 years; Chaser: $5-6M raised, 12 years in market) has produced a venture-scale outcome from AR automation SaaS alone. For a $70M fund, the $1.2M check requires ~58x return to return the fund — a bar the company's current trajectory and market ceiling do not support.

### B. Key Arguments & Risks

#### Why Invest (3 bullets + 1 upside case)

1. **Poland-specific integration moat (execution, not technical):** Sunbay is the only standalone AR automation SaaS integrated with 6 Polish accounting systems (Fakturownia, wFirma, inFakt, Systim, Saldeo Smart, Subiekt123). No international competitor (Chaser, Upflow, Gaviti, Tesorio) has any Polish integrations. The barrier is not technical (all have REST APIs) but executional — knowing which tools to integrate and doing the work first.
   - Source: competitor_addition.md; direct_competitor_landscape.md Part A4

2. **Large, validated pain point:** 72% of Polish companies report being affected by late payments (EU Payment Observatory 2025, highest in EU). Average B2B payment period exceeds 60 days (Intrum EPR 2025). 38% of B2B invoice value is overdue (Atradius 2025, n=210). EU-wide, 52% of companies report late payment problems, up from 42% in 2021.
   - Source: market_sizing_PL.md Section 2; market_sizing_EU.md Section 2.1

3. **Focused product, narrow problem:** The product does one thing (AR collection reminders) rather than trying to be an all-in-one platform. This is appropriate for the stage — team of 3 + 1 student, $60K raised.
   - Source: product_analysis.md "What Sunbay.io Is"

4. **Upside case:** If Sunbay finds a scalable way to generate and maintain local integrations at near-zero marginal cost (e.g., auto-generating connectors via AI/API documentation), it could replicate the Polish playbook across EU markets — expanding from €49-63M TAM (Poland) to €1.2-1.5B TAM (EU-27) with minimal incremental cost per market. This would put it in unicorn-potential territory.
   - Source: market_sizing_PL.md Section 4; market_sizing_EU.md Section 4.3

#### Key Risks (4 bullets + 1 downside case)

1. **No technical moat — integration layer is replicable:** All 6 Polish accounting systems expose public REST APIs rated Low to Moderate integration difficulty. Any competitor with engineering resources could build the same connectors. The advantage is being first, not being defensible.
   - Source: competitor_addition.md "Poland Key Observation"

2. **Team gaps in GTM and engineering leadership:** CEO (Filip) has zero sales/GTM titles in 9 years of career history — GTM responsibility is aspirational. COO/CRO (Dawid) has a title discrepancy (LinkedIn says CRO, deck says COO) and a finance ops background, not revenue generation. CTO (Nikodem) has no prior tech lead or architecture ownership experience. All are first-time founders.
   - Source: team_analysis.md

3. **Category ceiling signal from comps:** Upflow ($23M raised, eFounders incubation, YC W20, named clients Lattice/Front) is at an estimated ~$4M revenue after 7 years and pivoted into payments in 2024. Chaser ($5-6M raised) has been in market 12 years with 33 employees and no new funding since 2019. Neither has produced a venture-scale exit. The AR automation SaaS model may have a structural revenue ceiling.
   - Source: traction_benchmarking.md Sections 3-6

4. **AI features carry regulatory and liability risk:** The planned AI voice agent (ElevenLabs) for payment negotiations faces: EU AI Act high-risk classification for legal-adjacent AI, GDPR consent requirements for recorded calls, binding verbal contract risk under Polish civil law, and two-party consent requirements in Germany (§201 StGB). AI-generated legal documents risk unauthorized practice of law and hallucination (Stanford HAI 2025: legal AI hallucinate in 1/6+ queries).
   - Source: product_analysis.md Section "Future Use Cases & Risks"

5. **Downside case:** Chaser builds integrations with Polish accounting tools (all have public REST APIs) and offers its full feature set (payment portal, auto-calls, credit checks, AI payer ratings, 15+ existing integrations, 10K+ users) to Polish SMBs at $200/month — 2x Sunbay's price but with 5-10x the functionality. Sunbay's only differentiator disappears.
   - Source: direct_competitor_landscape.md Parts A3, A4; competitor_addition.md

### C. Section Analyses

#### C1. Team (3-5 bullets)

1. CEO Filip has 9 years in operations (HCM Deck, CallPage, Plane YC W17) but zero sales or GTM experience. COO/CRO Dawid has 5 years in finance ops (Droppe, HCM Deck) — his LinkedIn title (CRO) conflicts with the pitch deck (COO), and his background is finance, not revenue. CTO Nikodem has 5 years as a .NET IC engineer (mBank/BLIK, Metro Bank) with no management experience.
   - Source: team_analysis.md; LinkedIn profiles

2. All three founders are full-time as of August 2025. Filip and Dawid overlapped at HCM Deck (~18 months). Dawid and Nikodem attended UEK Kraków. Clear role separation (ops/finance/engineering) with minimal overlap.
   - Source: team_analysis.md

3. All ~10 clients are Polish SMBs, mostly Kraków-based, acquired through founder network. Both angel investors (Szymon Brodziak of S16VC, personal investment; Sebastian Bobrowski, inFakt co-founder) are from the same ecosystem. No evidence of ability to sell outside personal connections.
   - Source: team_analysis.md "Network & Client Acquisition"

4. The 4th team member (Kamil Jałowiec, GTM) is a university student with ~1 year of marketing internship experience. This is the entirety of the sales/marketing function.
   - Source: team_analysis.md; LinkedIn — Kamil Jałowiec

#### C2. Product (3-5 bullets)

1. Confirmed shipped: automated email/SMS reminder sequences, configurable collection workflows, open/read tracking, interest notes, dashboard, 8 accounting integrations (6 Polish + Xero + QuickBooks), SendGrid/SMSAPI communication. This is a collections reminder tool.
   - Source: product_analysis.md "Confirmed shipped"

2. Three sources (website, deck, pitch video) describe materially different products. The video shows CRM integrations (HubSpot, Pipedrive, Docusign), bank integrations (HSBC, Revolut, Alior, mBank), a payment matching module, and an invoicing module — none of which appear on the website. Whether these are working features or roadmap shown as current capability is unknown.
   - Source: product_analysis.md "What's Shipped vs. What's Claimed"

3. Missing vs. competitors: no customer payment portal (Chaser ✅, Upflow ✅, Gaviti ✅, Tesorio ✅), no credit checks/risk scoring, no dispute management, no cash application, no auto-reconciliation. Chaser offers all of this at $200/month — 2x Sunbay's price.
   - Source: direct_competitor_landscape.md Part A3

4. Pricing is €100/month (Basic) to €120/month (Standard), plus SMS add-on. At this ACV (~€1,300/year), reaching €1M ARR requires ~770 paying customers — a high-volume SMB sales motion that no one on the team has executed before.
   - Source: sunbay_website_snapshot.md; traction_benchmarking.md Section 2

#### C3. Market (3-5 bullets + TAM table)

1. **Poland TAM:** 36,858 enterprises (conservative) to 47,685 (extended) with 10-249 employees in B2B sectors × €1,320 ARPC = €48.7M (conservative) to €62.9M (extended). Based on GUS 2024 enterprise counts and Sunbay's published pricing midpoint. The 10-249 segment is shrinking (-0.6% YoY).
   - Source: market_sizing_PL.md Section 4

2. **EU-27 TAM:** ~935K enterprises (conservative) to ~1.12M (extended) × €1,320 = €1.23B (conservative) to €1.48B (extended). This is the ceiling if Sunbay builds integrations for every EU market.
   - Source: market_sizing_EU.md Section 4.3

3. **Germany + France combined:** ~326K enterprises, ~€431M TAM. But entry requires integrating with DATEV (Germany's dominant accounting system — batch CSV/XML, no REST API, formal approval process, rated "High" difficulty) and 20+ French tools.
   - Source: market_sizing_DE.md; market_sizing_FR.md; competitor_addition.md

4. **KSeF (Poland's mandatory B2B e-invoicing) goes live April 2026.** This digitizes invoice issuance but does NOT track payments, does NOT automate collections. It creates a structured data layer that makes it easier for AR tools to ingest invoice data — a tailwind for Sunbay's TAM activation, not a competitor.
   - Source: market_sizing_PL.md Section 3

**TAM Summary Table:**

| Geography | Conservative TAM | Extended TAM | Enterprise Count (Cons.) |
|---|---|---|---|
| Poland | €48.7M | €62.9M | 36,858 |
| Germany | €303.2M | €376.4M | 229,732 |
| France | €127.5M | €158.3M | 96,578 |
| EU-27 | €1.23B | €1.48B | ~935K |

Assumptions: ARPC = €1,320/yr (midpoint Basic/Standard); 10-249 employee firms; B2B sectors only; no adoption rate applied.

#### C4. Competitive Landscape & Differentiation (3-5 bullets)

1. **International competitors:** Chaser (London, $4.8M raised, ~$3.3M ARR est., 10K users, 12 years), Upflow (Paris, $23M raised, ~$4.1M rev est., YC W20), Gaviti (Tel Aviv, $11.5M raised), Tesorio (SF, $35.5M raised). None have Polish integrations. All have features Sunbay lacks.
   - Source: direct_competitor_landscape.md Part A

2. **Polish local competitors:** Vindicat.pl (20K+ users claimed, won Polish Fintech of Year 2023) — positioned as self-service debt *recovery* (post-default), not proactive AR automation. Integrates with same Polish tools. 169 PLN/mo (~€39) or 6% success fee. Comarch ERP Optima (60K+ users) — collections module within ERP, not standalone. wFirma — basic email reminders at 49 PLN/mo.
   - Source: direct_competitor_landscape.md Part B

3. **Indirect competitors:** Poland's debt recovery industry = PLN 3.7B revenue, 89 firms, 6,801 employees (GUS 2024). B2B claims: ~0.9M cases/year. These operate post-default (30-90+ days overdue), complementary to Sunbay (pre-default). General automation platforms (Zapier, Make, n8n) can theoretically replicate basic reminders but require technical skill the target user lacks.
   - Source: competitive_landscape_indirect.md

4. **Sunbay's differentiator:** Only standalone AR automation SaaS with Polish accounting integrations. This is an execution advantage (being first), not a technical moat (all APIs are public REST, rated Low-Moderate difficulty). The question is whether demand is high enough for others to replicate it.
   - Source: competitor_addition.md "Poland Key Observation"; direct_competitor_landscape.md Part C

**Competitor Comparison Table (for display):**

| | Sunbay | Chaser | Upflow | Gaviti | Tesorio |
|---|---|---|---|---|---|
| HQ | Kraków | London | Paris | Tel Aviv | San Francisco |
| Founded | 2025 | 2013 | 2018 | 2018 | 2015 |
| Employees | 3+1 | ~30-33 | ~68-72 | ~35 | ~62 |
| Funding | $60K | ~$4.8M | ~$23M | ~$11.5M | ~$35.5M |
| Est. Revenue | ~$18K ARR | ~$3.3M | ~$4.1M | ~$3.8-6.6M | ~$11M |
| Polish integrations | 6 tools | 0 | 0 | 0 | 0 |
| Payment portal | ❌ | ✅ | ✅ | ✅ | ✅ |
| Auto calls | ❌ (planned) | ✅ | ❌ | ✅ | ❌ |
| Credit checks | ❌ | ✅ | ❌ | ✅ | ❌ |
| Entry price | €100/mo | $200/mo | Custom | $45/mo | Custom |

#### C5. Traction & Benchmarking (3-5 bullets)

1. **April 2025 (deck data):** $1.2-1.5K MRR from SaaS (5-6 paying clients), plus ~$3K consulting revenue (unspecified recurrence/scope). North star: 1,981 total automated actions (Jan-Apr 2025). CollectionModule grew from 254 to 638 actions over that period.
   - Source: traction_benchmarking.md Section 1

2. **March 2026 (estimated):** ~10 paying customers (based on website logos), estimated $2.4-3K MRR, ~$29-36K ARR. Missing: current MRR, MoM growth, churn, NRR, CAC, pipeline, ACV distribution. All clients appear network-acquired.
   - Source: traction_benchmarking.md Section 1

3. **Benchmarking:** Typical seed-stage B2B SaaS raises at $150K-500K ARR. Sunbay's ~$18-36K ARR is 4-28x below the low end. The $6M post-money on ~$18K ARR = ~333x revenue multiple. Not unusual for pre-seed/angel but entirely forward-looking.
   - Source: traction_benchmarking.md Section 2

4. **Comp: Upflow at seed (Sep 2019):** ~$742K revenue (est.), 18 employees, eFounders studio backing, Kima Ventures. Seven years and $23M later: ~$4M revenue, pivoted into payments. Comp: Chaser (12 years, $5-6M funding, 33 employees, no new funding since 2019). Neither has produced a venture-scale outcome.
   - Source: traction_benchmarking.md Sections 3-5

#### C6. The Round & Returns (3-5 bullets)

1. **Deal terms:** $1.2M at $6M post-money → 20% ownership → $4.8M pre-money. This is Sunbay's target raise, not closed. Currently $60K raised in angel round from Szymon Brodziak (S16VC Head of Investment Analytics, personal) and Sebastian Bobrowski (inFakt co-founder).
   - Source: s16vc_portfolio_deep_dive.md "The Sunbay deal in context"

2. **S16VC fund math:** $1.2M = ~1.7% of Fund II ($70M). To return the fund on this single deal, Sunbay would need to exit at $70M / 20% = $350M minimum — requiring ~58x return on the investment. To be a meaningful contributor (3-5x fund return on this check), exit needs to be $1-1.75B.
   - Source: s16vc_fund_profile.md; s16vc_portfolio_deep_dive.md

3. **S16VC check size context:** Fund II initial checks estimated at $1-3M. $1.2M is within range but at the high end for seed. At 20% ownership, S16VC would be lead or sole institutional investor — consistent with deals like Playgama ($3M seed, co-led) but inconsistent with deals where S16VC rides alongside Index or General Catalyst.
   - Source: s16vc_portfolio_deep_dive.md "Check Size Analysis"

4. **Market ceiling problem:** Poland-only TAM is €49-63M. At 10% market capture (aggressive for a seed-stage company), that's €5-6M revenue — a ~$30-40M valuation at 5-7x revenue. This does not reach $350M. EU expansion (€1.2-1.5B TAM) is required, but that means country-by-country integration builds in markets where funded competitors already operate.
   - Source: market_sizing_PL.md; market_sizing_EU.md; competitor_addition.md

### D. Interactive Element — Return Sensitivity Model

Build an interactive calculator embedded in the page that lets the user adjust:

**Inputs (sliders/inputs):**
- Check size: $100K — $2M (default: $1.2M)
- Post-money valuation: $3M — $15M (default: $6M)
- Fund size: $50M — $100M (default: $70M)
- Dilution through future rounds: 0% — 80% (default: 50%)
- Exit valuation: $10M — $2B (log scale, default: $100M)

**Outputs (computed live):**
- Ownership at entry: check_size / post_money
- Ownership at exit (post-dilution): ownership_at_entry × (1 - dilution)
- Gross return to fund: exit_valuation × ownership_at_exit
- Return multiple on check: gross_return / check_size
- Fund return contribution: gross_return / fund_size (as x and %)
- Required exit for 1x fund return: fund_size / ownership_at_exit
- Required exit for 3x fund return: (3 × fund_size) / ownership_at_exit

**Additional interactive element — Competitive Landscape Radar/Comparison:**
An interactive table or radar chart where the user can toggle competitors on/off and see feature comparisons, funding, revenue, and employee counts side by side. Use the competitor data from section C4.

**Additional interactive element — TAM Waterfall:**
A visual waterfall or stacked bar showing how TAM narrows from EU-27 → Germany+France → Poland, with the ability to toggle between conservative and extended estimates.

---

## Data Tables to Embed

All data is in the research files. Key tables to render:

1. **TAM Summary** (4 rows: PL, DE, FR, EU-27 × conservative/extended)
2. **Competitor Comparison** (Sunbay vs Chaser vs Upflow vs Gaviti vs Tesorio — fundamentals + features)
3. **Polish Local Competitors** (Sunbay vs Vindicat vs Comarch Optima vs wFirma)
4. **Traction Benchmarking** (Sunbay estimated vs seed-stage benchmarks)
5. **Team Overview** (3 founders: role, background, gap)
6. **Return Sensitivity** (interactive, see above)
7. **Integration Landscape** (Polish tools × API availability × difficulty)

---

## Source Citations

Include a collapsible "Sources" section at the bottom of the page. Group by section. Include full URLs where available. For pitch deck and LinkedIn, reference as "[Source: Sunbay Pitch Deck]" and "[Source: LinkedIn — {Name}]".

Total unique sources across all research files: 100+. Include all of them. This demonstrates research depth.

---

## What NOT to Do

- Do not use phrases like "impressive," "promising," "concerning," "exciting" — state facts
- Do not pad sections. If there are 3 real points, make 3. Don't stretch to 5.
- Do not summarize the pitch deck back. The analysis must add value over what the deck already says.
- Do not use emoji anywhere
- Do not use rounded cards with drop shadows for everything
- Do not make it look like a ChatGPT output or a generic SaaS dashboard
- Do not add a "Disclaimer: this is not financial advice" footer. This is a VC memo, not a retail investment document.

---

## File Structure (if React app)

```
src/
  App.jsx          — Main layout, section routing, sticky nav
  components/
    Header.jsx
    Recommendation.jsx
    KeyArguments.jsx
    TeamSection.jsx
    ProductSection.jsx
    MarketSection.jsx
    CompetitiveSection.jsx
    TractionSection.jsx
    RoundReturns.jsx
    ReturnCalculator.jsx    — Interactive return sensitivity model
    CompetitorRadar.jsx     — Interactive competitor comparison
    TAMWaterfall.jsx        — Interactive TAM visualization
    SourcesSection.jsx
  data/
    competitors.js
    tam.js
    traction.js
    team.js
    sources.js
  styles/
    global.css
```

If single HTML file: structure with clear section IDs and a `<style>` block at top. Use vanilla JS for interactivity. Chart.js via CDN for any charts.

---

## Hosting

After building, deploy to Vercel or Netlify. Provide the live URL.
