import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Website Disclaimer</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This disclaimer governs your use of the website located at hospitalitysoftwaresolutions.com (the
              "Site"), owned and operated by HMCTS ("we", "us", "our", and "Company"). By accessing or using the Site,
              you acknowledge that you have read, understood, and agree to be bound by this disclaimer. If you do not
              agree with any part of this disclaimer, please do not use the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">No Professional Advice</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The content on the Site, including text, graphics, images, and other materials, is provided for general
              informational purposes only and does not constitute professional advice. We do not provide medical,
              legal, financial, or other professional advice through the Site. Any reliance you place on such
              information is strictly at your own risk.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Before making any decisions based on information from the Site, we strongly recommend that you consult
              with a qualified professional in the relevant field.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Accuracy of Information</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              While we strive to keep the information on the Site accurate and up to date, we make no representations
              or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or
              availability of the Site or the information contained on it. Your use of the Site is at your own risk.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify, update, or remove any information on the Site at any time without prior
              notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Content & Links</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site may contain links to third-party websites, advertisements, and content provided by third parties.
              We do not endorse, control, or assume responsibility for the accuracy, legality, or quality of any
              content or services provided by third parties. Your use of third-party websites is at your own risk and
              subject to their terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Limitation of Liability</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              To the fullest extent permitted by law, HMCTS, its officers, directors, employees, and agents shall not
              be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including
              but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses arising
              out of or in connection with your use of the Site or any content or services provided through the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">No Warranty</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site and all content, materials, and services provided on or through the Site are provided on an
              "as-is" and "as-available" basis without any warranties of any kind, either express or implied, including
              but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Interruptions & Technical Issues</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We do not guarantee that the Site will be available at all times or free from errors, viruses, or other
              harmful components. We are not responsible for any interruptions in service, technical difficulties, or
              downtime that may occur.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">User Responsibility</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              You are solely responsible for evaluating the accuracy, completeness, and usefulness of any information or
              services available on the Site. You assume all risks associated with the use of the Site and any content
              accessed through it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Indemnification</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              You agree to indemnify, defend, and hold harmless HMCTS, its officers, directors, employees, agents, and
              successors from any and all claims, damages, liabilities, costs, and expenses (including reasonable
              attorneys' fees) arising out of or in connection with your use of the Site or violation of this disclaimer
              or any applicable laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Governing Law</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              This disclaimer shall be governed by and construed in accordance with the laws of the relevant country,
              without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Disclaimer</h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              We reserve the right to modify this disclaimer at any time. Your continued use of the Site following any
              changes constitutes your acceptance of the updated disclaimer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Contact Information</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this disclaimer, please contact us:
            </p>

            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-semibold">HMCTS LLC — Hotel Management Consultants & Training Specialists</p>
              <p>General Enquiries: <a href="mailto:hotelmanagement@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">hotelmanagement@hmcts.co.uk</a> or <a href="mailto:info@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">info@hmcts.co.uk</a></p>
              <p>Finance Enquiries: <a href="mailto:finance@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">finance@hmcts.co.uk</a></p>
              <p>Compliance & Verification: <a href="mailto:partners@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">partners@hmcts.co.uk</a></p>
              <p>Phone: <a href="tel:+443333355520" className="text-teal-600 hover:text-teal-700">+44 (0)333 335 5520</a></p>
            </div>
              <p>Phone: <a href="tel:+18459047626" className="text-teal-600 hover:text-teal-700">+1 (845) 904-7626</a></p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
