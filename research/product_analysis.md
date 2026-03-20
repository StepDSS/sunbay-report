---
topic: Product Analysis — Sunbay.io
date: 2026-03-20
sources_used: 33
user_inputs_integrated: yes
confidence_notes: Three sources (website, pitch deck, pitch video) describe materially different products. This analysis flags discrepancies explicitly. No product demo access; all assessments based on public materials and company claims. Legal and regulatory analysis is general in nature — not legal advice. Competitor pricing data conflicts across sources; best-available figures used with source dates noted.
---

# Product Analysis — Sunbay.io

## What Sunbay.io Is

Sunbay is a B2B accounts receivable collections automation tool. It connects to a customer's accounting/invoicing system, imports outstanding invoice data, and runs automated multi-step follow-up sequences (email, SMS) to collect payments. Core workflow: connect accounting system → define collection rules and templates → system sends reminders on schedule → dashboard tracks status.

The company positions itself between enterprise AR platforms (Tesorio, HighRadius — $1K+/month, complex) and generic automation tools (Zapier, Make — cheap but require technical setup). The pitch: purpose-built for finance teams at SMBs who need automation but can't afford or don't need enterprise tooling.

[Source: Sunbay Pitch Deck, slides 3–5]
[Source: sunbay.io website]

## What's Shipped vs. What's Claimed

Three sources — the website, pitch deck, and pitch video — describe materially different products.

### Confirmed shipped (present in both website and deck)

- Automated email and SMS reminder sequences with templated, personalized messages
- Configurable collection workflows (time-to-first-reminder, escalation timing, multi-step cadences)
- Open/read tracking on sent communications
- Interest notes and late-payment document generation
- Dashboard showing debtor status, open rates, overdue amounts
- Integrations with 8 accounting systems: Fakturownia, Systim, wFirma, Saldeo Smart, inFakt, Subiekt123 (Polish), Xero, QuickBooks (global)
- Communication via SendGrid (email) and SMSAPI (SMS)
- Google Sheets API and Google Drive integration

### Claimed in deck but not shipped

- AI-powered voice agent for payment negotiations (ElevenLabs-powered) — labeled "launching soon"
- AI-powered legal document generation — labeled "under development"
- Additional use cases: documentation requests, contract renewals — labeled "potential"

### Shown in pitch video but absent from website

- CRM inputs: HubSpot, Pipedrive, Docusign
- Bank integrations: HSBC, Revolut, Alior Bank, mBank
- Payment matching module ("better accuracy" claimed vs. competitors)
- Invoicing module with custom logics/pricing
- 20 customers claimed (vs. 5–6 in deck traction slide, 10 logos on website)

[Source: Sunbay Pitch Deck, slide 5]
[Source: sunbay.io/finance-stack-integration]
[Source: Pitch video schema — user-verified from memory]

**Analytical takeaway:** The website shows a reminder tool. The pitch video shows an end-to-end revenue automation platform with CRM, banking, invoicing, and payment matching modules. Whether the video reflects working product or roadmap shown as current capability is unknown without a product demo or customer verification. This is a due diligence priority.

## Architecture & How It Works

**Data source:** Sunbay reads invoice data (amounts, due dates, customer info, payment status) from the connected accounting system's API. Invoice status (paid/unpaid/overdue) is determined by what the accounting system reports.

**Payment verification (website version):** Entirely dependent on accounting system accuracy. If the accountant hasn't reconciled a bank payment and updated invoice status in Fakturownia or Xero, Sunbay continues sending reminders for a paid invoice. This is the standard approach for tools in this segment — Chaser has the same dependency.

**Payment verification (pitch video version):** The schema shows direct bank connections (Revolut, mBank, Alior, HSBC) and a "Matching Payments" module. If operational, this would give Sunbay an independent view of actual incoming payments, matching bank transactions to invoices regardless of whether the accounting system has been updated. The presenter acknowledged competitors can also do payment matching but claimed "better accuracy" — no data, methodology, benchmark, or sample size was provided.

[Source: Pitch video schema — user-verified from memory]

**Tech stack (inferred from CTO's background):** .NET Core backend, React frontend, Azure infrastructure. CTO (Nikodem Cabała) has 5 years of .NET/React experience, including work on BLIK payment infrastructure at mBank and car loan decisioning at Metro Bank (via N-iX).

[Source: LinkedIn — Nikodem Cabała]

## Integrations

### Accounting integrations — the actual asset

6 of 8 integrations are Polish-market-specific: Fakturownia, Systim, wFirma, Saldeo Smart, inFakt, Subiekt123. No international AR competitor (Chaser, Upflow, Gaviti, Tesorio) supports any of these. This is Sunbay's competitive wedge in Poland — the Polish SMB accounting stack is fragmented and localized, and no one else has built these connectors.

The remaining two — Xero, QuickBooks — are table stakes. Every competitor supports them.

### CRM integrations

None on website. HubSpot, Pipedrive, Docusign shown in pitch video. Status unverified.

### Bank integrations

None on website. HSBC, Revolut, Alior, mBank shown in pitch video. Status unverified. If real, this would enable the payment matching module and increase product depth and stickiness. Polish open banking under PSD2 makes bank account data access technically feasible.

### Missing integrations relevant for growth

- No payment processing (Stripe, GoCardless, Mollie) — Sunbay reminds but customers can't pay through the tool. Not a gap at this stage/price, but the next logical step for closing the loop and enabling transaction-fee revenue.
- No ERP connectivity beyond accounting tools — limits upmarket movement.
- No public API documentation — limits ecosystem/partner plays.
- No Zapier/Make connector listed — limits DIY integrations.

## Pricing

Starting at €100/month, tier-based (not per-seat, not usage-based).

| Plan | Price | Scope |
|---|---|---|
| Basic | €100/month | 1 collection flow, 1 accounting system, single language, unlimited users |
| Standard | €120/month | Multiple flows/systems/languages, per-client collection |
| Custom | Contact sales | 3000+ invoices, invoicing module, premium support, custom integrations |
| SMS add-on | +€20/month | 100 SMS credits |

[Source: sunbay.io/pricing]

**In competitive context:** Chaser's current revenue-based pricing starts at $200/month (Compact plan, for businesses under $5M annual revenue), scaling to $550/month (Core) and $1,000/month (Complete). Some older sources list legacy pricing from $49–$369/month, but G2 (updated Jul 2025) reflects the current structure. Upflow starts at $99/month (Start plan per SaaSworthy) or $440/month (per GetApp) — sources conflict, likely reflecting different plan tiers or pricing changes. CollBox starts at $250/month for software or $599–$1,399/month for managed AR service. Gaviti and Tesorio use custom pricing for mid-market/enterprise.

At €100–120/month, Sunbay is cheaper than Chaser's current entry point ($200/month). The pricing doesn't scale with value delivered — no per-invoice fees, no transaction percentage, no usage tiers beyond the 3000-invoice custom threshold. At €100–120/month ARPU (average revenue per user), reaching $1M ARR (annual recurring revenue) requires ~700 paying customers.

[Source: G2 — Chaser pricing, updated Jul 2025]
[Source: GetApp — Upflow pricing, 2026]
[Source: SaaSworthy — Upflow pricing]
[Source: Lawyerist — CollBox pricing, Sep 2025]

## Competitive Positioning

Sunbay's closest comparable is **Chaser** (London, founded 2013, launched 2014, $4–6.2M raised depending on source, 10,000+ users per company claims). Chaser occupies the same positioning — affordable AR automation for SMBs using Xero/QuickBooks — and has shipped: auto-call, payment portal, credit checks, cash flow forecasting (add-on), AI payment prediction, and API access. Chaser has been operating for over 10 years.

[Source: https://pitchbook.com/profiles/company/104545-63 — $6.17M total raised]
[Source: https://www.cbinsights.com/company/chaser — $4M total raised]
[Source: https://app.dealroom.co/companies/chaser_1 — $4.79M total raised]
[Source: https://www.getapp.com/finance-accounting-software/a/chaser/]

Other relevant competitors by segment:

- **Upflow** (Paris/NYC, YC-backed, $22.9M raised over 5 rounds, $4.1M revenue, 68–75 employees as of late 2024) — similar segment, further along in payment processing and cash application.
- **Gaviti** (Tel Aviv, founded 2018, $9M Series A in Apr 2022, $11.5M total raised, $6.6M revenue as of Oct 2024) — mid-market focus, ERP-agnostic, credit risk + dispute management + zero-fee ACH payment portal.
- **Tesorio** (US) — enterprise, AI-driven cash forecasting, ERP integrations with NetSuite/Sage/Zuora.

[Source: https://www.cbinsights.com/company/upflow-1/financials]
[Source: https://tracxn.com/d/companies/upflow/, Sep 2025]
[Source: https://getlatka.com/companies/upflow — revenue data]
[Source: https://getlatka.com/companies/gaviti — revenue data]
[Source: https://nerdisa.com/gaviti/, Aug 2025]
[Source: https://www.finsmes.com/2022/04/gaviti-raises-9m-in-series-a-funding.html]

**Where Sunbay has a defensible edge:** Polish accounting system integrations. No international competitor serves the Fakturownia/wFirma/Systim/inFakt/Saldeo/Subiekt stack. This is a real geographic wedge — but it also limits TAM to Polish SMBs unless they build country-by-country integrations.

**Where Sunbay does not have a defensible edge:** Automated reminders via email/SMS, configurable workflows, debtor dashboards — these are standard features across every tool listed above. The claimed "better accuracy" in payment matching is unsubstantiated.

## Future Use Cases & Risks

The deck lists three future capabilities beyond the shipped collections product: (1) AI voice agent for payment negotiations, (2) AI-powered legal document generation, and (3) expansion to documentation requests and contract renewals.

### A. AI Voice Agent for Payment Negotiations (ElevenLabs-powered)

**What's proposed:** An AI voice agent that calls debtors to negotiate payment terms — due dates, installment plans, partial settlements. Powered by ElevenLabs' Conversational AI platform.

**Technical readiness — latency:** ElevenLabs' stated "sub-100ms" figure refers to TTS (text-to-speech) component latency only — the time to start generating audio from text. This is not voice-to-voice latency. In human conversation, the average gap between speakers is approximately 200ms (Stivers et al., 2009, cross-linguistic study of conversational turn-taking). Natural conversation feels broken above 500ms. The full AI voice agent pipeline (speech-to-text → turn detection → LLM inference → text-to-speech → network) adds up: ElevenLabs' own technical blog states faster LLMs generate first tokens in under 350ms, while GPT-4 or Claude take 700-1000ms — and that's one step in the chain. Analysis of 4M+ production voice agent calls (Hamming AI, 2025-2026) found median production latency of 1,400-1,700ms. Functional for simple exchanges; 2-4x slower than human conversation.

[Source: https://elevenlabs.io/blog/how-do-you-optimize-latency-for-conversational-ai, Jan 2025]
[Source: https://hamming.ai/resources/voice-ai-latency-whats-fast-whats-slow-how-to-fix-it, 2026]
[Source: Stivers et al., 2009, "Universals and cultural variation in turn-taking in conversation"]

**Regulatory environment:**

**1. GDPR and EU AI Act.** AI voice agents processing personal data (debtor names, invoice amounts, payment history) in the EU must comply with GDPR. Requirements: explicit disclosure that the caller is AI at the start of each call, legal basis for processing (likely "legitimate interest" for B2B collections), data minimization, encryption, retention limits, and the right to opt out. Under the EU AI Act (Regulation (EU) 2024/1689), "assistance in legal interpretation and application of the law" is listed among high-risk AI use cases. If the voice agent negotiates payment terms (which involves applying contractual rights), it may fall under high-risk classification, requiring conformity assessments, documentation, and human oversight. High-risk AI rules become enforceable in August 2026 and August 2027.

[Source: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai]
[Source: https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence]

**2. Call recording — Polish law.** Under the Polish Penal Code, Article 267, call recording is legal for a participant without consent from the other party. However, this applies to private persons recording their own conversations. For businesses processing recorded calls, GDPR applies: the other party must be informed of the recording and its purpose, and data access/deletion rights must be provided. Note: Germany, a key expansion market, is a two-party consent jurisdiction — recording without explicit consent from all parties is a criminal offense under §201 of the German Criminal Code. Expanding the voice agent across the EU means navigating different consent regimes per country.

[Source: https://en.wikipedia.org/wiki/Telephone_call_recording_laws — citing Polish Penal Code art. 267]
[Source: https://www.cloudtalk.io/blog/is-call-recording-legal/, Jun 2025]

**3. Verbal agreements during phone calls.** Under Polish civil law, verbal contracts are legally binding in certain circumstances. The Polish Civil Code does not require written form for most commercial obligations. If an AI agent negotiates a modified payment schedule — extending a deadline, accepting partial payment, agreeing to waive late fees — that verbal exchange could constitute a binding agreement. The question: does the AI have authority to bind the creditor to modified terms? If yes, AI errors (hallucinations, misinterpretation, agreeing to terms the creditor didn't authorize) create financial liability. If no, the debtor could argue reliance on the AI's representation in good faith.

[Source: https://www.dudkowiak.com/contract-law-in-poland/, updated Jan 2026 — "Verbal contracts are legally binding under Polish law in certain circumstances."]

**4. Compliance by design vs. compliance by accident.** Voice AI in debt collection has a track record of regulatory scrutiny. The CFPB (US) has stated that using technology does not exempt collectors from existing regulations. EU regulators are moving in the same direction. An AI that offers different terms to different debtors without clear policy justification could face discrimination claims. An AI that fails to identify itself as non-human could face deceptive practice claims.

[Source: https://hellodebo.com/resources/blog/voice-ai-agents-in-global-debt-collection-a-comprehensive-report]

**Summary:** The ElevenLabs platform is technically capable of powering voice agents for phone calls. Deploying one for payment *negotiation* (not just one-way reminders) requires: mandatory AI disclosure at call start, GDPR-compliant recording with consent mechanisms, defined guardrails on what terms the AI can and cannot agree to, human escalation for anything outside pre-defined parameters, country-by-country consent compliance for EU expansion, and likely a high-risk AI Act conformity assessment by August 2027. This is a compliance and legal project as much as a product feature.

### B. AI-Powered Legal Document Generation

**What's proposed:** Automated generation of late-payment documents — interest notices, settlement proposals, legal documents — customized to each use case. Listed as "under development."

**Risk 1 — Unauthorized practice of law.** Generating a standard payment reminder is not legal advice. Generating a "settlement proposal" or "legal document" that references specific statutory rights, calculates interest under Polish law, or threatens legal action is closer to legal practice. In most EU jurisdictions, automated systems producing documents with legal weight require either lawyer oversight or clear disclaimers that they do not constitute legal advice.

**Risk 2 — AI hallucination in legal content.** Stanford HAI research (2025) found that legal AI models hallucinate in 1 out of 6 or more benchmarking queries. General-purpose chatbots hallucinated between 58% and 82% of the time on legal queries in earlier Stanford research. If Sunbay's AI generates an interest calculation citing the wrong statutory rate, or a settlement proposal referencing non-existent provisions, the customer using that document faces liability. Courts in the US, UK, and EU have sanctioned lawyers for relying on AI-generated legal content without verification. An SMB finance team with no legal expertise is less equipped to catch errors than a lawyer.

[Source: https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries]

**Risk 3 — Template vs. generated content.** There is a spectrum. Pre-built templates with variable fields (customer name, amount, date, statutory interest rate from a lookup table) are low-risk — this is what most AR tools do. AI-*generated* legal documents where the model drafts custom language based on the situation are high-risk. The deck says "AI-powered" and "customized to your use case," which implies something beyond mail merge, but doesn't specify where on this spectrum they land.

**Summary:** If Sunbay ships templated documents reviewed by a lawyer and clearly disclaimed, the risk is manageable and the feature is standard. If they ship generative legal documents without lawyer review, the liability surface is large and a single bad document could be disproportionately damaging relative to the feature's value.

### C. Documentation Requests & Contract Renewals (labeled "Potential")

These apply the same feature set (automated reminders, SMS, potentially AI calls) to new workflows. Risk is lower than A or B because documentation requests and contract renewals don't involve financial negotiation or legal content generation — they're workflow automation.

The risk here is strategic, not regulatory: Sunbay has not demonstrated product-market fit in its first use case (5-6 paying clients per deck). Expanding horizontally before establishing the first use case divides engineering resources and blurs positioning.

## Key Due Diligence Questions

1. Do the CRM integrations (HubSpot, Pipedrive) and bank integrations (Revolut, mBank, Alior, HSBC) shown in the pitch video actually work in production? Or are they roadmap items?
2. Is the payment matching module live? What is the accuracy rate, how is it measured, and what is the baseline comparison?
3. How many of the "20 customers" (video claim) are paying SaaS customers vs. consulting/services vs. free/trial?
4. What is actual monthly churn? At 5-6 paying clients, losing one customer is a 16-20% revenue hit.
5. What's the plan for integrating with non-Polish accounting systems for EU expansion (DATEV for Germany, Pennylane for France, etc.)?
6. For the AI voice agent: has Sunbay consulted legal counsel on EU AI Act high-risk classification, GDPR consent requirements for recorded AI calls, and the liability implications of AI-negotiated payment terms?
7. For legal document generation: will generated documents be lawyer-reviewed templates or generative AI output? What liability disclaimers are planned?

## Sources

1. Sunbay Pitch Deck (uploaded PDF)
2. sunbay.io website — homepage, pricing, integrations (accessed 2026-03-18)
3. Pitch video schema (user-verified, stored in project memory)
4. LinkedIn — Nikodem Cabała (uploaded PDF)
5. LinkedIn — Filip Szczeciński (uploaded PDF)
6. LinkedIn — Dawid Dzierzynski (uploaded PDF)
7. PitchBook — Chaser profile: https://pitchbook.com/profiles/company/104545-63 ($6.17M raised, founded 2013)
8. CB Insights — Chaser profile: https://www.cbinsights.com/company/chaser ($4M raised)
9. Dealroom — Chaser profile: https://app.dealroom.co/companies/chaser_1 ($4.79M raised, founded 2013)
10. G2 — Chaser pricing (updated Jul 2025): https://www.g2.com/products/chaser/pricing
11. GetApp — Chaser profile: https://www.getapp.com/finance-accounting-software/a/chaser/
12. CB Insights — Upflow financials: https://www.cbinsights.com/company/upflow-1/financials ($22.85M raised)
13. Tracxn — Upflow profile: https://tracxn.com/d/companies/upflow/, Sep 2025 (68 employees as of Dec 2024)
14. GetLatka — Upflow: https://getlatka.com/companies/upflow ($4.1M revenue, 75 employees)
15. FinSMEs — Gaviti Series A: https://www.finsmes.com/2022/04/gaviti-raises-9m-in-series-a-funding.html
16. PitchBook — Gaviti: https://pitchbook.com/profiles/company/277121-80 ($11.5M total raised)
17. GetLatka — Gaviti: https://getlatka.com/companies/gaviti ($6.6M revenue as of Oct 2024)
18. Nerdisa — Gaviti review: https://nerdisa.com/gaviti/, Aug 2025
19. Lawyerist — CollBox review: https://lawyerist.com/reviews/accounting-billing-finance/collbox/, Sep 2025
20. SaaSworthy — Upflow pricing: https://www.saasworthy.com/product/upflow-io/pricing
21. ElevenLabs — Conversational AI latency blog: https://elevenlabs.io/blog/how-do-you-optimize-latency-for-conversational-ai, Jan 2025
22. Hamming AI — Voice AI latency analysis (4M+ calls): https://hamming.ai/resources/voice-ai-latency-whats-fast-whats-slow-how-to-fix-it, 2025–2026
23. Stivers et al., 2009 — "Universals and cultural variation in turn-taking in conversation," PNAS
24. EU AI Act — Regulation (EU) 2024/1689, Annex III: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
25. European Parliament — EU AI Act summary: https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence
26. GDPR — Regulation (EU) 2016/679, Articles 5, 6, 13, 17, 21, 22, 83
27. Polish Penal Code, Article 267 — via Wikipedia: https://en.wikipedia.org/wiki/Telephone_call_recording_laws
28. Wykryj Podsłuch — Polish recording law: https://wykryjpodsluch.pl/en/is-it-legal-to-record-a-conversation/, Feb 2025
29. CloudTalk — Call recording laws: https://www.cloudtalk.io/blog/is-call-recording-legal/, Jun 2025
30. German Criminal Code (StGB), §201
31. Polish Civil Code — Dudkowiak & Putyra: https://www.dudkowiak.com/contract-law-in-poland/, updated Jan 2026
32. Stanford HAI — "AI on Trial: Legal Models Hallucinate in 1 out of 6 (or More) Benchmarking Queries," 2024: https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries
33. Mason Hayes & Curran — "Beware of Use of AI in Legal Proceedings": https://www.mhc.ie/latest/insights/beware-of-use-of-ai-in-legal-proceedings, Dec 2025
