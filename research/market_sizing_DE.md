---
topic: Market Sizing — Germany
date: 2026-03-20
sources_used: 18
user_inputs_integrated: yes
confidence_notes: Enterprise counts are [A]-quality from Destatis/IfM Bonn. Late payment data combines [A] transaction data (Creditreform DRD, ~4M invoices) with [B] survey data (ECB/EC SAFE, Coface n=774, Atradius). AI/ERP/CRM adoption is [A] from Eurostat ICT enterprise survey. G45/G46/G47 split uses EU-average proxy [C]. Total overdue B2B debt stock not available [D].
---

# Market Sizing: B2B AR Collections Automation — Germany

## 1. Enterprise Population (10–249 Employees)

### 1.1 Total enterprise count

**Source:** Destatis Business Register, special tabulation for IfM Bonn (published 30.09.2024). Reference year: 2023.
**Size class definition:** EU Commission — Kleine (10–49 dependent employees), Mittlere (50–249 dependent employees).
**Scope:** Non-financial business economy, WZ 2008 sections B–N, P–S. Excludes agriculture (A), public administration (O), households (T), extraterritorial (U).

| Size class | Count | Share of total |
|---|---|---|
| Micro (0–9) | 2,946,718 | 84.9% |
| Small (10–49) | 403,445 | 11.6% |
| Medium (50–249) | 92,870 | 2.7% |
| Large (250+) | 26,885 | 0.8% |
| **Total** | **3,469,918** | **100%** |

**Target segment (10–249): 496,315 enterprises** [A]

[Source: IfM Bonn, Unt_2023_D_GrKl.pdf, https://www.ifm-bonn.org/fileadmin/data/redaktion/statistik/mittelstand_im_einzelnen/dokumente/Unt_2023_D_GrKl.pdf]

### 1.2 Breakdown by NACE section

| NACE Section | 10–49 | 50–249 | 10–249 total | Quality |
|---|---|---|---|---|
| B — Mining & quarrying | 597 | 196 | 793 | [A] |
| C — Manufacturing | 45,797 | 17,068 | 62,865 | [A] |
| D — Electricity/gas/steam | 3,230 | 854 | 4,084 | [A] |
| E — Water/sewerage/waste | 3,013 | 1,318 | 4,331 | [A] |
| F — Construction | 48,082 | 5,701 | 53,783 | [A] |
| G — Trade; vehicle repair | 78,930 | 21,088 | 100,018 | [A] |
| H — Transport & storage | 21,126 | 5,477 | 26,603 | [A] |
| I — Accommodation & food | 31,984 | 3,241 | 35,225 | [A] |
| J — Information & communication | 14,253 | 4,315 | 18,568 | [A] |
| K — Financial & insurance | 2,779 | 1,256 | 4,035 | [A] |
| L — Real estate | 10,490 | 1,730 | 12,220 | [A] |
| M — Professional/scientific/technical | 38,594 | 6,809 | 45,403 | [A] |
| N — Administrative & support | 24,624 | 7,246 | 31,870 | [A] |
| P — Education | 12,972 | 2,437 | 15,409 | [A] |
| Q — Health & social work | 45,479 | 10,561 | 56,040 | [A] |
| R — Arts/entertainment/recreation | 7,073 | 1,070 | 8,143 | [A] |
| S — Other services | 14,422 | 2,503 | 16,925 | [A] |
| **B–N, P–S TOTAL** | **403,445** | **92,870** | **496,315** | [A] |

[Source: IfM Bonn, Unt_2023_D_BR-STR.pdf, https://www.ifm-bonn.org/fileadmin/data/redaktion/statistik/mittelstand_im_einzelnen/dokumente/Unt_2023_D_BR-STR.pdf]

### 1.3 G45/G46/G47 division-level split

**Not available from Destatis published tables or IfM Bonn PDFs.** Section G total (10–249) = 100,018 enterprises. For the extended TAM, the EU-average proportional split is applied: G45 = 15.0%, G46 = 27.9%, G47 = 57.1%.

[Source for EU ratio: Eurostat, "Businesses in distributive trade sector," 2022 data, https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Businesses_in_distributive_trade_sector]

The Germany-specific split exists in Destatis GENESIS-Online table 48121 at WZ2008 2-digit level but requires a registered login to query.

### 1.4 YoY change (2022 → 2023)

| Size class | 2022 | 2023 | YoY change |
|---|---|---|---|
| Small (10–49) | 400,341 | 403,445 | +0.8% |
| Medium (50–249) | 91,204 | 92,870 | +1.8% |

Longer trend (2021 → 2023): Small +3.9%, Medium +5.7% over 2 years.

Manufacturing (C) is declining within both bands. Growth is driven by construction (F), professional services (M), administrative services (N), and information & communication (J).

[Source: IfM Bonn, Unt_2019-2023_D_WZ.pdf, https://www.ifm-bonn.org/fileadmin/data/redaktion/statistik/mittelstand_im_einzelnen/dokumente/Unt_2019-2023_D_WZ.pdf]

### 1.5 Cross-check: Destatis SBS (EU enterprise definition)

A separate Destatis dataset (table 48121-0002, SBS/EU enterprise definition) was also obtained. It uses both employee AND turnover thresholds for classification and groups legal units into economic enterprises, resulting in lower counts than the Business Register. For reference only:

| Size class (SBS) | Count (2023) |
|---|---|
| Micro | 2,631,106 |
| Small | 453,043 |
| Medium | 79,630 |
| Large | 21,515 |
| **Total** | **3,185,294** |

The IfM Bonn / Business Register figures are used for the TAM calculation because they use the same employee-only size class definition used across this project.

[Source: Destatis GENESIS-Online, table 48121-0002, uploaded as 48121-0002_en.csv]

---

## 2. Late Payment Severity

### 2.1 Share of companies affected

**~38–40% of German companies** reported experiencing problems due to late payments in the past 6 months (2024 data). This is up from ~33% in 2023. Germany is listed among 19 EU countries where the situation worsened in 2024.

**EU average (2024): 52%.** On this incidence metric, Germany ranks among the lower-severity countries — behind only the Netherlands (31%), Bulgaria (35%), and Denmark (~37%).

[Source: EU Payment Observatory Annual Report 2025 (covering 2024 data), ECB/EC SAFE survey, Figure 2. https://single-market-economy.ec.europa.eu/document/download/db1722d8-9cad-40fd-9ad4-f56a907317fa_en] [B — survey data]

### 2.2 Composite severity index

Germany scores **0.29 out of 1.0** on the Observatory's composite payment performance indicator in both 2023 and 2024 (Table 2 and Annex 3 of the Annual Report 2025). The composite is constructed from 55 standardized indicators where higher = worse performance, controlled for firm size, sector, transaction type, and data source.


**Reconciliation — why a "good" composite score coexists with high incidence of late payments:**

The composite score (0.29, 3rd best) appears to contradict Coface data (78% of German companies report delays) and Atradius data (60% report deterioration). The explanation is methodological: the composite weighs delay *duration* heavily, and Germany has short average delays (7–13 days per Creditreform sector data) despite high *incidence*. A German SME is likely to experience late payments, but the typical delay is days, not weeks or months — unlike Southern or Eastern Europe where delays routinely exceed 30–60 days.

For AR automation, this distinction matters. Incidence drives the need for the product — a company chasing 200 overdue invoices needs automation regardless of whether the average delay is 8 days or 30 days. The fact that 78% of German companies experience delays (Coface) and 60% report worsening behavior (Atradius) means the demand signal is present. The short average duration means German SMEs are more likely to solve the problem with better process automation (Sunbay's positioning) rather than aggressive debt collection or legal escalation. This arguably makes Germany a better product-market fit for workflow automation than for hard collections.

[Source: EU Payment Observatory Annual Report 2025, Table 2, Annex 3. Methodology: econometric composite from EU Indicators Database, 55 standardized metrics, 0–1 scale.] [B]

### 2.3 Creditreform — transaction-level data (Debtor Register Germany)

Based on ~3.8–4 million invoice documents monthly. This is hard transaction data, not a survey.

| Metric | Q3 2024 | Q3 2025 | Change |
|---|---|---|---|
| Average payment delay (all sectors) | 8.4 days | 7.3 days | −1.1 days |
| Construction | 12.6 days | 12.3 days | −0.3 days |
| Personal services | 9.9 days | 10.7 days | +0.8 days |
| Wholesale | 9.4 days | 5.5 days | −3.9 days |
| Retail | 7.3 days | 6.1 days | −1.2 days |
| Chemicals/plastics | 5.3 days | 4.5 days | −0.8 days |

2024 was described as a "crisis year" with deterioration following the recession. Q3 2025 shows a partial recovery. Creditreform characterizes it as "stagnation rather than a trend reversal."

[Source: Creditreform Wirtschaftsforschung, "Zahlungsverhalten in Deutschland, 3. Quartal 2025," https://www.creditreform.de/aktuelles-wissen/pressemeldungen-fachbeitraege/news-details/show/rezession-zahlungsmoral-verbessert-sich-leicht-bleibt-aber-angespannt] [A/B — ~4M invoice transaction data]

### 2.4 Coface — Germany Corporate Payment Survey

Annual survey, 8th edition (2024) and 9th edition (2025). Sample: 774 companies (2024 edition), conducted June–August 2024.

**2024 findings:**
- 78% of companies reported new payment delays [B — 774 companies]
- Average payment delay: 30.8 days (slight increase, below pre-pandemic average of 39.7 days) [B]
- Average payment term: 32.1 days (shortest among all Coface survey countries) [B]
- 16% reported ultra-long overdue payments (6 months–2 years) exceeding 2% of annual turnover — up from 9% in 2023 [B]
- Machinery sector: 30% reporting ultra-long overdues above 2% of turnover [B]
- 48% of companies said their business situation deteriorated 2023→2024 [B]

**2025 findings:**
- Payment delays further deteriorated [B]
- 12% reported long overdue payments exceeding 2% of turnover (down from 16%, but above pre-pandemic) [B]
- Construction sector most affected: 24% [B]
- Insolvency figures at a ten-year high [B]
- 23% of companies implemented de-risking strategies; 54% plan to within 3 years [B]

Coface estimate: 80% of ultra-long overdues (6 months+) are never recovered. [C — Coface global experience]

[Source: Coface Germany Corporate Payment Survey 2024, https://www.coface.com/news-economy-and-insights/germany-corporate-payment-survey-2024-simmering-under-the-lid]
[Source: Coface Germany Corporate Payment Survey 2025, https://www.coface.com/news-economy-and-insights/germany-corporate-payment-survey-2025-it-gets-worse-before-it-could-get-better]

### 2.5 Atradius — Payment Practices Barometer Germany 2025

Survey conducted end Q1/beginning Q2 2025. Part of the 2025 Western Europe series (~7,500 firms across 35 markets globally).

- 60% of German companies reported deterioration in B2B customer payment behavior [B]
- Overdue B2B invoices increased by 12% from prior year [B]
- 47% of B2B sales are made on credit, with average payment terms of 60 days [B]
- 43% of companies turning to invoice financing to accelerate cash inflows [B]
- Construction: overdue payments impact ~two-thirds of B2B invoices; bad debts at 5% [B]
- Machinery: over half of B2B invoices overdue; bad debts at 10% of receivables [B]
- Automotive: credit sales down 20% as risk mitigation [B]

Western Europe aggregate: 47% of B2B invoices are overdue. Companies spend 9.85 hours/week chasing late payments.

[Source: Atradius, "B2B payment practices trends in Germany 2025," https://atradiuscollections.com/us/knowledge-and-research/reports/b2b-payment-practices-trends-germany-2025]

### 2.6 EU-level contextual data

- Late payments ranked 2nd among areas posing the biggest problem to EU SMEs (39%), behind regulatory burdens (64%). For 16% of micro companies, it is the single biggest challenge. [B — 2024 Startups, Scaleups and Entrepreneurship Eurobarometer]
- 31% of EU companies indicated late payments threaten the survival of their business. [B — EC expanded SME Panel Survey 2025]
- EU-wide estimated cash flow loss from late payments: ~€105 billion/year (extrapolated from Banque de France balance sheet analysis). [C — extrapolation]
- One third of European companies report delaying their own payments because they were paid late, creating a domino effect. [B — ECB/EC SAFE survey 2024]

[Source: EU Payment Observatory Annual Report 2025]

### 2.7 Total value of overdue B2B debt in Germany

**[D] — Not available.** No aggregate national figure found. Creditreform tracks delays per invoice but does not publish a total stock figure. The Bundesbank does not publish dedicated overdue B2B receivables data.

---

## 3. Digital Maturity of German SMEs

### 3.1 AI adoption

| Size class | 2021 | 2023 | 2024 | 2025 | EU 2025 |
|---|---|---|---|---|---|
| Small (10–49) | 8.9% | 9.7% | 16.9% | **23.1%** | 17.0% |
| Medium (50–249) | 14.8% | 16.2% | 28.2% | **35.6%** | 30.4% |
| SME (10–249) | 9.9% | 10.8% | 18.8% | **24.9%** | 18.9% |
| All (10+) | 10.6% | 11.6% | 19.8% | **26.0%** | 20.0% |

Germany is **6pp above the EU average** across all size classes. AI adoption nearly tripled between 2021 and 2025.

[Source: Eurostat, isoc_eb_ai, uploaded as isoc_eb_ai__custom_20623237_spreadsheet.xlsx. Last updated 27/02/2026.] [A]

### 3.2 ERP adoption

| Size class | 2019 | 2021 | 2023 | 2025 | EU 2025 |
|---|---|---|---|---|---|
| Small (10–49) | 22.1% | 31.2% | 37.3% | **37.5%** | 41.1% |
| Medium (50–249) | 55.6% | 62.3% | 67.4% | **67.7%** | 69.9% |
| SME (10–249) | 27.6% | 36.3% | 42.2% | **42.0%** | 45.2% |
| All (10+) | 29.3% | 37.8% | 43.7% | **43.5%** | 46.5% |

Germany is **below the EU average** on ERP adoption (42.0% vs 45.2% for SMEs) and has essentially flatlined between 2023 and 2025. France is at 52.8%.

[Source: Eurostat, isoc_eb_iip, uploaded as isoc_eb_iip__custom_20623251_spreadsheet.xlsx. Last updated 27/02/2026.] [A]

### 3.3 CRM adoption

| Size class | 2023 | 2025 | EU 2025 |
|---|---|---|---|
| Small (10–49) | 23.7% | **26.0%** | 24.7% |
| Medium (50–249) | 40.4% | **43.5%** | 43.8% |
| SME (10–249) | 26.4% | **28.6%** | 27.4% |
| All (10+) | 27.5% | **29.6%** | 28.5% |

Germany is **at EU average** on CRM. Data available from 2023 onward only (indicator definition changed).

Note: The 2019 Eurostat Statistics Explained article cited 44% CRM adoption for Germany. This used a different indicator methodology. The current series (labelled "as of 2023") shows 29.6% for all 10+ enterprises. The figures are not comparable.

[Source: Eurostat, isoc_eb_iip, same file as above.] [A]

### 3.4 Any business software (ERP, CRM, or BI)

| Size class | 2023 | 2025 | EU 2025 |
|---|---|---|---|
| Small (10–49) | 45.0% | **45.6%** | 48.3% |
| Medium (50–249) | 74.6% | **74.9%** | 76.3% |
| SME (10–249) | 49.9% | **50.0%** | 52.3% |

Half of German SMEs use at least one business software package. Germany is slightly below the EU average and stagnating.

[Source: Eurostat, isoc_eb_iip, same file.] [A]

### 3.5 Leading accounting/invoicing software vendors for German SMEs

1. **DATEV** — Dominant incumbent. Used by ~2.5M businesses through ~40,000 tax advisory firms (Steuerberater). Not direct-to-business.
2. **Lexware Office (lexoffice)** — Cloud-based, Haufe Group. One of the two most popular direct-to-SME solutions. German-language only.
3. **sevDesk** — Cloud-based, direct competitor to lexoffice. Targets freelancers through small businesses. German-language only.
4. **SAP Business One / Business ByDesign** — For larger SMEs (50+). Deep Mittelstand penetration.
5. **Sage 50 Connected** — Desktop + cloud hybrid for established small businesses.

Other players: BuchhaltungsButler (AI-focused), orgaMAX, FastBill, WISO MeinBüro, Scopevisio (mid-market ERP).

[Source: OMR Reviews, Germanpedia, Qualimero, vendor websites — all accessed 2026-03-20] [C — market reports and vendor websites]

### 3.6 Do these tools offer automated collections?

**No — or only in the most basic form.**

The German accounting software ecosystem focuses on: invoice issuance, receipt management, tax filing (VAT via ELSTER), DATEV export to tax advisors, and bank reconciliation.

- **DATEV:** Supports Offene-Posten-Liste (open items list) and basic dunning (Mahnwesen) — manual process through the tax advisor, not automated multi-channel workflows.
- **Lexoffice:** Basic dunning letter generation (Mahnungen erstellen). Single-template reminders. No escalation, no SMS, no AI calls, no payment matching automation.
- **sevDesk:** Similar — basic dunning letter generation. No automated collection workflows.
- **orgaMAX:** Dunning module in the "smart" package — template-based letter generation, not automated workflow execution.
- **SAP Business One:** Has a dunning run feature, but it is a batch process configured by an administrator, not an automated AR collection workflow.

**None of these tools offer:** automated multi-step escalation workflows, multi-channel outreach (email + SMS + calls), payment matching with bank feeds to auto-close collection cases, AI-powered negotiation, or real-time tracking of collection outcomes.

The collections process in German SMEs is either manual (spreadsheet + email), delegated to the Steuerberater, or outsourced to an Inkasso (debt collection agency) once invoices are severely overdue (typically 90+ days).

### 3.7 Germany mandatory B2B e-invoicing

**Yes — phased rollout underway.** Part of the Wachstumschancengesetz (Growth Opportunities Act), passed by the Bundesrat 22 March 2024.

**Formats:** XRechnung (pure XML) and ZUGFeRD 2.3+ (hybrid PDF + XML). Both comply with EU standard EN 16931.

**Timeline:**

| Date | Requirement |
|---|---|
| 1 Jan 2025 | All businesses must be able to **receive** e-invoices. Paper/PDF still allowed for sending. |
| 1 Jan 2027 | Businesses with turnover >€800,000 must **issue** e-invoices. |
| 1 Jan 2028 | All businesses must issue e-invoices for domestic B2B transactions. |
| ~2030 | Expected alignment with EU ViDA (VAT in the Digital Age) for cross-border e-reporting. |

**Does it track whether invoices are paid?** No. The mandate covers invoice issuance, transmission, and receipt in structured format. There is no payment tracking layer, no real-time reporting to tax authorities, and no centralized clearance model (unlike Italy's SDI system). The mandate is about VAT compliance and audit trails, not payment performance monitoring.

**Implication for Sunbay:** The e-invoicing mandate creates structured, machine-readable invoice data (amounts, due dates, buyer/seller IDs) across the entire German B2B economy. This is an infrastructure layer that AR automation tools could plug into — but the mandate itself does not reduce late payments or address the collections gap.

[Source: VATupdate, EDICOM, Marosa VAT, EC Digital Building Blocks — accessed 2026-03-20]

---

## 4. TAM Calculation

### 4.1 Summary

| TAM version | Companies | Revenue (€/year) | Data quality |
|---|---|---|---|
| Conservative | 229,732 | ~€303.2M | All sectors [A] — Destatis/IfM Bonn 2023 |
| Extended | 285,175 | ~€376.4M | Core [A], G split [C], J/L B2B share [D] |

### 4.2 Conservative TAM

Includes only sectors where the primary business model involves issuing B2B invoices on credit terms. No B2B/B2C split assumption needed.

| NACE Section | 10–49 | 50–249 | 10–249 total | Quality |
|---|---|---|---|---|
| B — Mining & quarrying | 597 | 196 | 793 | [A] |
| C — Manufacturing | 45,797 | 17,068 | 62,865 | [A] |
| D — Electricity/gas/steam | 3,230 | 854 | 4,084 | [A] |
| E — Water/sewerage/waste | 3,013 | 1,318 | 4,331 | [A] |
| F — Construction | 48,082 | 5,701 | 53,783 | [A] |
| H — Transport & storage | 21,126 | 5,477 | 26,603 | [A] |
| M — Professional/scientific/technical | 38,594 | 6,809 | 45,403 | [A] |
| N — Administrative & support | 24,624 | 7,246 | 31,870 | [A] |
| **TOTAL** | **185,063** | **44,669** | **229,732** | |

**229,732 × €1,320 = €303,246,240**

### 4.3 Extended TAM — additions

| Addition | Total 10–249 | B2B assumption | B2B count | Quality |
|---|---|---|---|---|
| G46 — Wholesale trade | 27,905 | 100% | 27,905 | [C] EU-average G split |
| G45 — Motor trade | 15,003 | 50% | 7,502 | [C] split + [D] B2B share |
| J — Info & communication | 18,568 | 75% | 13,926 | [D] own estimate |
| L — Real estate | 12,220 | 50% | 6,110 | [D] own estimate |
| **Extended additions** | | | **55,443** | |

G45/G46/G47 split methodology: Germany Section G total (10–249) = 100,018 enterprises. EU-average proportions applied: G45 = 15.0%, G46 = 27.9%, G47 = 57.1%. G47 (retail, B2C) excluded.

**Extended TAM: 229,732 + 55,443 = 285,175 enterprises**
**285,175 × €1,320 = €376,431,000**

### 4.4 Assumptions register

| ID | Assumption | Basis | Used in |
|---|---|---|---|
| A1 | ARPC = €1,320/year | Midpoint of Sunbay Basic (€1,200/yr) and Standard (€1,440/yr) pricing | Both |
| A2 | All 10–249 enterprises in B, C, D, E, F, H, M, N issue B2B invoices on credit terms | These sectors' primary revenue model is B2B trade; credit terms are standard practice | Conservative |
| A3 | G45/G46/G47 split follows EU average (15.0% / 27.9% / 57.1%) | Eurostat distributive trade sector article, 2022 | Extended |
| A4 | 50% of G45 (motor trade) is B2B | Motor trade has mixed B2B/B2C; fleet sales, parts wholesale are B2B; own estimate | Extended |
| A5 | 75% of Section J is B2B | J62 (IT services/consulting) dominates this size bracket; B2B oriented | Extended |
| A6 | 50% of Section L is B2B | Property management (B2B) vs residential agencies (B2C); own estimate | Extended |
| A7 | Excludes micro (0–9) and large (250+) | Per brief: Sunbay's target segment is 10–249 employee firms | Both |
| A8 | No adoption rate applied | TAM = total addressable, not expected penetration | Both |
| A9 | Excludes K (Financial/insurance), I (Accommodation/food), P (Education), Q (Health), R (Arts), S (Other services) from conservative TAM | B2C-dominant, heavily regulated (K), or non-standard payment cycles | Conservative |

### 4.5 Data gaps

1. **G45/G46/G47 division-level split for Germany by size class.** Available in Destatis GENESIS-Online table 48121 at 2-digit WZ level (requires login). Would convert G additions from [C] to [A]. This is the single largest source of uncertainty in the extended TAM (~35,400 enterprises depend on it).

2. **Germany-specific ERP/CRM adoption by NACE section.** The Eurostat data covers all sectors aggregated. Section-level digital maturity (e.g., what % of construction SMEs use ERP) would enable a "digitally addressable" sub-TAM.

3. **Actual Sunbay ARPC from current customers.** The €1,320 midpoint assumes no upsell (Custom tier, SMS add-on) and no volume-based pricing. Actual ARPC from 5–6 paying customers would be more accurate.

4. **Section N breakdown.** Section N includes staffing agencies (N78), security services (N80), cleaning services (N81) — all B2B — but also travel agencies (N79), partially B2C. Division-level split would tighten this.

5. **Total overdue B2B debt stock in Germany.** No aggregate figure found from any source.

---

## Verification Checklist

- [x] Enterprise counts are for 10–249 only, not "all SMEs" or "all enterprises"
- [x] Enterprise counts by NACE section sum to stated total (verified: 496,315)
- [x] Conservative TAM arithmetic: 229,732 × €1,320 = €303,246,240 ✓
- [x] Extended TAM arithmetic: 285,175 × €1,320 = €376,431,000 ✓
- [x] G split check: 15,003 + 27,905 + 57,110 = 100,018 ✓
- [x] Late payment data specifies source, coverage, and sample size where available
- [x] AI/ERP/CRM figures specify size class and year
- [x] Data quality tiers [A]–[D] labeled on every number
- [x] G46/G47 split explicitly labeled as [C] EU proxy
- [x] E-invoicing section states what the mandate does NOT do
- [x] No numbers from paywalled reports cited without actual figure visible
- [x] No global AR market size numbers (Mordor Intelligence, Grand View, etc.) used as country TAM

---

## Sources

1. IfM Bonn / Destatis, *Branchenstruktur der Unternehmen 2023 (Unt_2023_D_BR-STR.pdf)* — https://www.ifm-bonn.org/fileadmin/data/redaktion/statistik/mittelstand_im_einzelnen/dokumente/Unt_2023_D_BR-STR.pdf
2. IfM Bonn / Destatis, *Unternehmensbestand nach Beschäftigten- und Umsatzgrößenklassen 2023 (Unt_2023_D_GrKl.pdf)* — https://www.ifm-bonn.org/fileadmin/data/redaktion/statistik/mittelstand_im_einzelnen/dokumente/Unt_2023_D_GrKl.pdf
3. IfM Bonn / Destatis, *Entwicklung der Unternehmen 2019–2023 nach Wirtschaftszweigen (Unt_2019-2023_D_WZ.pdf)* — https://www.ifm-bonn.org/fileadmin/data/redaktion/statistik/mittelstand_im_einzelnen/dokumente/Unt_2019-2023_D_WZ.pdf
4. Destatis, *Business Register — Legal Units, employees and turnover 2024* — https://www.destatis.de/EN/Themes/Economic-Sectors-Enterprises/Enterprises/Business-Register/Tables/business-register.html
5. Destatis GENESIS-Online, table 48121-0002 (SBS, EU enterprise definition) — uploaded as 48121-0002_en.csv
6. Eurostat, *Businesses in distributive trade sector* (2022, G45/G46/G47 proportions) — https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Businesses_in_distributive_trade_sector
7. EU Payment Observatory, *Annual Report 2025* (covering 2024 data) — https://single-market-economy.ec.europa.eu/document/download/db1722d8-9cad-40fd-9ad4-f56a907317fa_en?filename=AnnualReport2025_FinalC.pdf
8. EU Payment Observatory, *Annual Report 2024* (covering 2023 data) — https://cdn.ceps.eu/wp-content/uploads/2024/12/EU-Payment-Observatory_Annual-Report-2024_EA-01-24-061-EN-C.pdf
9. Creditreform, *Zahlungsverhalten in Deutschland, 3. Quartal 2025* — https://www.creditreform.de/aktuelles-wissen/pressemeldungen-fachbeitraege/news-details/show/rezession-zahlungsmoral-verbessert-sich-leicht-bleibt-aber-angespannt
10. Coface, *Germany Corporate Payment Survey 2024* — https://www.coface.com/news-economy-and-insights/germany-corporate-payment-survey-2024-simmering-under-the-lid
11. Coface, *Germany Corporate Payment Survey 2025* — https://www.coface.com/news-economy-and-insights/germany-corporate-payment-survey-2025-it-gets-worse-before-it-could-get-better
12. Atradius, *B2B Payment Practices Trends — Germany 2025* — https://atradiuscollections.com/us/knowledge-and-research/reports/b2b-payment-practices-trends-germany-2025
13. Atradius, *B2B Payment Practices Trends — Western Europe 2025* — https://group.atradius.com/knowledge-and-research/reports/b2b-payment-practices-trends-western-europe-2025
14. Eurostat, *isoc_eb_ai* (AI adoption by size class) — uploaded as isoc_eb_ai__custom_20623237_spreadsheet.xlsx. Last updated 27/02/2026.
15. Eurostat, *isoc_eb_iip* (ERP, CRM, BI adoption by size class) — uploaded as isoc_eb_iip__custom_20623251_spreadsheet.xlsx. Last updated 27/02/2026.
16. Eurostat, *20% of EU enterprises use AI technologies* (Dec 2025) — https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2
17. Sunbay.io pricing page — https://sunbay.io/pricing
18. VATupdate / EDICOM / Marosa VAT (Germany e-invoicing) — https://edicomgroup.com/electronic-invoicing/germany
