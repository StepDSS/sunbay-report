---
topic: Competitive Landscape — Indirect Competitors (Poland + EU)
date: 2026-03-20
sources_used: 33
user_inputs_integrated: yes
confidence_notes: GUS data for Poland debt recovery is official government statistics (2024). EU market sizing relies on syndicated research reports (Cognitive Market Research, Market Data Forecast) with typical ±10-15% variance between providers. Zapier/Make/n8n pricing confirmed from official pricing pages as of Q1 2026. Zapier Community forum thread is a single user case study — illustrative, not statistically representative. No public data exists on what percentage of automation platform users build invoice/AR workflows specifically.
---

# Competitive Landscape — Indirect Competitors

## Scope

This report covers **indirect competitors** to Sunbay.io — not AR automation software vendors, but alternative solutions a B2B SMB might use to address the same underlying problem: getting paid faster on outstanding invoices.

Two categories are analyzed:

1. **Debt recovery agencies** (*firmy windykacyjne* / kancelarie windykacyjne) — outsourced human-driven collection services
2. **General-purpose automation platforms** (Zapier, Make, n8n) — DIY workflow tools that can be configured for invoice reminders

These are substitutes, not direct competitors. They solve the same pain (reducing DSO, recovering overdue payments) through fundamentally different mechanisms and at different stages of the receivables lifecycle.

---

## 1. Debt Recovery Agencies

### What they are

Third-party firms that pursue payment of overdue invoices on behalf of creditors. They operate primarily post-default — typically engaged when invoices are 30-90+ days overdue and internal collection efforts have failed. Services range from amicable negotiation (phone calls, demand letters) through court proceedings and bailiff enforcement.

### Poland — Market Overview

The Polish debt recovery industry is tracked annually by GUS (Główny Urząd Statystyczny / Central Statistical Office). Key 2024 data:

- **89 firms** surveyed by GUS, employing **6,801 people** across the industry [Source: GUS via bank.pl, August 2025]
- **10.2 million claims** accepted for processing in 2024, nominal value **PLN 48.4B** [Source: GUS via horecatrends.pl, August 2025]
- Of those, **9.3M were consumer claims** and **0.9M were corporate (B2B)** — corporate claims represent ~9% by volume but ~28.6% by value (PLN 13.8B) [Source: GUS via horecatrends.pl, August 2025]
- **73 firms** with full accounting reported total revenue of **PLN 3,713M (~€860M)** and net profit of **PLN 1,474M** in 2024 [Source: GUS via bank.pl, August 2025]
- Revenue declined 0.7% YoY from 2023 (PLN 3,737M), after rapid growth in prior years: PLN 2.3B (2021) → PLN 3.0B (2022, +24.5%) → PLN 3.7B (2023) [Source: GUS via Bankier.pl/rp.pl, various years]
- **No licensing requirement** exists for debt collection agencies in Poland. The barrier to entry for amicable recovery is low; only court representation requires licensed attorneys. [Source: Dudkowiak & Putyra law firm, December 2025]

**B2B-relevant slice:** The B2B portion of the Polish recovery market is approximately PLN 13.8B in nominal claim value accepted annually. Industry revenue attributable to B2B recovery is roughly PLN 700M-1B/year (applying the B2B value share to total industry revenue), though this is an approximation since B2B claims carry higher average values and different commission structures than consumer debt.

**DSO context:** Average DSO for B2B invoices in Poland stood at 59 days in 2024 and H1 2025. For listed companies, DSO was 45 days. [Source: Allianz Trade Poland Debt Collection Complexity Report, accessed March 2026]

**Regulatory tailwind:** Poland is introducing mandatory e-invoicing (KSeF — Krajowy System e-Faktur) starting February 2026 for large companies (>PLN 200M sales) and April 2026 for all other taxpayers. Digitized invoices make automated follow-up and collections more technically feasible. [Source: Allianz Trade, accessed March 2026]

### Poland — Pricing Model

Recovery agencies universally operate on a commission basis ("no cure, no fee" for the amicable stage):

- **B2B commission:** 7-10% of recovered amount [Source: Kancelaria Rubikon]
- **Broader range:** 5-18% depending on debt value, complexity, and debtor financial condition [Source: LT LAW Kancelaria, August 2022]
- **Quick-resolution flat fee:** Some agencies offer flat fees for fast-pay scenarios — e.g., AIF Kancelaria charges PLN 189 (~€44) if the debtor pays within 7 days of a formal demand letter [Source: AIF Kancelaria, March 2026]
- **Court proceedings:** Commissions escalate to 40-50% if the agency bears all legal costs [Source: Simplex cennik]
- **Standard commission for post-amicable recovery:** 10-20% of recovered amount when cases go beyond initial demand [Source: AIF Kancelaria, March 2026]

Over 70% of cases that reach windykacja firms are already at a stage where the creditor would be satisfied recovering any portion of the money. [Source: LT LAW Kancelaria, August 2022]

### Poland — Named Examples (B2B SMB-Relevant)

**Kaczmarski Inkasso** (Wrocław) — Operating for 30 years. Handles both strategic clients (banks, telecoms, insurers) and SMEs across all sectors. Focus on commission-based amicable recovery (windykacja polubowna na zlecenie). 2024 revenue from commission-based recovery: PLN 67M. [Source: MGBI.pl, January 2026]

**Fluence Finance** (Warsaw) — Specializes in B2B recovery specifically for małe i średnie przedsiębiorstwa (SMEs). 16+ years experience. Covers all of Poland from Warsaw base. Positions itself as flexible and tailored to individual client needs, in contrast to large-scale corporate debt purchasers. [Source: Fluence Finance website, March 2024]

### EU — Market Overview

- **Debt collection services market (EU):** ~USD 9.16B (~€8.4B) in 2025, representing ~30% of the global market (USD 30.5B). [Source: Cognitive Market Research, January 2026]
- **~300 million accounts** placed for collections annually across Europe. [Source: Market Growth Reports, 2024]
- **Debt collection software market (EU):** USD 1.64B in 2024, projected to reach USD 4.31B by 2033 at 11.3% CAGR. SMEs accounted for 55.1% of this market. [Source: Market Data Forecast, April 2025]
- **Major EU-level players** (not SMB-focused, but context): Intrum AB (Stockholm, ~$1.6B revenue, 9,000 employees, 20 markets), EOS Group (Hamburg, €1.1B revenue, 6,000 employees, 20+ countries), Atradius Collections (Amsterdam, 79.3% global success rate, 90,000+ commercial cases/year). These primarily serve large corporates and financial institutions, not the 10-200 FTE B2B SMBs Sunbay targets. [Source: Debexpert.com, February 2026; Atradius Collections, September 2024]

### Key Distinction: Recovery Agencies vs. Sunbay

Recovery agencies intervene **after** payment has failed (30-90+ days overdue). Sunbay operates **before** default — automating reminders, follow-ups, and payment tracking from day 1 post-invoice to prevent invoices from reaching the overdue stage. These are sequential, not competing, solutions: a company could use Sunbay to reduce the volume of invoices that ever reach a recovery agency.

The cost comparison is asymmetric: Sunbay at €100-120/month flat vs. losing 7-18% of each recovered invoice to an agency. For an SMB with €50K/month in receivables and 10% going significantly overdue, agency commissions would run €350-900/month — making Sunbay's pricing rational **if** it measurably reduces the volume flowing to agencies.

---

## 2. General-Purpose Automation Platforms

### What they are

Low-code/no-code workflow automation tools that connect apps via APIs. Users can build custom workflows ("Zaps," "scenarios," or "workflows") to automate tasks across software tools. Invoice reminders and AR follow-ups are a supported but niche use case within these platforms.

### Platform Overview

**Zapier** — Market leader. 3M+ users, 2.2M+ businesses, 100K+ paying customers. Projected $400M revenue for 2025. 8,000+ app integrations. Geographically concentrated: ~59% of customers in the US, ~8% UK, ~5% Canada. No European country besides UK appears in top customer data; Poland is not visible in any published breakdown. Top customer industries: Computer Software (14%), IT Services (11%), Marketing and Advertising (10%). [Source: 6sense; SQ Magazine; SimilarWeb via electroiq.com; Enlyft; various 2025-2026]

**Make.com** (formerly Integromat) — Czech-founded, relatively strong in EU. 3,000+ integrations. Credit/operation-based pricing, substantially cheaper than Zapier at comparable volume. Visual workflow builder targeting non-technical users. [Source: Make.com, various 2025-2026]

**n8n** — Open-source, self-hostable. 1,200+ integrations. Developer-oriented. Can be run for free on own infrastructure. Cloud plans start at €20/month. Requires technical skill to set up and maintain. [Source: n8n.io, various 2025-2026]

### Pricing (as of Q1 2026)

| Platform | Free Tier | Entry Paid Plan | Mid-Tier | Billing Unit | Notes |
|----------|-----------|----------------|----------|-------------|-------|
| **Zapier** | 100 tasks/mo, 2-step only | $19.99/mo (750 tasks) | $89/mo (5,000 tasks) | Per task (each action = 1 task) | Premium apps (Xero, Salesforce) require paid plan |
| **Make.com** | 1,000 ops/mo, 2 scenarios | $10.59/mo (10,000 ops) | $18.82/mo (Pro) | Per operation (each module = 1 op) | ~2.5x cheaper than Zapier at comparable volume |
| **n8n** | Self-hosted: free | Cloud: €20/mo (2,500 executions) | Cloud: €50/mo (10,000 exec.) | Per workflow execution (regardless of steps) | Self-hosted = server costs only (~€6-15/mo VPS) |

[Sources: Zapier.com/pricing; PxlPeak Make.com pricing guide, March 2026; n8n.io/pricing; Cipher Projects n8n vs Make comparison, 2026]

**Task consumption note:** A multi-step AR reminder workflow in Zapier (trigger → check overdue status → filter → send email → update spreadsheet) would consume 3-5 tasks per execution. At 200 invoices/month with weekly checks, that's 2,400-4,000+ tasks/month — pushing into the $49-89/month Zapier tier. Make.com would consume ~2x operations per equivalent workflow but at a lower per-unit cost ($10-19/month range). n8n self-hosted would cost only server infrastructure (~€6-15/month). [Sources: First AI Movers Zapier pricing comparison, December 2025; PxlPeak Make.com pricing guide, March 2026]

### The DIY Problem: Building AR Collections in Zapier

No public data exists on what percentage of Zapier/Make/n8n users build invoice reminder or AR collection workflows. These platforms do not publish usage breakdowns by workflow category. Invoice automation is a documented use case in all three platforms' marketing materials and template libraries, but it is almost certainly a niche application by volume — dominant use cases are marketing/CRM syncs, e-commerce order processing, and lead management.

**The complexity gap is documented.** A Zapier Community forum thread from July 2025 illustrates the difficulty of building even a basic tiered reminder system:

> A user attempted to build an automated invoice reminder pipeline: send a "due soon" email 30 days after invoice creation in ServiceTitan, then send recurring reminder emails every 10 days until paid. The Zapier Community response recommended splitting this into **two separate Zaps** with an **external data store** (Google Sheets or Zapier Tables) to track invoice state. The user encountered multiple limitations:
>
> - Zapier cannot delay actions beyond 30 days within a single Zap
> - An external state-tracking system was required to monitor which invoices remained unpaid
> - The paid Tables subscription (Pro tier) was required to use formulas
> - After multiple iterations and community guidance, the user was still unable to confirm the workflow functioned as designed
>
> The community advisor noted: *"Since Zapier can't delay actions for more than 30 days mid-Zap, the best approach is to break your workflow into two Zaps."* They also acknowledged the need for additional workarounds: *"Is there a final cut off date for reminders? How long would you let an invoice to go before taking more action than just sending another email? Just wondering if there's a better way to handle recurring the reminders if there's not cut-off date — potentially a code step?"*

[Source: Zapier Community Forum, "How to set up recurring payment reminder emails at different intervals?", July 2025, https://community.zapier.com/how-do-i-3/how-to-set-up-recurring-payment-reminder-emails-at-different-intervals-50342]

This represents a **basic** version of what Sunbay offers out of the box — a single-channel (email only), two-tier reminder system without payment matching, SMS, AI calls, template personalization, escalation logic, or dashboard tracking. The Sunbay website claims same-day setup (1 hour for accounting system connection). [Source: Sunbay Website]

### What Automation Platforms Cannot Do (Without Custom Development)

- **Payment matching** — checking whether an invoice has been paid requires a separate integration with a bank API or payment gateway, plus logic to update the tracking sheet and stop reminders
- **Multi-channel escalation** — email → SMS → phone call escalation tiers require separate Zaps/scenarios per channel, each with its own state management
- **Branded templates with dynamic content** — possible but requires manual template setup per client/invoice type
- **Collections dashboard** — no native equivalent; would need a separate BI tool or custom-built interface
- **Legal document generation** — not a standard automation platform capability
- **AI-powered voice calls** — not available natively in any of these platforms

---

## 3. Comparison Table

| Dimension | Sunbay.io | Recovery Agency (e.g., Kaczmarski Inkasso) | Automation Platform (e.g., Zapier) |
|-----------|-----------|------------------------------------------|-----------------------------------|
| **When it intervenes** | Day 1 post-invoice (prevention) | 30-90+ days overdue (cure) | Configurable, but requires manual setup |
| **Pricing** | €100-120/mo flat | 7-18% of recovered amount (commission) | $10-90+/mo depending on platform and volume |
| **Setup time** | Claims same-day (1 hour) | Per-case onboarding | Days to weeks for a multi-step AR pipeline |
| **Technical skill required** | None (no-code, pre-built workflows) | None (fully outsourced) | Moderate to high (multi-Zap architecture, external data stores, API connections) |
| **Multi-channel** | Email + SMS + AI calls (voice launching soon) | Phone + letters + in-person + court | Email primarily; SMS/calls require additional integrations |
| **Payment matching** | Built-in (bank integrations claimed in pitch video) | Manual / not applicable | Requires custom build per payment gateway |
| **Escalation tiers** | Pre-configured collection flows | Agency discretion | Must be built manually per tier |
| **Dashboard / reporting** | Built-in (top debtors, open rates, cash flow) | Periodic reports from agency | None native; requires external BI tool |
| **Scalability** | SaaS — scales with invoice volume | Scales with commission cost (more overdue = more fees) | Scales with task/operation consumption (cost increases linearly) |
| **Target user** | Finance/ops staff at 10-200 FTE B2B SMBs | Any creditor with overdue receivables | Tech-savvy users comfortable with API logic |
| **Geography** | Poland-first, expanding EU | Local (per jurisdiction) | Global |
| **Ongoing maintenance** | Vendor-managed (SaaS) | None (outsourced) | User-managed (workflows break when apps update APIs) |

---

## 4. Analytical Observations

**Recovery agencies and Sunbay are complements, not pure substitutes.** Agencies operate downstream (post-default); Sunbay operates upstream (pre-default). A company could use both — Sunbay to reduce the flow of invoices reaching 60+ days overdue, and an agency for the residual cases that escalate beyond automated collection. The relevant question for Sunbay's value proposition is whether its automation measurably reduces the volume and value of invoices that reach the agency threshold.

**Automation platforms are the closest substitute by function, but the weakest by usability for Sunbay's target persona.** A finance specialist at a 50-person Polish SMB is not building multi-Zap workflows with external state management, Google Sheets as a database, and custom API connections to their accounting system. Zapier's own user base is 59% US-based, and its top customer industries are software, IT services, and marketing — not SMB finance teams in Central Europe.

**The real "competitor" for most of Sunbay's target customers today is the status quo:** manual email reminders, phone calls, and spreadsheets. The pitch deck (slide 3) acknowledges this directly — "Usual solution: Hire more people and build bigger spreadsheet." The competitive landscape data supports this framing: dedicated AR automation tools are priced for enterprise ($1K+/month), automation platforms require technical skill the target user lacks, and recovery agencies intervene too late in the cycle.

**Sunbay's pricing is positioned in a gap.** At €100-120/month, it sits below enterprise AR tools and below the effective cost of agency commissions for any SMB with meaningful overdue receivables, while being comparable to mid-tier automation platform subscriptions — but without requiring the user to build anything.

---

## Sources

1. GUS (Główny Urząd Statystyczny) — Działalność przedsiębiorstw windykacyjnych w 2024 roku, via bank.pl (August 2025)
2. GUS — Działalność przedsiębiorstw windykacyjnych w 2023 roku, via bank.pl (August 2024)
3. GUS — firmy windykacyjne w 2024 r., via horecatrends.pl (August 2025)
4. GUS — Działalność przedsiębiorstw windykacyjnych w 2022 roku, via rp.pl (August 2023)
5. GUS — firmy windykacyjne na koniec 2021 r., via Bankier.pl (August 2022)
6. Kancelaria Rubikon — windykacja należności na zlecenie, https://www.kancelariarubikon.pl/windykacja-naleznosci-na-zlecenie
7. LT LAW Kancelaria — samodzielna windykacja a kancelarie windykacyjne (August 2022), https://www.ltlaw.pl/blog/samodzielna-windykacja-naleznosci-i-obsluga-prawna-przez-kancelarie-windykacyjne/
8. AIF Kancelaria — windykacja przedsiębiorstw, https://www.aif.com.pl/windykacja/windykacja-przedsiebiorstw/ (January 2026)
9. AIF Kancelaria — koszty windykacji 189 zł, https://www.aif.com.pl/koszty-windykacji-tylko-189zl/ (March 2026)
10. Simplex — cennik, http://www.biznes-simplex.pl/Home/Cennik
11. Fluence Finance — firma windykacyjna, https://www.fluence.com.pl/ (March 2024)
12. MGBI.pl — Największe firmy windykacyjne w Polsce, https://www.mgbi.pl/blog/najwieksze-firmy-windykacyjne-w-polsce/ (January 2026)
13. Dudkowiak & Putyra — Debt Collection in Poland, https://www.dudkowiak.com/debt-collection-in-poland/ (December 2025)
14. Allianz Trade — Poland Debt Collection Complexity Report, https://www.allianz-trade.com/en_global/economic-research/collection-complexity/poland.html
15. Cognitive Market Research — Debt Collection Services Market Report (January 2026)
16. Market Data Forecast — Europe Debt Collection Software Market (April 2025)
17. Debexpert.com — Top 10 Largest Debt Collection Agencies (February 2026)
18. Atradius Collections — B2B Debt Collections Services in Poland (September 2024)
19. Market Growth Reports — Debt Collection Services Market Size & Share Trends (2024)
20. 6sense — Zapier Market Share, https://6sense.com/tech/integration/zapier-market-share
21. SQ Magazine — Zapier Statistics 2026, https://sqmagazine.co.uk/zapier-statistics/ (November 2025)
22. SimilarWeb via electroiq.com — Zapier Statistics (May 2025)
23. Enlyft — Zapier Market Share, https://enlyft.com/tech/products/zapier
24. Zapier Community Forum — "How to set up recurring payment reminder emails at different intervals?", July 2025, https://community.zapier.com/how-do-i-3/how-to-set-up-recurring-payment-reminder-emails-at-different-intervals-50342
25. Zapier.com — Plans & Pricing, https://zapier.com/pricing
26. PxlPeak — Make.com Pricing 2026, https://pxlpeak.com/blog/ai-tools/make-pricing-guide (March 2026)
27. n8n.io — Plans and Pricing, https://n8n.io/pricing/
28. Cipher Projects — n8n vs Make comparison, https://cipherprojects.com/blog/posts/n8n-vs-make-automation-platform-comparison/ (2026)
29. Make.com — Make vs n8n comparison, https://www.make.com/en/compare/make-vs-n8n (2025-2026)
30. Eesel.ai — Zapier subscription guide (2025)
31. First AI Movers — Zapier 2026 pricing platform comparison (December 2025)
32. Sunbay Pitch Deck — slides 3, 5, 7
33. Sunbay Website — https://sunbay.io/ (accessed March 2026)
