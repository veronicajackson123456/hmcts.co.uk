import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Disclaimer | HMCTS',
  description: 'Important disclaimers and liability limitations',
}

export default function DisclaimerPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-700 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/legal" className="flex items-center gap-2 text-teal-100 hover:text-white mb-4 w-fit transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Legal
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Disclaimer</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-gray">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Disclaimer</h2>
              <p>
                The information provided on this website is for general informational purposes only. While we endeavor to keep the information up-to-date and correct, 
                we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information contained on the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Disclaimer</h2>
              <p>
                HMCTS LLC and its affiliates make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, 
                including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
                or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Limitation of Liability</h2>
              <p>
                In no event shall HMCTS LLC, its directors, employees, agents, or representatives be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses arising out of or in 
                connection with your access to or use of, or inability to access or use, the website or services, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. No Professional Advice</h2>
              <p>
                The information provided on this website is not intended to constitute professional advice. Any information or recommendations provided 
                should not be considered as a substitute for professional advice in any field. Always consult with qualified professionals before making decisions 
                based on information from this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. 
                Your use of third-party websites is governed by their own terms and conditions. We do not endorse or make any representations about third-party websites 
                or their content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Website Availability</h2>
              <p>
                While we strive to maintain the website's availability and functionality, HMCTS LLC makes no representation or warranty regarding the uninterrupted, 
                timely operation or function of the website or any content. The website and its content are provided on an "as-is" basis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Technical Errors</h2>
              <p>
                HMCTS LLC does not warrant that the website will be error-free, that defects will be corrected, or that the website or its servers are free of viruses or harmful components. 
                Your use of the website is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. User Responsibility</h2>
              <p>
                You are responsible for ensuring that your access to and use of the website complies with all applicable laws and regulations. 
                HMCTS LLC is not responsible for any misuse or unauthorized access to the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
              <p>
                If you have questions about this disclaimer, please contact us:
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
