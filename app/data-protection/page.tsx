import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Data Protection & GDPR Compliance</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              HMCTS is committed to protecting your personal data and complying with applicable data protection laws,
              including the General Data Protection Regulation (GDPR) and other relevant regulations. This document
              outlines our data protection practices and your rights as a data subject.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Controller & Contact</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              HMCTS is the Data Controller for personal data collected through the website located at
              hospitalitysoftwaresolutions.com. If you have questions about our data protection practices or wish to
              exercise your rights, please contact us at:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2">
                <strong>General Enquiries:</strong> <a href="mailto:hotelmanagement@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">hotelmanagement@hmcts.co.uk</a> or <a href="mailto:info@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">info@hmcts.co.uk</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Finance Enquiries:</strong> <a href="mailto:finance@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">finance@hmcts.co.uk</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Compliance & Verification:</strong> <a href="mailto:partners@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">partners@hmcts.co.uk</a>
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> <a href="tel:+443333355520" className="text-teal-600 hover:text-teal-700">+44 (0)333 335 5520</a>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Legal Basis for Processing</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We process your personal data based on one or more of the following legal grounds:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Contract Performance:</strong> Processing necessary to fulfill our contractual obligations to you.
              </li>
              <li className="leading-relaxed">
                <strong>Legitimate Interests:</strong> Processing for our legitimate business interests, such as improving
                our services and preventing fraud.
              </li>
              <li className="leading-relaxed">
                <strong>Legal Obligation:</strong> Processing required to comply with applicable laws and regulations.
              </li>
              <li className="leading-relaxed">
                <strong>Consent:</strong> Processing based on your explicit consent, which you may withdraw at any time.
              </li>
              <li className="leading-relaxed">
                <strong>Vital Interests:</strong> Processing necessary to protect your vital interests or those of others.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Retention</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was
              collected or as required by law. Retention periods vary depending on the type of data and the purpose of
              processing. When data is no longer needed, we delete or anonymize it securely.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Your Rights Under GDPR</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Under the GDPR and other data protection laws, you have the following rights:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Right to Access</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You have the right to request access to your personal data and to receive a copy of the information we
              hold about you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Right to Rectification</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You have the right to request correction of inaccurate or incomplete personal data.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Right to Erasure</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You have the right to request deletion of your personal data under certain circumstances (also known as the
              "right to be forgotten").
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Right to Restrict Processing</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You have the right to request restriction of processing of your personal data in certain situations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Right to Data Portability</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You have the right to receive your personal data in a structured, commonly used, and machine-readable format
              and to transmit it to another organization.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Right to Object</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You have the right to object to processing of your personal data for direct marketing and other purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Right to Not Be Subject to Automated Decision-Making</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You have the right not to be subject to decisions based solely on automated processing that produces legal
              or similarly significant effects.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              To exercise any of these rights, please contact us using the information provided above.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Security</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access
              controls, and regular security assessments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">International Data Transfers</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If your personal data is transferred outside your country of residence (including outside the European
              Economic Area), we ensure that appropriate safeguards are in place, such as Standard Contractual Clauses
              or adequacy decisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Disclosures</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We may disclose your personal data to third parties, such as service providers and partners, who process it
              on our behalf or for their own legitimate purposes. We ensure that these third parties maintain appropriate
              data protection standards.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Breach Notification</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              In the event of a data breach that poses a risk to your rights and freedoms, we will notify you and
              relevant authorities as required by applicable data protection laws without undue delay.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Privacy by Design</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We implement privacy by design principles in all our business processes and technology systems to ensure
              that data protection is integrated from the outset.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Complaints & Disputes</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you believe your data protection rights have been violated, you have the right to lodge a complaint with
              your relevant data protection authority. You also have the right to seek legal remedies through the courts.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Updates to This Policy</h2>

            <p className="text-gray-700 leading-relaxed">
              We may update this Data Protection policy from time to time to reflect changes in our practices or applicable
              laws. Any changes will be posted on this page.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
