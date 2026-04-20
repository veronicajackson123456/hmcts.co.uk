import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Data Protection & GDPR | HMCTS',
  description: 'Our commitment to data protection and GDPR compliance',
}

export default function DataProtectionPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-700 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/legal" className="flex items-center gap-2 text-teal-100 hover:text-white mb-4 w-fit transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Legal
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Data Protection & GDPR</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-gray">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection & GDPR Compliance</h2>
              <p>
                HMCTS LLC is committed to protecting the personal data of all individuals whose information we process. 
                We comply with the General Data Protection Regulation (GDPR) and all applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Our Data Protection Commitment</h2>
              <p>
                We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, 
                including inter alia as appropriate: the pseudonymization and encryption of personal data, the ability to ensure the ongoing confidentiality, 
                integrity, availability and resilience of processing systems and services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Your Rights Under GDPR</h2>
              <p>Under GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right of Access:</strong> You have the right to obtain confirmation as to whether or not personal data concerning you is being processed</li>
                <li><strong>Right to Rectification:</strong> You have the right to obtain rectification of inaccurate personal data</li>
                <li><strong>Right to Erasure:</strong> You have the right to obtain erasure of personal data, under certain conditions</li>
                <li><strong>Right to Restrict Processing:</strong> You have the right to obtain restriction of processing</li>
                <li><strong>Right to Data Portability:</strong> You have the right to receive personal data in a structured, commonly used and machine-readable format</li>
                <li><strong>Right to Object:</strong> You have the right to object to processing of personal data</li>
                <li><strong>Rights Related to Automated Decision Making:</strong> You have the right not to be subject to a decision based solely on automated processing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Legal Basis for Processing</h2>
              <p>
                We only process personal data on one or more of the following legal bases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consent from the data subject</li>
                <li>Performance of a contract to which the data subject is party</li>
                <li>Compliance with a legal obligation</li>
                <li>Protection of vital interests</li>
                <li>Performance of a task carried out in the public interest or in the exercise of official authority</li>
                <li>Legitimate interests pursued by the controller or by a third party</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Transfers</h2>
              <p>
                Where we transfer personal data internationally, we implement appropriate safeguards, 
                including standard contractual clauses, adequacy decisions, or binding corporate rules.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Breach Notification</h2>
              <p>
                In the event of a data breach, we will notify affected individuals and relevant authorities without undue delay, 
                as required by applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Exercising Your Rights</h2>
              <p>
                To exercise any of your rights under GDPR or data protection laws, please contact us using the information below. 
                We will respond to your request within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Protection Officer</h2>
              <p>
                If you have questions about our data protection practices or wish to submit a formal complaint, 
                you may also contact your local data protection authority.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p>
                For any questions about our data protection practices:
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="font-semibold">HMCTS Ltd — Hotel Management Consultants & Training Specialists</p>
                <p>General Enquiries: <a href="mailto:hotelmanagement@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">hotelmanagement@hmcts.co.uk</a> or <a href="mailto:info@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">info@hmcts.co.uk</a></p>
                <p>Finance Enquiries: <a href="mailto:finance@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">finance@hmcts.co.uk</a></p>
                <p>Compliance & Verification: <a href="mailto:partners@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">partners@hmcts.co.uk</a></p>
                <p>Phone: <a href="tel:+443333355520" className="text-teal-600 hover:text-teal-700">+44 (0)333 335 5520</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
