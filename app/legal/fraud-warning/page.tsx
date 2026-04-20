'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AlertTriangle, CheckCircle, Clock, Phone, Mail } from 'lucide-react'

export default function FraudWarningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-red-600 to-red-700 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-10 h-10" />
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Fraud Warning & Payment Verification
              </h1>
            </div>
            <p className="text-lg text-red-100">
              Official guidance on communication channels and payment verification procedures
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {/* Official Communications */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-blue-600" />
                  Official Communications
                </h2>
                <p className="text-gray-700 mb-4">
                  HMCTS sends official correspondence only from corporate email addresses at <strong>hmcts.co.uk</strong> and from the primary business phone number listed on our website. Official documents are issued on HMCTS letterhead or as digitally signed PDFs included in the compliance pack or sent via our secure upload service.
                </p>
              </div>

              {/* Never Asked Channels */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Never Asked Channels</h2>
                <p className="text-gray-700 mb-4">
                  <strong>HMCTS will never request urgent payments or changes to bank details via these unsecured channels:</strong>
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Unsolicited SMS messages
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    WhatsApp or other messaging apps
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Social media direct messages
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Personal mobile numbers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Unsolicited calls demanding immediate payment or secrecy
                  </li>
                </ul>
              </div>

              {/* Payment Instructions */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Legitimate Payment Instructions</h2>
                <p className="text-gray-700 mb-4">
                  All legitimate payment instructions originate from an authorised HMCTS email address (name@hmcts.co.uk) and will reference:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    An issued invoice number
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    Your client account reference
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    Our standard payment terms
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Important:</strong> Bank account details are published only in the invoice PDF or in a signed payment instruction within the compliance pack.
                </p>
              </div>

              {/* Change of Payment Requests */}
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requests to Change Bank Details</h2>
                <p className="text-gray-700 mb-4">
                  Requests to change bank details or payment recipient require:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4 mb-4">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-yellow-600 text-white flex items-center justify-center rounded-full text-xs mt-0.5 shrink-0 font-bold">1</div>
                    A new authorised-signatory letter or emailed confirmation from an authorised corporate email
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-yellow-600 text-white flex items-center justify-center rounded-full text-xs mt-0.5 shrink-0 font-bold">2</div>
                    Verbal confirmation via the published corporate phone number
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-yellow-600 text-white flex items-center justify-center rounded-full text-xs mt-0.5 shrink-0 font-bold">3</div>
                    Approval by the finance director and recorded in our secure system
                  </li>
                </ul>
              </div>

              {/* How to Verify */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Verify Payment Instructions</h2>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-purple-600 shrink-0">1.</span>
                    <span><strong>Confirm the sender's email domain</strong> is hmcts.co.uk and check DKIM/SPF/DMARC authenticity if your mail system supports it.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-purple-600 shrink-0">2.</span>
                    <span><strong>Verify the invoice number and amount</strong> against a copy in our secure compliance pack or your contract files.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-purple-600 shrink-0">3.</span>
                    <span><strong>Call the corporate phone number</strong> on our website and ask to speak to the named contact on the instruction; do not use any phone number supplied in the suspicious message.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-purple-600 shrink-0">4.</span>
                    <span><strong>For bank-detail changes,</strong> require a signed authorisation on HMCTS letterhead or a digitally signed PDF and a separate verbal confirmation to the published phone number before sending funds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-purple-600 shrink-0">5.</span>
                    <span><strong>For high‑value or unusual payments,</strong> request a short written confirmation from our finance director sent from their hmcts.co.uk email and allow 24–48 hours for verification.</span>
                  </li>
                </ol>
              </div>

              {/* Reporting Fraud */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Reporting Suspected Fraud</h2>
                <p className="text-gray-700 mb-4">
                  If you suspect a fraudulent communication purportedly from HMCTS, <strong>do not reply or follow any payment instructions.</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Report it immediately by:</strong>
                </p>
                <div className="space-y-3 ml-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-orange-600" />
                    <span>Emailing our secure compliance address (provided in the compliance pack)</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-orange-600" />
                    <span>Calling the corporate number on our website</span>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  Please include the original message (headers if possible) and any payment details you received.
                </p>
              </div>

              {/* Tipping Off */}
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tipping-Off and Confidentiality</h2>
                <p className="text-gray-700">
                  HMCTS will never disclose that a Suspicious Activity Report (SAR) has been made to any third party. If HMCTS requests further information for verification, follow the secure channels outlined above.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-teal-50 border-2 border-teal-300 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold">General Enquiries:</p>
                      <a href="mailto:info@hmcts.co.uk" className="text-teal-600 hover:underline">info@hmcts.co.uk</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold">Finance Enquiries:</p>
                      <a href="mailto:finance@hmcts.co.uk" className="text-teal-600 hover:underline">finance@hmcts.co.uk</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold">Compliance & Partner Verification:</p>
                      <a href="mailto:partners@hmcts.co.uk" className="text-teal-600 hover:underline">partners@hmcts.co.uk</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold">Corporate Phone:</p>
                      <a href="tel:+441234567890" className="text-teal-600 hover:underline">+44 (0) 123 456 7890</a>
                      <p className="text-sm text-gray-600">Mon–Fri 09:00–17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 text-center py-8">
                Adopt these checks as standard practice to reduce fraud risk when dealing with HMCTS payment requests.
              </p>

              <p className="text-sm text-gray-600 mt-8 pt-8 border-t border-gray-200 text-center">
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
