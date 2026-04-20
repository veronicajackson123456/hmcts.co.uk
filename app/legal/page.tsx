'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function LegalHub() {
  const legalPages = [
    {
      title: 'Terms & Conditions',
      description: 'Our complete terms of service and conditions of use',
      href: '/legal/terms',
    },
    {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information',
      href: '/legal/privacy',
    },
    {
      title: 'Cookie Policy',
      description: 'Information about cookies and your privacy choices',
      href: '/legal/cookie-policy',
    },
    {
      title: 'Data Protection & GDPR',
      description: 'Our commitment to data protection and GDPR compliance',
      href: '/legal/data-protection',
    },
    {
      title: 'AML / CTF Policy',
      description: 'Anti-Money Laundering and Counter-Terrorist Financing compliance',
      href: '/legal/aml-ctf-policy',
    },
    {
      title: 'Fraud Warning & Payment Verification',
      description: 'Official guidance on communication channels and payment verification procedures',
      href: '/legal/fraud-warning',
    },
    {
      title: 'Disclaimer',
      description: 'Important disclaimers and liability limitations',
      href: '/legal/disclaimer',
    },
    {
      title: 'Acceptable Use Policy',
      description: 'Guidelines for responsible use of our services',
      href: '/legal/acceptable-use-policy',
    },
    {
      title: 'Accessibility Statement',
      description: 'Our accessibility features and commitment to inclusivity',
      href: '/legal/accessibility-statement',
    },
    {
      title: 'Refund & Cancellation Policy',
      description: 'Our refund, cancellation, and return policies',
      href: '/legal/refund-policy',
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Legal Information
          </h1>
          <p className="text-lg text-teal-100">
            Access all our legal documents, policies, and important information
          </p>
        </div>
      </section>

      {/* Legal Pages Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {legalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {page.title}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors transform group-hover:translate-x-1" />
                </div>
                <p className="text-gray-600 text-sm">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-teal-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Need Help?</h2>
          <p className="text-gray-700 text-center mb-8">
            If you have questions about our policies or need clarification on any legal matter, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@hmcts.co.uk"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-center font-medium"
            >
              Email Us
            </a>
            <a
              href="tel:+18459047626"
              className="px-6 py-3 bg-white border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors text-center font-medium"
            >
              Call +1 (845) 904-7626
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
