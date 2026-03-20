---
topic: Integration Landscape — Poland, Germany & France Accounting/Invoicing Systems
date: 2026-03-20
sources_used: 22
user_inputs_integrated: no
confidence_notes: API availability confirmed via official documentation and developer portals. Market position claims sourced from industry guides and comparison articles — no proprietary market share data. DATEV complexity claims corroborated across multiple independent developer guides.
---

# Integration Landscape: Poland, Germany & France

## Purpose

This file documents the local accounting and invoicing systems that Sunbay currently integrates with (Poland) and would need to integrate with to enter Germany and France, and whether those systems expose public APIs. This serves the product analysis and competitive landscape sections of the memo.

---

## Poland (Current Market)

### Market Structure

Poland's SMB accounting/invoicing market is served by a set of local cloud tools built for Polish tax compliance (KSeF, JPK, Polish VAT rules). Sunbay currently integrates with 6 Polish systems plus 2 global ones (Xero, QuickBooks). The website also lists SendGrid (email) and SMSAPI (SMS) as communication integrations, and Google Sheets/Drive for data. The pitch deck video additionally shows CRM integrations (HubSpot, Pipedrive, Docusign) and bank integrations (HSBC, Revolut, Alior, mBank) — none of which appear on the website's current integrations page.

[Source: sunbay.io/finance-stack-integration, accessed 2026-03-18]
[Source: Sunbay Pitch Deck]

### Key Systems — Accounting/Invoicing

#### Fakturownia
- **What it is:** Cloud invoicing platform. One of the most popular invoicing tools for Polish SMBs.
- **API:** Yes. REST API supporting JSON and XML. Full CRUD on invoices, clients, products, warehouse documents. GitHub repo with official documentation. Python, PHP, and Ruby wrappers exist.
- **Integration effort:** Low. Straightforward REST with API token auth.

[Source: app.fakturownia.pl/api]
[Source: github.com/fakturownia/API]

#### Systim
- **What it is:** Online accounting, invoicing, payroll, and warehouse management for Polish SMBs.
- **API:** Yes. JSON API via POST/GET requests to account subdomains. Covers invoices, clients, products, warehouse.
- **Integration effort:** Low. JSON-based, token auth.

[Source: systim.pl/API/]

#### wFirma
- **What it is:** Cloud accounting and invoicing platform. Covers bookkeeping, invoicing, payroll.
- **API:** Yes. REST API with API key auth (accessKey, secretKey, appKey). Documentation at doc.wfirma.pl. PHP, Java, and Node.js SDKs exist.
- **Integration effort:** Low-moderate. Standard REST/JSON. Requires 3 separate keys for auth.

[Source: doc.wfirma.pl]
[Source: pomoc.wfirma.pl/-api-interfejs-dla-programistow]

#### Saldeo Smart
- **What it is:** OCR-powered document processing and accounting platform. Used by 170,000 companies in Poland. Focused on accountants and accounting offices.
- **API:** Yes. REST API (XML-based). Developer account available on request (api@saldeosmart.pl). .NET wrapper and Zapier proxy exist on GitHub.
- **Integration effort:** Low-moderate. REST but XML format rather than JSON. Developer access requires email request.

[Source: saldeosmart.pl/integracje/api-engine]
[Source: github.com/piotr-cieslik/Piotr.SaldeoSmartApi]

#### inFakt
- **What it is:** Cloud invoicing and accounting for Polish SMBs and freelancers. One of the co-founders' angel investors (Sebastian Bobrowski) is a co-founder of inFakt.
- **API:** Yes. REST API v3 (JSON). Full CRUD on invoices, clients, products, bank accounts, costs. Documentation at docs.infakt.pl. Sandbox environment available. Has an MCP bridge for Claude/Cursor integration.
- **Integration effort:** Low. Modern REST/JSON, sandbox provided, well-documented.

[Source: infakt.pl/developers/]
[Source: docs.infakt.pl]
[Source: github.com/infakt/API]

#### Subiekt123
- **What it is:** Invoicing and sales app by InsERT, targeting micro and small businesses. Integrates with InsERT's accounting ecosystem (Rachmistrz nexo, Rewizor nexo).
- **API:** Yes (newer, less mature). Available via InsERT's developer portal. REST API for web products. Forum threads from 2024 suggest the API was limited historically but has since been opened.
- **Integration effort:** Moderate. Newer API with less community tooling than competitors.

[Source: insert.com.pl developer portal]
[Source: forum.insert.com.pl]

### Key Systems — Communication & Other

#### SendGrid
- **What it is:** Transactional email delivery platform (Twilio). Industry standard.
- **API:** Yes. REST API. Global, well-documented.
- **Integration effort:** Low.

#### SMSAPI
- **What it is:** Polish-headquartered SMS gateway. Also operates internationally (smsapi.com).
- **API:** Yes. Full REST API with libraries in Python, PHP, Java, JavaScript. Documentation at smsapi.pl/docs and smsapi.com/docs.
- **Integration effort:** Low.

[Source: smsapi.pl/docs]
[Source: smsapi.com/docs]

#### Google Sheets API / Google Drive
- **What it is:** Standard Google Workspace APIs.
- **API:** Yes. Industry standard.
- **Integration effort:** Low.

#### Xero
- **What it is:** Global cloud accounting platform (New Zealand-based).
- **API:** Yes. Mature REST API. Industry standard.
- **Integration effort:** Low-moderate.

#### QuickBooks
- **What it is:** Global cloud accounting platform (Intuit).
- **API:** Yes. Intuit Developer platform, REST API. Industry standard.
- **Integration effort:** Low-moderate.

### Poland Summary Table

| System | Market Role | API | API Type | Integration Difficulty |
|---|---|---|---|---|
| Fakturownia | Top invoicing tool | Yes | REST JSON/XML | Low |
| Systim | Accounting + invoicing + payroll | Yes | JSON POST/GET | Low |
| wFirma | Accounting + invoicing | Yes | REST JSON, 3-key auth | Low-moderate |
| Saldeo Smart | OCR + accounting (accountant-focused) | Yes | REST XML | Low-moderate |
| inFakt | Invoicing + accounting | Yes | REST JSON v3, sandbox | Low |
| Subiekt123 | Invoicing + sales (InsERT ecosystem) | Yes (newer) | REST via InsERT portal | Moderate |
| SendGrid | Email delivery | Yes | REST | Low |
| SMSAPI | SMS gateway | Yes | REST | Low |
| Xero | Global cloud accounting | Yes | REST | Low-moderate |
| QuickBooks | Global cloud accounting | Yes | REST | Low-moderate |

### Poland Key Observation

All systems Sunbay integrates with expose public REST APIs. This means the integration layer Sunbay has built is technically replicable by any competitor — there is no proprietary connector advantage. The barrier is knowing *which* Polish systems to integrate with and doing the work to build connectors for all of them. This is an execution advantage (being first to cover the full Polish stack), not a technical moat.

---

## Germany

### Market Structure

The German SMB accounting market is dominated by two cloud-native tools (sevDesk, Lexware Office) and one legacy system (DATEV) that functions as the backbone of the German tax advisor ecosystem. Global tools like Xero and QuickBooks are not recommended by local experts because they lack German-specific compliance features (GoBD, ELSTER integration, XRechnung/ZUGFeRD e-invoicing formats).

[Source: germanpedia.com/best-accounting-software-germany/, March 2026]
[Source: settle-in-berlin.com/best-accounting-software-germany/, January 2026]

### Key Systems

#### sevDesk
- **What it is:** Cloud accounting for SMBs and freelancers. One of the two dominant cloud tools in Germany.
- **API:** Yes. REST API at api.sevdesk.de. OpenAPI specification available. Community-maintained PHP, .NET, and Laravel wrappers on GitHub.
- **API quality notes:** Community project on GitHub documents discrepancies between official spec and actual API behavior. The official documentation is described as "sometimes inaccurate, frequently updated and the updates are poorly communicated."
- **Integration effort:** Moderate. Standard REST/JSON with API key auth. Make.com connector exists.

[Source: api.sevdesk.de]
[Source: github.com/j-mastr/sevdesk-api]
[Source: tech.sevdesk.com/api_news/]

#### Lexware Office (formerly Lexoffice)
- **What it is:** Cloud accounting by Haufe/Lexware Group. The other dominant cloud tool in Germany alongside sevDesk.
- **API:** Yes. REST-based Public API. Documentation at developers.lexoffice.io. PHP and Java SDKs on GitHub.
- **API quality notes:** API is free to use but requires XL plan subscription. Some workflows require multiple consecutive API calls due to strict audit trail design. Rate limit: 2 requests per second. API base URL migrated from api.lexoffice.io to api.lexware.io.
- **Integration effort:** Moderate. Standard REST/JSON. Multi-step workflows for certain operations (e.g., creating a transaction + uploading attachment + linking = 4 API calls).

[Source: developers.lexoffice.io]
[Source: lexware.de/partner/public-api/]
[Source: maesn.com/blogs/lexware-office-api-explained, October 2025]

#### DATEV
- **What it is:** The dominant accounting system used by tax advisors (Steuerberater) across Germany. De facto standard for financial record-keeping in the German market. Split into DATEV Unternehmen Online (cloud portal for document exchange) and DATEV Rechnungswesen (on-premise accounting system).
- **API:** Partial and complex. DATEV does not use traditional REST or SOAP APIs for core accounting operations. Core data exchange uses batch-based CSV and XML file processing. REST endpoints exist only for niche products (cash register import via MeinFiskal, document management via DATEVconnect). Developer portal at developer.datev.de.
- **API quality notes:** This is the hardest integration in the German market. Key barriers:
  - Every new third-party integration must go through a formal approval process with DATEV
  - No public sandbox — testing requires coordination with a tax advisor who creates a test client
  - Architecture is batch-based (CSV/XML files processed via async jobs), not real-time REST
  - Getting data *out* of DATEV is historically difficult; native interfaces focus on uploading, not reading
  - Two separate systems (DUO and Rechnungswesen) with different endpoints and workflows
- **Integration effort:** High. Most teams use unified API middleware providers (Maesn, Chift, Apideck) rather than building direct integrations. Direct integration estimated at months of development plus the approval process.

[Source: developer.datev.de]
[Source: apideck.com/blog/datev-api-integration-guide, October 2025]
[Source: maesn.com/blogs/retrieve-data-from-datev, September 2025]
[Source: chift.eu/blog/datev-api-integration]

#### EasyBill
- **What it is:** Mid-tier invoicing tool for German SMBs.
- **API:** Yes. REST API with documented endpoints.
- **Integration effort:** Low-moderate. Standard REST/JSON.

[Source: easybill.de]

#### Other German tools
- **Accountable:** Cloud accounting for freelancers, supports XRechnung/ZUGFeRD. API status: limited/not documented publicly.
- **Sorted:** Cloud accounting for freelancers in Germany, English-language. API status: not documented publicly.
- **Debitoor/SumUp Invoices:** Micro-business invoicing. REST API available.
- **Qonto:** French neo-bank with German IBAN and e-invoicing. API available.

### Germany Summary Table

| System | Market Role | API | API Type | Integration Difficulty |
|---|---|---|---|---|
| sevDesk | Top cloud SMB tool | Yes | REST/JSON, OpenAPI spec | Moderate |
| Lexware Office | Top cloud SMB tool | Yes | REST/JSON | Moderate (multi-step workflows) |
| DATEV | Dominant legacy/tax advisor system | Partial | Batch CSV/XML, not REST | High (approval process, no sandbox, async) |
| EasyBill | Mid-tier invoicing | Yes | REST/JSON | Low-moderate |
| SumUp Invoices | Micro-business | Yes | REST | Low |

---

## France

### Market Structure

France's accounting software market is highly fragmented — over 20 significant tools are in active use, each with different data structures, integration methods, and user bases. A structural difference: 48% of French SMEs outsource accounting to experts-comptables (certified accountants), meaning integrations need to bridge both business and accountant workflows. Legacy ERPs like Sage 100 run alongside API-first platforms like Pennylane. France's mandatory e-invoicing rollout begins in 2026 for large/mid-sized firms and 2027 for SMEs, which is driving rapid software adoption.

[Source: chift.eu/blog/2025-guide-to-integrating-accounting-software-as-a-fintech-in-france]

### Key Systems

#### Pennylane
- **What it is:** Fastest-growing cloud accounting platform in France. Claims 500,000 companies on platform as of September 2025. Combines accounting, financial management, and SME-accountant collaboration. Also offers banking (French IBAN, Mastercard cards).
- **API:** Yes. REST API v2 with Company API (for businesses) and Firm API (for accounting firms). Documentation at pennylane.readme.io. OAuth 2.0 for marketplace integrations. Supports Factur-X e-invoice import.
- **API quality notes:** v1 deprecated, v2 is current stable version. Sandbox requires manual onboarding (email integrations@pennylane.com). Access tokens expire after 24 hours, refresh tokens valid 90 days. Some limitations: downpayment invoices are workarounds, delivery notes not available via API, payment records are aggregated (no detailed payment history per invoice).
- **Integration effort:** Moderate. Modern REST/JSON API. The manual sandbox onboarding adds initial friction.

[Source: pennylane.readme.io]
[Source: help.pennylane.com/fr/articles/18770-utiliser-les-api-publiques-pennylane]
[Source: apideck.com/blog/how-to-integrate-with-the-pennylane-api, March 2026]

#### Sage (Sage 100, Sage Business Cloud)
- **What it is:** Major legacy ERP with large install base in France. Sage 100 is on-premise; Sage Business Cloud is the newer SaaS offering.
- **API:** Yes for cloud products (REST API). Sage 100 (on-premise) requires custom connectors or middleware.
- **Integration effort:** Varies. Cloud = moderate. On-premise Sage 100 = high.

[Source: sage.com]

#### Cegid
- **What it is:** Major French ERP and accounting provider. Enterprise-focused.
- **API:** Partial. API available for some products, varies by product line.
- **Integration effort:** High. Complex product landscape, enterprise-oriented.

[Source: cegid.com]

#### MyUnisoft
- **What it is:** Rising accountant-focused platform. Popular with experts-comptables.
- **API:** Yes. API available.
- **Integration effort:** Moderate.

[Source: myunisoft.fr]

#### Inqom (Visma group)
- **What it is:** Accountant-focused platform supporting 100K+ companies via their accountants. Modern, automation-focused.
- **API:** Yes. Available via Visma ecosystem.
- **Integration effort:** Moderate.

[Source: inqom.com]

#### EBP
- **What it is:** Traditional French SMB accounting software. Large install base among French TPE/PME (very small and small businesses).
- **API:** Limited. Some connector capabilities but not as open as cloud-native tools.
- **Integration effort:** Moderate-high. Legacy architecture.

[Source: ebp.com]

#### Other French tools
- **Tiime:** Cloud invoicing for micro-businesses. API available. Growing among micro-entrepreneurs.
- **ACD:** Accountant-focused, 40+ year history. Module-based, limited API.
- **Fulll:** Cloud accounting. API available.
- **Agiris:** Accountant-focused. Limited public API documentation.

### France Summary Table

| System | Market Role | API | API Type | Integration Difficulty |
|---|---|---|---|---|
| Pennylane | Top cloud platform (fastest growing) | Yes | REST/JSON v2, OAuth 2.0 | Moderate |
| Sage (Cloud) | Major legacy ERP, cloud version | Yes | REST | Moderate |
| Sage 100 (on-prem) | Major legacy ERP, on-premise | Connectors only | Custom | High |
| Cegid | Enterprise ERP | Partial | Varies by product | High |
| MyUnisoft | Accountant-focused | Yes | REST | Moderate |
| Inqom (Visma) | Accountant-focused | Yes | Visma ecosystem | Moderate |
| EBP | Traditional SMB accounting | Limited | Legacy connectors | Moderate-high |
| Tiime | Micro-business invoicing | Yes | REST | Low-moderate |

---

## Comparison: Integration Effort by Market

| Dimension | Poland (current) | Germany | France |
|---|---|---|---|
| Number of key local systems | 6-8 | 3-5 | 5-8+ |
| All have REST APIs? | Yes | No (DATEV is batch-based) | Mostly yes (EBP and Sage 100 are limited) |
| Hardest integration | Subiekt123 (newer API, less mature) | DATEV (formal approval process, batch CSV/XML, no sandbox, months of work) | Sage 100 on-premise (custom connectors) |
| Regulatory specifics | KSeF (mandatory e-invoicing from Feb 2026) | GoBD compliance, ELSTER integration, XRechnung/ZUGFeRD | Factur-X, Chorus Pro, mandatory e-invoicing 2026-2027 |
| Market fragmentation | Low (6 dominant tools) | Low-medium (2 cloud + DATEV) | High (20+ tools in active use) |
| Sunbay's current coverage | 6 local + 2 global systems integrated | None | None |
| Recommended entry strategy | N/A (already in market) | sevDesk + Lexware Office first, DATEV via middleware | Pennylane first, then Sage Cloud |

---

## Implications for Product Analysis

1. **Sunbay's current integration layer is Poland-specific.** All 6 local systems use standard REST APIs — straightforward to build, but also straightforward for any competitor to replicate. Expanding to Germany or France is not "add Xero and QuickBooks." Each market requires building a new set of local connectors.

2. **The Polish integrations represent execution, not moat.** Every system Sunbay connects to has a public, documented API. The value is in having already built and tested the full stack, not in any proprietary access. A funded competitor could replicate the Polish integration set in weeks-to-months.

3. **DATEV is the single largest integration barrier in Europe.** Any AR automation tool targeting German SMBs will eventually need DATEV connectivity, and this integration is materially harder than any Polish equivalent. The formal approval process, batch architecture, and lack of sandbox create months of engineering overhead. Most startups use unified API middleware (Maesn, Chift) to avoid building direct.

4. **France's fragmentation increases cost-to-cover.** With 20+ tools in active use, achieving broad market coverage in France requires more integrations than Poland or Germany. A Pennylane-first strategy is feasible given its growth trajectory but would leave a large portion of the market unserved.

5. **Every Polish integration Sunbay has built uses a standard REST API pattern.** The same engineering team/approach works for sevDesk, Lexware Office, Pennylane, and most French tools. DATEV and Sage 100 on-prem are the exceptions that would require different integration architecture.

6. **Unified API providers exist as a shortcut.** Services like Chift, Maesn, and Apideck offer single REST endpoints that translate to multiple accounting systems. This could accelerate Sunbay's EU expansion but would add a dependency and recurring cost.

---

## Sources

1. sunbay.io/finance-stack-integration (accessed 2026-03-18)
2. Sunbay Pitch Deck
3. app.fakturownia.pl/api
4. github.com/fakturownia/API
5. systim.pl/API/
6. doc.wfirma.pl
7. saldeosmart.pl/integracje/api-engine
8. infakt.pl/developers/
9. github.com/infakt/API
10. insert.com.pl (InsERT developer portal)
11. smsapi.pl/docs
12. germanpedia.com/best-accounting-software-germany/ (March 2026)
13. settle-in-berlin.com/best-accounting-software-germany/ (January 2026)
14. accountable.de/en/blog/e-invoicing-software-comparison/ (August 2025)
15. api.sevdesk.de
16. github.com/j-mastr/sevdesk-api
17. developers.lexoffice.io
18. maesn.com/blogs/lexware-office-api-explained (October 2025)
19. developer.datev.de
20. apideck.com/blog/datev-api-integration-guide (October 2025)
21. chift.eu/blog/2025-guide-to-integrating-accounting-software-as-a-fintech-in-france
22. pennylane.readme.io
