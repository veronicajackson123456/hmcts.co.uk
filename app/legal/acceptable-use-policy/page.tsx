import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Acceptable Use Policy | HMCTS',
  description: 'Guidelines for responsible use of our services',
}

export default function AcceptableUsePolicyPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-700 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/legal" className="flex items-center gap-2 text-teal-100 hover:text-white mb-4 w-fit transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Legal
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Acceptable Use Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-gray">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use Policy</h2>
              <p>
                This Acceptable Use Policy defines the standards for the use of HMCTS services. We reserve the right to take action against any user 
                who violates these standards, including termination of services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Prohibited Activities</h2>
              <p>You agree not to engage in any of the following prohibited activities:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accessing, using, or attempting to access or use the Services for any purpose other than those expressly permitted</li>
                <li>Attempting to probe, scan, or test the vulnerability of the Services or any connected system</li>
                <li>Attempting to breach security or authentication measures without proper authorization</li>
                <li>Accessing or searching the Services by any means other than publicly supported interfaces</li>
                <li>Scraping, harvesting, or data mining any content without written permission</li>
                <li>Interfering with or disrupting the integrity or performance of the Services</li>
                <li>Transmitting any harmful, malicious, or disruptive code</li>
                <li>Encouraging or assisting any other person in engaging in any prohibited activity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
              <p>
                You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the Services, use of the Services, 
                or access to the Services without express written permission by HMCTS.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Content</h2>
              <p>
                You retain all rights to any content you submit, post, or display on or through the Services. 
                By submitting content, you grant HMCTS a worldwide, non-exclusive license to use your content in connection with the Services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Harmful Content</h2>
              <p>
                You agree not to transmit any unlawful, threatening, abusive, defamatory, obscene, offensive, or otherwise objectionable material. 
                This includes content that promotes discrimination, hatred, or violence based on protected characteristics.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data Protection</h2>
              <p>
                You agree to comply with all applicable privacy and data protection laws. You will not collect, use, or disclose personal data 
                of others without appropriate consent or legal basis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Account Responsibility</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. 
                You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Violation Consequences</h2>
              <p>
                We may, at our sole discretion and without notice, remove content, suspend or terminate your account, 
                or refuse to provide services to anyone who we believe violates this Acceptable Use Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Reporting Violations</h2>
              <p>
                If you become aware of any violation of this Acceptable Use Policy, please report it to us immediately at:
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="font-semibold">HMCTS Ltd — Hotel Management Consultants & Training Specialists</p>
                <p>General Enquiries: <a href="mailto:info@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">info@hmcts.co.uk</a></p>
                <p>Finance Enquiries: <a href="mailto:finance@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">finance@hmcts.co.uk</a></p>
                <p>Compliance & Verification: <a href="mailto:partners@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">partners@hmcts.co.uk</a></p>
                <p>Phone: <a href="tel:+18459047626" className="text-teal-600 hover:text-teal-700">+1 (845) 904-7626</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
