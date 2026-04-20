import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, DollarSign } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Payments & Invoicing | HMCTS",
  description: "Payment verification, invoicing security, and sample invoice information.",
}

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Payments & Invoicing</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Secure, transparent invoice procedures and payment verification for your peace of mind.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Security Notice */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mb-12">
              <div className="flex gap-4 items-start">
                <AlertCircle className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-3">Payment Security Notice</h2>
                  <p className="text-blue-800 mb-4">
                    HMCTS issues invoices from <a href="mailto:info@hmcts.co.uk" className="font-semibold underline hover:no-underline">info@hmcts.co.uk</a> or <a href="mailto:finance@hmcts.co.uk" className="font-semibold underline hover:no-underline">finance@hmcts.co.uk</a>.
                  </p>
                  <p className="text-blue-800 mb-4">
                    Our bank details are published only on signed PDF invoices and in our compliance pack.
                  </p>
                  <p className="text-blue-800 font-semibold">
                    We do not request urgent payments via SMS, WhatsApp, social media, or voice calls.
                  </p>
                </div>
              </div>
            </div>

            {/* Verification CTA */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 mb-12">
              <div className="flex gap-4 items-start">
                <CheckCircle className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">Verify Before Payment</h3>
                  <p className="text-emerald-800 mb-4">
                    If you receive an invoice from HMCTS and have any doubts about its authenticity, please verify before making payment.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
                      Contact Us for Verification
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Invoice Information */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Standard Invoice Information</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border border-gray-300 rounded-xl p-8 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Typical Invoice Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Invoice Number</p>
                      <p className="text-gray-900 font-mono">INV-[YYYY]-[0001]</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Invoice Date</p>
                      <p className="text-gray-900">DD MMM YYYY</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Payment Terms</p>
                      <p className="text-gray-900">30 days from invoice date</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Issued By</p>
                      <p className="text-gray-900">HMCTS Ltd</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-300 rounded-xl p-8 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Invoice Content</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Billed To</p>
                      <p className="text-gray-900">Client name & address</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Service Description</p>
                      <p className="text-gray-900">Detailed service summary</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Amount Due</p>
                      <p className="text-gray-900 font-bold">£[xxxx.xx]</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Bank Details</p>
                      <p className="text-gray-900">On signed PDF only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample Invoice */}
              <div className="border-2 border-gray-300 rounded-xl p-12 bg-white shadow-lg">
                <div className="mb-8 pb-8 border-b border-gray-300">
                  <p className="text-sm text-gray-600 font-semibold mb-2">SAMPLE INVOICE (For Reference)</p>
                  <h3 className="text-2xl font-bold text-gray-900">HMCTS Ltd</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-1">INVOICE NUMBER</p>
                    <p className="text-lg font-mono text-gray-900">INV-2024-0123</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-1">INVOICE DATE</p>
                    <p className="text-lg font-mono text-gray-900">15 Jan 2024</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-1">DUE DATE</p>
                    <p className="text-lg font-mono text-gray-900">14 Feb 2024</p>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-gray-300">
                  <p className="text-xs text-gray-600 font-semibold mb-2">BILLED TO</p>
                  <p className="text-gray-900 font-semibold">Example Client Hotel Ltd</p>
                  <p className="text-gray-700">123 High Street</p>
                  <p className="text-gray-700">London, UK W1A 1AA</p>
                </div>

                <div className="mb-8">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-2 text-xs font-semibold text-gray-600">DESCRIPTION</th>
                        <th className="text-right py-2 text-xs font-semibold text-gray-600">AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 text-gray-900">Consultancy Services - Q1 2024</td>
                        <td className="text-right py-4 text-gray-900">£5,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div></div>
                  <div>
                    <div className="flex justify-between mb-3 pb-3 border-b-2 border-gray-300">
                      <p className="font-semibold text-gray-900">TOTAL DUE</p>
                      <p className="text-2xl font-bold text-gray-900">£5,000.00</p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><span className="font-semibold">Payment Terms:</span> 30 days from invoice date</p>
                      <p><span className="font-semibold">Bank Details:</span> Published on signed PDF</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">Invoice Queries:</span></p>
                  <p className="text-gray-900">Email: <a href="mailto:finance@hmcts.co.uk" className="text-blue-600 hover:underline font-semibold">finance@hmcts.co.uk</a></p>
                  <p className="text-gray-900">Phone: <a href="tel:+18459047626" className="text-blue-600 hover:underline font-semibold">+1 (845) 904-7626</a></p>
                  <p className="text-xs text-gray-600 mt-2">Mon–Fri 09:00–17:00</p>
                </div>

                <p className="text-xs text-gray-500 mt-6 text-center">
                  This is a sample invoice for reference. Signed PDF invoices include verified bank details.
                </p>
              </div>
            </div>

            {/* Security Features */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Email Verification</h2>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  All legitimate HMCTS emails end with <span className="font-mono bg-white px-3 py-1 rounded border border-indigo-300">@hmcts.co.uk</span>
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">SPF, DKIM & DMARC</p>
                      <p className="text-gray-700">Our email authentication records are publicly available for verification.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Domain Verification</p>
                      <p className="text-gray-700">Check our DNS records if you have concerns about email legitimacy.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Always Verify</p>
                      <p className="text-gray-700">Call the phone number on our website to verify any communication claiming to be from HMCTS.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Payment?</h3>
              <p className="text-gray-700 mb-6">
                For invoice queries, payment information, or to verify an invoice, please contact our Finance team:
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-gray-900"><span className="font-semibold">Email:</span> <a href="mailto:finance@hmcts.co.uk" className="text-blue-600 hover:underline">finance@hmcts.co.uk</a></p>
                <p className="text-gray-900"><span className="font-semibold">Phone:</span> <a href="tel:+443333355520" className="text-blue-600 hover:underline">+44 (0)333 335 5520</a></p>
                <p className="text-gray-700 text-sm">Mon–Fri 09:00–17:00</p>
              </div>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  Contact Finance Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
