import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Accessibility Statement | HMCTS',
  description: 'Our accessibility features and commitment to inclusivity',
}

export default function AccessibilityStatementPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-700 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/legal" className="flex items-center gap-2 text-teal-100 hover:text-white mb-4 w-fit transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Legal
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Accessibility Statement</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-gray">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Statement</h2>
              <p>
                HMCTS is committed to ensuring that our website and digital services are accessible to all individuals, 
                regardless of ability or disability. We strive to provide an inclusive online experience for everyone.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. WCAG Compliance</h2>
              <p>
                We aim to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                These guidelines help ensure that web content is accessible to people with disabilities, including those with visual, auditory, motor, and cognitive impairments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Accessibility Features</h2>
              <p>Our website includes the following accessibility features:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keyboard navigation support</li>
                <li>Alt text for images</li>
                <li>Proper heading hierarchy and semantic HTML</li>
                <li>Color contrast meeting WCAG standards</li>
                <li>Screen reader compatibility</li>
                <li>Resizable text without loss of functionality</li>
                <li>Accessible forms with clear labels and error identification</li>
                <li>Skip navigation links</li>
                <li>Transcripts for video content where applicable</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Assistive Technology</h2>
              <p>
                Our website is designed to work with commonly used assistive technologies, including screen readers, 
                speech recognition software, and other accessibility tools.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Known Limitations</h2>
              <p>
                While we strive for full accessibility, some limitations may exist. We continuously work to identify and remedy 
                accessibility barriers on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Content</h2>
              <p>
                While we make efforts to ensure accessibility of third-party content embedded on our site, 
                we are not always able to control all aspects of third-party content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ongoing Improvements</h2>
              <p>
                We are committed to making our website more accessible. We regularly review and update our accessibility practices 
                and welcome feedback on how we can continue to improve.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Accessibility Support</h2>
              <p>
                If you experience any difficulty accessing our website or services, or if you have accessibility suggestions, 
                please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="font-semibold">HMCTS Ltd — Hotel Management Consultants & Training Specialists</p>
                <p>General Enquiries: <a href="mailto:hotelmanagement@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">hotelmanagement@hmcts.co.uk</a> or <a href="mailto:info@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">info@hmcts.co.uk</a></p>
                <p>Finance Enquiries: <a href="mailto:finance@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">finance@hmcts.co.uk</a></p>
                <p>Compliance & Verification: <a href="mailto:partners@hmcts.co.uk" className="text-teal-600 hover:text-teal-700">partners@hmcts.co.uk</a></p>
                <p>Phone: <a href="tel:+443333355520" className="text-teal-600 hover:text-teal-700">+44 (0)333 335 5520</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Conformance Report</h2>
              <p>
                We conduct periodic accessibility audits to ensure conformance with accessibility standards. 
                For more information about our accessibility efforts, please contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
