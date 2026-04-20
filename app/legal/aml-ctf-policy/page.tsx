'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function AMLCTFPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-600 to-teal-700 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              AML / CTF Policy
            </h1>
            <p className="text-lg text-teal-100">
              Anti-Money Laundering and Counter-Terrorist Financing Policy
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2>AML / CTF Policy — Hotel Management Consultants & Training Specialists (HMCTS)</h2>

              <h3>1. Purpose</h3>
              <p>
                This Anti‑Money Laundering and Counter‑Terrorist Financing (AML/CTF) Policy explains HMCTS's commitment to prevent use of its services for money laundering or terrorist financing, sets minimum controls, and defines responsibilities to ensure compliance with UK AML/CTF laws and regulations.
              </p>

              <h3>2. Scope</h3>
              <p>
                This policy applies to all HMCTS employees, contractors and agents, and to all business activities including consulting, training delivery, invoicing and receipt of payments in the UK and abroad.
              </p>

              <h3>3. Key Definitions</h3>
              <ul>
                <li><strong>Customer / Client:</strong> any individual or legal entity receiving services from HMCTS.</li>
                <li><strong>Beneficial owner (UBO):</strong> natural person(s) who ultimately own or control a client.</li>
                <li><strong>ML/TF:</strong> money laundering / terrorist financing.</li>
                <li><strong>PEP:</strong> Politically Exposed Person.</li>
              </ul>

              <h3>4. Regulatory Framework</h3>
              <p>
                HMCTS complies with the Proceeds of Crime Act 2002, the Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017 (as amended), and guidance issued by relevant UK authorities.
              </p>

              <h3>5. Risk‑Based Approach</h3>
              <p>
                HMCTS adopts a risk‑based approach. Clients, transactions, services and geographies are assessed for ML/TF risk. Higher‑risk relationships require enhanced due diligence (EDD) and senior compliance approval.
              </p>

              <h3>6. Customer Due Diligence (CDD) Requirements</h3>

              <h4>6.1 When to Perform CDD</h4>
              <ul>
                <li>Before establishing a business relationship or providing services likely to result in ongoing interaction.</li>
                <li>When conducting an occasional transaction equal to or above applicable thresholds (per regulation/guidance).</li>
                <li>When there is suspicion of ML/TF or doubts about previously obtained information.</li>
                <li>When there are changes in the nature or pattern of the relationship.</li>
              </ul>

              <h4>6.2 Standard CDD Checks (Clients Who Are Natural Persons)</h4>
              <ul>
                <li>Verify identity using an acceptable government ID (passport, photo driving licence or national ID) and record type, number and issuing country.</li>
                <li>Verify residential address using a recent utility bill, bank statement or council tax bill (typically within last 3 months).</li>
                <li>Record date of birth and national insurance number where available.</li>
              </ul>

              <h4>6.3 CDD Checks (Clients That Are Legal Persons)</h4>
              <ul>
                <li>Obtain and verify full legal name, registered number, registered address and legal form (Companies House extract or equivalent).</li>
                <li>Identify and verify beneficial owners (UBOs) holding ≥25% of ownership or otherwise exercising control.</li>
                <li>Identify and verify the persons acting on behalf of the entity (directors, authorised signatories).</li>
              </ul>

              <h4>6.4 Enhanced Due Diligence (EDD)</h4>
              <p>
                Apply EDD where risk indicators include: PEP status, high‑risk jurisdictions, complex ownership structures, unusual transaction patterns, cash‑intensive payments, or adverse media. EDD may include: certified identity documents, source of funds/wealth documentation, senior management approval, and enhanced transaction monitoring.
              </p>

              <h3>7. Ongoing Monitoring and Record Keeping</h3>
              <ul>
                <li>Monitor client relationships and transactions for unusual or suspicious activity consistent with the customer risk profile.</li>
                <li>Keep records of CDD, EDD, transaction history and any due diligence for at least 5 years after the end of the relevant business relationship or transaction, or longer if required by law.</li>
                <li>Maintain an audit trail of checks performed and decisions made.</li>
              </ul>

              <h3>8. Suspicious Activity Reporting (SARs)</h3>
              <ul>
                <li>Employees must escalate any suspicions to the nominated AML Compliance Officer (AMLO) immediately.</li>
                <li>The AMLO assesses suspicions and, if required, submits a Suspicious Activity Report to the National Crime Agency (NCA) and follows internal escalation procedures.</li>
                <li>Do not notify the client or third party about a SAR (tipping‑off prohibition).</li>
              </ul>

              <h3>9. Roles and Responsibilities</h3>
              <ul>
                <li><strong>Board / Owners:</strong> ensure adequate resources and governance for AML compliance.</li>
                <li><strong>AML Compliance Officer (AMLO):</strong> day‑to‑day responsibility for AML program, risk assessment, CDD guidance, SAR submissions and liaison with authorities.</li>
              </ul>

              <h3>Compliance Enquiries</h3>
              <p>
                For questions regarding this AML/CTF Policy, please contact our Compliance team at <a href="mailto:partners@hmcts.co.uk">partners@hmcts.co.uk</a> or call <a href="tel:+18459047626">+1 (845) 904-7626</a>.
              </p>

              <p className="text-sm text-gray-600 mt-8 pt-8 border-t border-gray-200">
                <strong>Last Updated:</strong> April 2025
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
