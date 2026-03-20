---
topic: Market Sizing — EU-27 B2B AR Collections Automation
date: 2026-03-20
sources_used: 14
user_inputs_integrated: yes
confidence_notes: >
  Enterprise counts are [A] Eurostat hard data (2023 final). Late payment incidence is [B] survey data
  (ECB/EC SAFE, Intrum EPR, Cribis/D&B). Digital maturity figures are [A] Eurostat mandatory ICT survey (2025).
  TAM calculation uses [A] enterprise counts with [C] and [D] proxy assumptions for sector B2B splits.
  G division split (G45/G46/G47) is estimated from Eurostat sectoral article ratios, not queried at size-class level.
  ARPC is based on Sunbay's published pricing, not realized revenue data.
---

# Market Sizing — EU-27

## 1. Enterprise Count: EU-27 Non-Financial Enterprises with 10–249 Employees

### 1.1 Aggregate Totals

| Size class | 2021 | 2022 | 2023 | 2024 (p) |
|---|---|---|---|---|
| 10–19 employees | 1,008,949 | 1,039,081 | 1,023,841 | 1,020,383 |
| 20–49 employees | 517,649 | 525,987 | 547,973 | 549,564 |
| **10–49 total** | **1,526,598** | **1,565,068** | **1,571,814** | **1,569,947** |
| 50–249 employees | 240,000 | 243,161 | 248,817 | 250,670 |
| **10–249 total** | **~1,766,598** | **~1,808,229** | **~1,820,631** | **~1,820,617** |

Quality: [A] Eurostat sbs_sc_ovw, business economy aggregate (NACE B–N, P–R, S95/S96). 2024 is provisional.
[Source: Eurostat sbs_sc_ovw, extracted 2026-03-20]

YoY change: +2.4% (2021→2022), +0.7% (2022→2023), ~0.0% (2023→2024p). The 10–249 segment is stable at ~1.82M enterprises.

### 1.2 Breakdown by NACE Section (2023)

| NACE | Section | 10–19 | 20–49 | 50–249 | 10–249 | Quality |
|---|---|---|---|---|---|---|
| B | Mining & quarrying | 1,600 | 1,300 | 643 | 3,543 | [A] |
| C | Manufacturing | 147,870 | 107,703 | 63,136 | 318,709 | [A] |
| D | Electricity/gas/steam/AC | 2,090 | 1,620 | 1,300 | 5,010 | [A/C] |
| E | Water/sewerage/waste | 6,219 | 4,974 | 3,613 | 14,806 | [A] |
| F | Construction | 147,152 | 63,691 | 20,000 | 230,843 | [A] |
| G | Trade & vehicle repair | 210,131 | 104,312 | 42,607 | 357,050 | [A] |
| H | Transport & storage | 57,374 | 36,795 | 16,536 | 110,705 | [A] |
| I | Accommodation & food | 141,172 | 57,991 | 16,607 | 215,770 | [A] |
| J | Info & communication | 32,741 | 22,306 | 12,865 | 67,912 | [A] |
| K | Financial & insurance | 9,931 | 5,701 | 4,500 | 20,132 | [A/C] |
| L | Real estate | 15,575 | 7,100 | 2,811 | 25,486 | [A] |
| M | Professional/scientific/tech | 81,346 | 39,160 | 15,236 | 135,742 | [A] |
| N | Admin & support services | 53,755 | 36,546 | 22,459 | 112,760 | [A] |
| P | Education | 16,000 | 9,391 | 4,500 | 29,891 | [A] |
| Q | Health & social work | 67,887 | 34,965 | 16,857 | 119,709 | [A] |
| R | Arts/entertainment/recreation | 14,754 | 8,700 | 3,420 | 26,874 | [A] |
| **SUM** | **Sections B–R** | **1,005,597** | **542,255** | **247,090** | **1,794,942** | |
| S95+S96 | Repair computers + other personal | — | — | — | ~25,689 | [D] residual |
| **TOTAL** | **Business economy** | **1,023,841** | **547,973** | **248,817** | **1,820,631** | [A] |

Notes:
- D (50–249) and K (50–249) are confidential in 2023. D estimated from 2022 Eurostat estimate (1,300e). K interpolated from 2021 (4,435) and 2024p (4,621).
- S95/S96 not separately queried. Residual = aggregate minus sum of sections.
- Section R 2022 data was partly suppressed, causing apparent YoY volatility (not real growth).

[Source: Eurostat sbs_sc_ovw, custom query, EU-27, 2023]

---

## 2. Late Payment Severity: Why This Market Exists

### 2.1 Headline Figures

| Metric | Value | Year | Quality | Source |
|---|---|---|---|---|
| EU companies reporting late payment problems | 52% | 2024 | [B] | ECB/EC SAFE survey, via EU Payment Observatory Annual Report 2025 |
| Trend | 42% (2021) → 43% (2022) → 47% (2023) → 52% (2024) | 2021–24 | [B] | Same |
| Member States where >50% of companies report issues | 17 out of 27 | 2024 | [B] | Same |
| Poland — % companies affected | 72% (highest in EU) | 2024 | [B] | Same |
| B2B invoices overdue (Western Europe) | 47% | 2025 | [B] | Atradius PPB Western Europe 2025, ~6,500 companies across 31 markets |
| Bad debts (% of B2B invoices, Western Europe) | 6% | 2025 | [B] | Same |
| Average B2B payment period (EU, supplier-reported) | 60.3 days | 2024 | [B] | Intrum EPR, via EU Payment Observatory 2025 |
| Average G2B payment period | 69.8 days | 2024 | [B] | Same |
| Average B2B payment terms | 43 days | 2024 | [B] | Same |
| Companies delaying own payments due to being paid late | 31% | 2024 | [B] | ECB/EC SAFE |
| Companies accepting longer terms than comfortable | 56% | 2024 | [B] | Intrum EPR |
| Hours/week spent chasing late payments (all companies) | 9.85 | 2024 | [B] | Intrum EPR (SMEs: 9.82, Large: 9.92) |
| Revenue typically paid late | 11% | 2025 | [B] | Intrum EPR 2025 |

### 2.2 Cash Flow Impact

| Metric | Value | Quality | Source |
|---|---|---|---|
| EU SME/ETI annual cash flow loss from late payments | ~€104.9B | [C] | EU Payment Observatory 2025 estimate, extrapolated from Banque de France 2024 data via GDP ratio |
| Of which: SMEs | ~€55.6B | [C] | Same |
| Of which: micro-enterprises | ~€24.7B | [C] | Same |
| Aggregate economic cost of late payments in EU | ~€65B | [C] | Extrapolated from UK Dept for Business & Trade 2025 study |
| Outstanding receivables (European companies) | €10.5T+ | [B] | Intrum EPR 2024 (self-reported best estimates, 9,255 executives) |

Note: The €104.9B and €65B figures are the Observatory's own extrapolations. They state these are "indicative estimates illustrating the magnitude of the issue, rather than precise measurements." The French underlying data (€17B) is [A] Banque de France balance sheet data. The scaling to EU via GDP ratio is the [C] component.

### 2.3 Consequences Reported by Companies

| Consequence | % reporting | Source |
|---|---|---|
| Reduces investment and growth | 40% | EC Survey, via EU Payment Observatory 2025 |
| Forces use of additional bank loans/financing | 39% | Same |
| Threatens survival of business | 31% | Same |
| Discourages public procurement participation | 19% | Same |
| Forces staff reduction / hiring freeze | 13% | Same |
| Does not affect business | 17% | Same |

### 2.4 Size-Class Dynamics

- Large companies pay on time least frequently: worst payer in 16/20 Member States. [B] Cribis/D&B 2024.
- Micro companies pay most punctually: best payer in 13/20 Member States. [B] Same.
- Late payments as "biggest problem" by size: Micro 16%, Small 15%, Medium 12%, Large (500+) 11%. [B] Startups, Scaleups and Entrepreneurship Eurobarometer 2024.
- The pattern is consistent: smaller companies pay better but suffer more from late payments due to lower cash reserves and weaker bargaining power.

### 2.5 Sector Patterns

- Payment performance varies more between countries than between sectors within a country. Country payment culture is the dominant factor. [B] EU Payment Observatory 2025.
- Transport is the worst-performing sector in 9/21 Member States. [B] Cribis/D&B.
- Agriculture and Retail Trade are worst in 4 Member States each. [B] Same.
- Construction is most variable: best in 6 countries, worst in 3. [B] Same.
- Sectors supporting payment term caps (% in favor): Construction 91%, Transport 90%, Professional services 86%, Manufacturing 82%, Wholesale/Retail 59%. [B] EC Survey 2025.

### 2.6 Regulatory Context

- 37% of companies consider sanctions against late payments ineffective. [B] EC Survey 2025.
- 33% say current rules are not systematically enforced. [B] Same.
- EU Late Payments Regulation proposed (Sep 2023): would cap B2B payment terms at 30 days. 41% of surveyed companies support this; 23% support with sector-specific flexibility. [B] EC Survey 2025.

---

## 3. Digital Maturity of the Target Segment

### 3.1 Business Software Adoption (EU-27, 2025)

| Software | 10–49 | 50–249 | 10–249 | Quality |
|---|---|---|---|---|
| ERP | 41.1% | 69.9% | 45.2% | [A] |
| CRM | 24.7% | 43.8% | 27.4% | [A] |
| BI | 11.5% | 34.3% | 14.7% | [A] |
| Any (ERP/CRM/BI) | 48.3% | 76.3% | 52.3% | [A] |
| **None of the above** | **51.7%** | **23.7%** | **47.7%** | [A] (derived) |

[Source: Eurostat isoc_eb_iip, ICT Usage Survey 2025]

ERP time series (10–49): 17.5% (2010) → 28.4% (2014) → 30.4% (2019) → 38.0% (2023) → 41.1% (2025).

Key observation: **47.7% of EU enterprises with 10–249 employees use no ERP, CRM, or BI software at all.** These enterprises manage financial operations with spreadsheets, basic accounting tools, or manual processes. This is Sunbay's primary addressable population for a "replace spreadsheets" sales motion.

### 3.2 AI Adoption (EU-27)

| Size class | 2021 | 2023 | 2024 | 2025 |
|---|---|---|---|---|
| 10–49 (small) | 6.1% | 6.4% | 11.2% | 17.0% |
| 50–249 (medium) | 12.6% | 13.1% | 21.0% | 30.4% |
| 10–249 (SME) | 7.1% | 7.4% | 12.6% | 18.9% |
| 10+ (all) | 7.7% | 8.1% | 13.5% | 20.0% |

Quality: [A] Eurostat isoc_eb_ai, ICT Usage Survey.
[Source: Eurostat isoc_eb_ai__custom_20623237, extracted 2026-03-20]

Poland is second-lowest in the EU at 8.4% (2025), just above Romania (5.2%). Denmark leads at 42.0%. [A] Eurostat.

### 3.3 Cloud Computing (EU-27, 2025)

| Size class | 2023 | 2025 |
|---|---|---|
| Small (10–49) | 41.7% | 49.3% |
| Medium (50–249) | 59.1% | 66.8% |
| Large (250+) | 77.6% | 84.7% |
| All (10+) | 45.2% | 52.7% |

Quality: [A] Eurostat isoc_cicce_use, published Feb 2026.

Among cloud users: 96.4% use at least one SaaS product. Cloud-based ERP = 30.1% of cloud users, cloud-based CRM = 27.9%. [A] Eurostat 2025.

### 3.4 EU B2B E-Invoicing — ViDA Directive

The EU adopted the ViDA (VAT in the Digital Age) directive package in March 2025:

- **April 2025:** Entered into force. Member States can mandate domestic B2B e-invoicing without prior EU authorization.
- **July 2030:** Mandatory e-invoicing and Digital Reporting Requirements (DRR) for all intra-EU B2B transactions. E-invoices must comply with EN 16931.
- **January 2035:** Pre-existing domestic systems (Italy SDI, Poland KSeF, Germany XRechnung, France PPF) must harmonize with EU standard.

Several Member States are ahead of ViDA: Poland (KSeF, mandatory Feb 2026 for large taxpayers), Belgium (mandatory Jan 2026), Germany (phased 2025–2028), France (phased 2026–2027), Italy (SDI, operational since 2019).

**Critical distinction:** ViDA mandates e-invoice **issuance and reporting to tax authorities**. It does NOT track whether invoices are paid, does not automate collections, and does not address the "getting paid" problem. Sunbay's value proposition starts where ViDA ends — after the invoice is issued.

[Sources: Council Directive (EU) 2025/516; EDICOM; VATupdate; Norton Rose Fulbright; vatcalc.com]

---

## 4. TAM Calculation

### 4.1 Conservative TAM

Includes only sectors whose primary business model involves issuing B2B invoices on credit terms. No B2B/B2C split assumption needed.

| NACE | Section | Enterprises (10–249) | Quality |
|---|---|---|---|
| B | Mining & quarrying | 3,543 | [A] |
| C | Manufacturing | 318,709 | [A] |
| D | Electricity/gas/steam/AC | 5,010 | [A/C] |
| E | Water/sewerage/waste | 14,806 | [A] |
| F | Construction | 230,843 | [A] |
| H | Transport & storage | 110,705 | [A] |
| M | Professional/scientific/tech | 135,742 | [A] |
| N | Admin & support services | 112,760 | [A] |
| **TOTAL** | | **932,118** | |
| **× €1,320 ARPC** | | **€1,230,395,760** | |

### 4.2 Extended TAM

Adds estimated B2B portions of mixed sectors.

| Sector | Total (10–249) | B2B estimate | Method |
|---|---|---|---|
| G46 Wholesale (100%) | 99,617 | 99,617 | [C] G46 = 27.9% of Section G. Ratio from Eurostat "Businesses in distributive trade sector" article (2022). |
| G45 Motor trade (50% B2B) | 53,558 | 26,779 | [C] G45 = 15% of G + [D] 50% B2B assumption |
| J Info & communication (75% B2B) | 67,912 | 50,934 | [D] J62 IT services dominates this size bracket; predominantly B2B |
| L Real estate (50% B2B) | 25,486 | 12,743 | [D] Property management B2B; agencies mixed |
| **Additions total** | | **190,073** | |
| **Extended TAM** | | **1,122,191** | |
| **× €1,320 ARPC** | | **€1,481,292,120** | |

### 4.3 Summary

| TAM version | Companies | Revenue (€/year) | Data quality |
|---|---|---|---|
| **Conservative** | **932,118** | **€1.23B** | 7/8 sectors [A] Eurostat; 1 sector [A/C] |
| **Extended** | **1,122,191** | **€1.48B** | Conservative base + [C] proxy ratios and [D] B2B share estimates |

### 4.4 Excluded Sectors

| Sector | Enterprises (10–249) | Reason for exclusion |
|---|---|---|
| G47 Retail (est.) | ~203,876 | B2C |
| G45 50% | ~26,779 | B2C portion of motor trade |
| I Accommodation & food | 215,770 | Predominantly B2C |
| J 25% | ~16,978 | B2C portion (broadcasting, media) |
| K Financial & insurance | 20,132 | Own payment infrastructure |
| L 50% | ~12,743 | B2C portion (estate agencies) |
| P Education | 29,891 | Mostly public/nonprofit payers |
| Q Health & social work | 119,709 | Mostly public payer systems |
| R Arts/entertainment | 26,874 | Mixed, mostly B2C |
| S95+S96 | ~25,689 | Personal services, repair |

### 4.5 Assumptions Register

| ID | Assumption | Basis | Used in |
|---|---|---|---|
| A1 | ARPC = €1,320/year | Sunbay pricing: Basic €1,200/yr, Standard €1,440/yr. Midpoint. | Both |
| A2 | Target = 10–249 employees | Pitch deck personas: 10–50 and 50–200 FTE | Both |
| A3 | 2023 enterprise counts | Latest final Eurostat data | Both |
| A4 | D (50–249) ≈ 1,300 | Confidential in 2023; from 2022 Eurostat estimate | Conservative |
| A5 | G division split: G45=15%, G46=27.9%, G47=57.1% | Eurostat sectoral article, 2022. Applied to 10–249 total — actual split by size class not available. | Extended |
| A6 | G45 is 50% B2B | Motor vehicle trade serves dealers (B2B) and consumers (B2C). Rough midpoint. | Extended |
| A7 | J is 75% B2B | J62 (IT services) dominates 10–249 bracket, predominantly B2B | Extended |
| A8 | L is 50% B2B | Property management = B2B; estate agencies = mixed | Extended |
| A9 | Excluded: I, K, P, Q, R, S95/S96 | I=B2C, K=own infra, P/Q=public payers, R=B2C, S=personal services | Both |

### 4.6 Data Gaps

1. **G45/G46/G47 split by size class (10–49, 50–249) for EU-27.** Available in Eurostat sbs_sc_ovw at division level but not queried. Would convert A5 from [C] to [A].
2. **ARPC validation.** €1,320 is list pricing. No data on realized ARPC, discounting, or upsell.
3. **SAM/SOM penetration rate.** This TAM assumes 100% addressable. No filter for: current AR software adoption (<5% estimated for SMEs), invoice volume threshold, or digital readiness (47.7% of 10–249 use no business software).
4. **Section J B2B share by division.** Eurostat division-level data for J58–J63 would replace the 75% estimate.
5. **Invoice volume distribution by enterprise size.** No EU-wide data exists publicly. Would determine what share of the TAM has sufficient volume to justify €100+/mo spend.

---

## Sources

1. Eurostat sbs_sc_ovw — Enterprise statistics by size class and NACE Rev. 2 activity (from 2021 onwards). Custom query, EU-27, 2023. Extracted 2026-03-20. https://ec.europa.eu/eurostat/databrowser/view/SBS_SC_OVW/
2. Eurostat sbs_sc_ovw — Aggregate file (10–19, 20–49, 50–249 size classes, business economy total). Custom query extracted 2026-03-20.
3. EU Payment Observatory Annual Report 2025. CEPS/EY for European Commission, December 2025. https://single-market-economy.ec.europa.eu/document/download/db1722d8-9cad-40fd-9ad4-f56a907317fa_en
4. EU Payment Observatory Annual Report 2024. CEPS/EY for European Commission, January 2025. https://cdn.ceps.eu/wp-content/uploads/2024/12/EU-Payment-Observatory_Annual-Report-2024_EA-01-24-061-EN-C.pdf
5. ECB/EC SAFE survey (Survey on the Access to Finance of Enterprises). Quarterly since 2024. https://www.ecb.europa.eu/stats/ecb_surveys/safe/html/index.en.html
6. Intrum European Payment Report 2025. ~10,000 executives, 25 European countries. https://www.intrum.com/insights/publications/epr-2025/
7. Intrum European Payment Report 2024. 9,255 executives, 25 European countries. https://www.intrum.com/insights/publications/epr-2024/
8. Atradius Payment Practices Barometer, Western Europe 2025. ~6,500 companies, 31 countries. https://group.atradius.com/knowledge-and-research/reports/b2b-payment-practices-trends-western-europe-2025
9. Eurostat isoc_eb_iip — Integration of internal processes by size class. ICT Usage Survey 2025. Default view extracted 2026-03-20.
10. Eurostat isoc_eb_ai — Artificial intelligence by size class of enterprise. Custom query (20623237), extracted 2026-03-20.
11. Eurostat — "20% of EU enterprises use AI technologies." News article, Dec 2025. https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2
12. Eurostat — "53% EU enterprises used paid cloud services in 2025." News article, Feb 2026. https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260203-1
13. Eurostat — Cloud computing statistics on the use by enterprises. Statistics Explained article. https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Cloud_computing_-_statistics_on_the_use_by_enterprises
14. Council Directive (EU) 2025/516 — ViDA (VAT in the Digital Age). Adopted March 2025. Reported via EDICOM, VATupdate, Norton Rose Fulbright, vatcalc.com.

## Sources for Manual Verification

| Source | Publisher | URL | What to look for | Would improve |
|---|---|---|---|---|
| Eurostat sbs_sc_ovw at NACE division level for G | Eurostat | https://ec.europa.eu/eurostat/databrowser/view/SBS_SC_OVW/ | Filter: EU27, NACE=G45/G46/G47, size class=10-19/20-49/50-249, indicator=V11110, year=2023 | Converts G division split from [C] to [A]. Largest assumption in extended TAM. |
| Eurostat sbs_sc_ovw at NACE division level for J | Eurostat | Same | Filter: EU27, NACE=J58–J63, same size classes | Converts J B2B share from [D] to derived [A] |
| Eurostat "Businesses in distributive trade sector" | Eurostat | https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Businesses_in_distributive_trade_sector | Table with G45/G46/G47 share by country and size class | Validates the 15%/27.9%/57.1% ratio used in A5 |
| Eurostat SBS overview Excel download | Eurostat | https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Structural_business_statistics_overview | File: "Structural_business_statistics_overview_2025_10_V3.xlsx" — linked in "Source data for tables and graphs" section | May contain enterprise count by NACE section and size class in a single table |
| Intrum EPR 2025 full report (downloadable) | Intrum | https://www.intrum.com/insights/publications/epr-2025/ | Payment times by country/sector, hours spent chasing, AI in payments, revenue paid late | Validates 9.85 hrs/week, 11% revenue late figures |
| Atradius PPB CEE 2025 — Poland report | Atradius | https://atradiusdutchstatebusiness.nl/dam/jcr:baa211f1-7791-45a9-92c1-5e4c3ad0dda5/payment-practices-barometer-central-and-eastern-europe-2025-poland-en.pdf | Poland-specific: overdue %, bad debts %, payment terms, sectors | Poland SAM context |
