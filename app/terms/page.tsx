import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Website Terms of Use</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The website located at hospitalitysoftwaresolutions.com (the "Site") is provided by HMCTS ("Company",
              "us", "our", and "we"). Certain features of the Site may be subject to additional guidelines, terms, or
              rules, which will be posted on the Site in connection with such features. All such additional terms,
              guidelines, and rules are incorporated by reference into these Terms.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              These Terms of Use (the "Terms") set forth the legally binding conditions that govern your use of the
              Site. By accessing or using the Site, you accept these Terms on behalf of yourself or the entity you
              represent and confirm that you have the legal capacity to agree to them. If you do not agree with all the
              provisions of these Terms, do not access or use the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Accounts & User Responsibilities</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>1.1 Account Creation</strong> – To access certain features, you may be required to create an
              account. You must provide truthful and accurate information when registering and are responsible for
              maintaining the security of your account and password.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>1.2 Account Suspension & Termination</strong> – We reserve the right to suspend or terminate
              accounts that violate these Terms. You may delete your account at any time by following the instructions
              on the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Website Access & Restrictions</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>2.2 Prohibited Activities</strong> – Users agree NOT to: copy, sell, rent, lease, or exploit any
              part of the Site for commercial gain; modify, reverse-engineer, or attempt to gain unauthorized access to
              the Site; or use the Site for fraudulent, illegal, or harmful activities.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>2.3 Site Modifications</strong> – We reserve the right to modify, suspend, or discontinue any part
              of the Site at any time, with or without notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Payments & Billing</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              All payments must be made in full according to the agreed terms before services are rendered. Late
              payments may result in additional fees or suspension of services. Prices for services may change, and we
              will notify clients of any updates.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cancellation & Refund Policy</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>No Refunds or Recalls of Payment</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              1) (a) Receipt of payment for services after completion of the services shall be construed as acceptance
              of the services as satisfactory and without complaint by the Client. (b) Any complaints regarding the
              services must be raised with the Consultant prior to making payment. After payment, the Client agrees that
              no disputes or claims regarding the services will be accepted.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              2) (a) Once payment has been made, the Client agrees that it is non-refundable and cannot be recalled or
              disputed. (b) The Client agrees that this Agreement shall be used as evidence to financial institutions,
              granting permission to reject any chargebacks or payment reversal requests.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Intellectual Property Rights</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              All content, trademarks, logos, and materials on the Site are the property of the website owner or its
              licensors. Unauthorized use of any copyrighted materials is strictly prohibited.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Limitation of Liability</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We do not guarantee that the Site will be error-free, uninterrupted, or meet your specific needs. The
              website owner is not liable for any indirect, incidental, or consequential damages resulting from the use
              of the Site. Accessing the Site is at your own risk. The owners of the website will not be held
              responsible for any fraudulent, criminal, or financial claims relating to this website, including any
              misrepresentation or impersonation in any way.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Links & Advertisements</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site may include links to third-party websites and advertisements. We do not endorse or take
              responsibility for any third-party content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Privacy & Data Protection</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our Privacy Policy outlines how we collect, store, and protect your personal information. By using the
              Site, you agree to our data practices as described in the Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Dispute Resolution & Governing Law</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Any disputes will be resolved through binding arbitration under the laws of the relevant country of the
              website owner's choice. Users waive the right to participate in a class-action lawsuit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to These Terms</h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              We may update these Terms from time to time. Use of the Site means you accept the changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Contact Information</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>

            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-semibold">HMCTS LLC — Hotel Management Consultants & Training Specialists</p>
              <p>General Enquiries: <a href="mailto:hotelmanagement@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">hotelmanagement@hmcts.co.uk</a> or <a href="mailto:info@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">info@hmcts.co.uk</a></p>
              <p>Finance Enquiries: <a href="mailto:finance@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">finance@hmcts.co.uk</a></p>
              <p>Compliance & Verification: <a href="mailto:partners@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">partners@hmcts.co.uk</a></p>
              <p>Phone: <a href="tel:+443333355520" className="text-teal-600 hover:text-teal-700">+44 (0)333 335 5520</a></p>
              <p className="text-xs text-gray-600 mt-2">UK: SR 20243712436 | US: EIN 37-2155102</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
