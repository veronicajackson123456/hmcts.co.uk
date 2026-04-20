import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              The website located at hospitalitysoftwaresolutions.com (the "Site") is provided by HMCTS ("Company",
              "us", "our", and "we"). This Privacy Policy explains how the website owner collects, uses, discloses, and
              protects your personal information when you visit or use the Site. By accessing or using the Site, you
              agree to the practices described in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Information We Collect</h2>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Personal Data:</strong> Information such as your name, email address, phone number, and other
                details you provide voluntarily when registering an account, subscribing to newsletters, or contacting
                us.
              </li>
              <li className="leading-relaxed">
                <strong>Usage Data:</strong> Information about how you access and use the Site, including your IP
                address, browser type, device information, pages visited, and the dates/times of your visits.
              </li>
              <li className="leading-relaxed">
                <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking tools to enhance
                your experience, analyze trends, and administer the Site. For more details, please refer to our Cookie
                Policy.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How We Use Your Information</h2>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Provide, operate, and maintain the Site.</li>
              <li className="leading-relaxed">
                Improve your experience by personalizing content and analyzing usage trends.
              </li>
              <li className="leading-relaxed">
                Communicate with you, including sending service-related notifications and promotional materials (if you
                opt in).
              </li>
              <li className="leading-relaxed">Enforce our Terms of Use and protect the security of the Site.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Disclosure of Your Information</h2>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                With service providers who perform functions on our behalf, such as hosting and data analytics.
              </li>
              <li className="leading-relaxed">
                In connection with a business transfer or restructuring, where your information may be part of the
                assets transferred.
              </li>
              <li className="leading-relaxed">
                To comply with legal obligations, respond to lawful requests, or protect the rights, property, and
                safety of the website owner, our users, or others.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Security</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We implement reasonable security measures to protect your personal information from unauthorized access,
              disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic
              storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Retention of Data</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Your Rights</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Depending on your location, you may have rights regarding your personal information, including the right
              to access, correct, or delete your data, or to object to certain processing practices. To exercise these
              rights, please contact us using the information provided in our Contact section.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Links</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site may contain links to third-party websites. This Privacy Policy does not apply to the practices of
              those websites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">International Data Transfers</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Your information may be transferred to, stored, and processed in a country other than the one in which you
              reside. By using the Site, you consent to the transfer of your data to countries that may have different
              data protection laws than your country.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Governing Law</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Any disputes regarding your personal data or this Privacy Policy will be governed by the laws of the
              relevant country of the website owner's choice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Privacy Policy</h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              We may update this Privacy Policy from time to time. Use of the Site means you accept the changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Contact Us</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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
      </main>

      <Footer />
    </div>
  )
}
