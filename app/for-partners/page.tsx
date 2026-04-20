import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Lock, BarChart3, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export const metadata = {
  title: "For Banks & Partners | HMCTS | Compliance Hub",
  description: "Compliance documentation, verification, and partnership information for financial institutions and business partners.",
}

export default function ForPartnersPage() {
  const [activeTab, setActiveTab] = useState<"compliance" | "verification" | "partnership">("compliance")

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">For Banks & Partners</h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Comprehensive compliance documentation and partnership information for financial institutions and business partners.
            </p>
          </div>
        </section>

        {/* Access & Verification */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-white rounded-xl border-2 border-slate-300 p-10">
              <div className="flex items-start gap-4 mb-6">
                <Lock className="w-8 h-8 text-slate-700 shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Secure Access</h2>
                  <p className="text-lg text-slate-700">
                    Our compliance pack and detailed partnership information is available upon request. To access sensitive documentation:
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Email Request
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Send a formal request to our Compliance & Partners team:
                  </p>
                  <a href="mailto:partners@hmcts.co.uk" className="inline-block">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                      Contact partners@hmcts.co.uk
                    </Button>
                  </a>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Phone Verification
                  </h3>
                  <p className="text-green-800 mb-4">
                    Or call our office to verify your organisation and arrange access:
                  </p>
                  <a href="tel:+18459047626" className="inline-block">
                    <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                      Call +1 (845) 904-7626
                    </Button>
                  </a>
                </div>
              </div>

              <p className="text-sm text-slate-600 mt-8">
                Mon–Fri 09:00–17:00. Please provide your organisation details and reason for access.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("compliance")}
                className={`pb-4 px-4 font-semibold transition-colors ${
                  activeTab === "compliance"
                    ? "text-slate-900 border-b-2 border-slate-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Compliance Documentation
              </button>
              <button
                onClick={() => setActiveTab("verification")}
                className={`pb-4 px-4 font-semibold transition-colors ${
                  activeTab === "verification"
                    ? "text-slate-900 border-b-2 border-slate-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Verification
              </button>
              <button
                onClick={() => setActiveTab("partnership")}
                className={`pb-4 px-4 font-semibold transition-colors ${
                  activeTab === "partnership"
                    ? "text-slate-900 border-b-2 border-slate-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Partnership Opportunities
              </button>
            </div>

            {/* Compliance Tab */}
            {activeTab === "compliance" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Compliance Documentation</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Upon request, our Compliance Pack includes:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-slate-300 rounded-xl p-8 hover:shadow-lg transition">
                    <div className="flex gap-3 mb-4">
                      <FileText className="w-8 h-8 text-slate-600 shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-gray-900">Company Registration</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Companies House registration details</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Certificate of Incorporation</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Articles of Association</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Directors' details and UBO declaration</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-slate-300 rounded-xl p-8 hover:shadow-lg transition">
                    <div className="flex gap-3 mb-4">
                      <FileText className="w-8 h-8 text-slate-600 shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-gray-900">Financial Information</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Verified bank details (on signed PDF)</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Most recent audited accounts (where applicable)</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>VAT registration (if applicable)</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Tax compliance certification</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-slate-300 rounded-xl p-8 hover:shadow-lg transition">
                    <div className="flex gap-3 mb-4">
                      <FileText className="w-8 h-8 text-slate-600 shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-gray-900">Security & Compliance</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>GDPR and data protection compliance</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Anti-Money Laundering (AML) / Counter-Terrorist Financing (CTF) policy</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Insurance and liability coverage</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Security audit reports</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-slate-300 rounded-xl p-8 hover:shadow-lg transition">
                    <div className="flex gap-3 mb-4">
                      <FileText className="w-8 h-8 text-slate-600 shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-gray-900">Operational Details</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Terms & Conditions</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Service Level Agreements (SLAs)</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Client references (upon request)</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Standard contract templates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Verification Tab */}
            {activeTab === "verification" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Verification</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    HMCTS Ltd is a registered company with full compliance and audit trails. Here's what you should know:
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Basic Information</h3>
                    <div className="grid md:grid-cols-2 gap-6 text-blue-900">
                      <div>
                        <p className="text-sm font-semibold text-blue-700 mb-1">Legal Name</p>
                        <p className="text-lg font-semibold">HMCTS Ltd</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-blue-700 mb-1">Company Number</p>
                        <p className="text-lg font-semibold">[00000000]</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-blue-700 mb-1">Registered Office</p>
                        <p className="text-lg font-semibold">[Street, City, Postcode]</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-blue-700 mb-1">Business Type</p>
                        <p className="text-lg font-semibold">Consulting & Training</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-green-900 mb-4">Email Verification</h3>
                    <p className="text-green-900 mb-4">
                      All official HMCTS communications use email addresses ending with <span className="font-mono bg-white px-2 py-1 rounded">@hmcts.co.uk</span>
                    </p>
                    <ul className="space-y-3 text-green-900">
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span><strong>General:</strong> info@hmcts.co.uk</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span><strong>Finance:</strong> finance@hmcts.co.uk</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span><strong>Compliance:</strong> partners@hmcts.co.uk</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span><strong>Data Protection:</strong> dpo@hmcts.co.uk</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-purple-900 mb-4">Email Authentication</h3>
                    <p className="text-purple-900 mb-4">
                      HMCTS implements robust email security protocols:
                    </p>
                    <ul className="space-y-3 text-purple-900">
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                        <span><strong>SPF (Sender Policy Framework):</strong> Configured</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                        <span><strong>DKIM (DomainKeys Identified Mail):</strong> Enabled</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                        <span><strong>DMARC (Domain-based Message Authentication):</strong> Implemented</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Partnership Tab */}
            {activeTab === "partnership" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    HMCTS works with strategic partners including financial institutions, corporate service providers, and referral networks. We welcome partnerships that align with our commitment to hospitality excellence.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-slate-300 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Models</h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Referral Programs</p>
                          <p className="text-sm text-gray-600">Commissions for qualified client referrals</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Joint Ventures</p>
                          <p className="text-sm text-gray-600">Collaborative projects with complementary services</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">White Label Services</p>
                          <p className="text-sm text-gray-600">Deliver HMCTS expertise under your brand</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Bank Partnerships</p>
                          <p className="text-sm text-gray-600">Specialised support for financial institution clients</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-slate-300 rounded-xl p-8 bg-slate-50">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Partner with HMCTS?</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Proven track record in hospitality</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Full regulatory compliance</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Transparent and reliable operations</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Dedicated support teams</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        <span>Flexible engagement models</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-100 border border-slate-300 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Started</h3>
                  <p className="text-gray-700 mb-6">
                    Interested in exploring a partnership with HMCTS? Contact our partnerships team to discuss opportunities:
                  </p>
                  <a href="mailto:partners@hmcts.co.uk" className="inline-block">
                    <Button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-full flex items-center gap-2">
                      Discuss Partnership Opportunities
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Access Our Compliance Pack?</h2>
            <p className="text-xl text-slate-200 mb-8">
              Contact our Compliance & Partners team to request documentation and schedule a verification meeting.
            </p>
            <a href="mailto:partners@hmcts.co.uk">
              <Button className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
