import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Cookie Policy | HMCTS',
  description: 'Information about cookies and your privacy choices',
}

export default function CookiePolicyPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-700 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/legal" className="flex items-center gap-2 text-teal-100 hover:text-white mb-4 w-fit transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Legal
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Cookie Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-gray">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Policy</h2>
              <p>
                This Cookie Policy explains how HMCTS LLC ("Company", "we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners 
                to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Essential Cookies:</h3>
              <p>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you such as setting your privacy preferences, logging in or filling in forms.</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Functional Cookies:</h3>
              <p>These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Performance Cookies:</h3>
              <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular.</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Analytical Cookies:</h3>
              <p>These cookies are used to understand how visitors interact with our website. The information collected helps us improve the user experience.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How You Can Control Cookies</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser settings. 
                Most web browsers allow some control of most cookies through the browser settings.
              </p>
              <p className="mt-3">
                If you reject non-essential cookies, we will still use essential cookies that are necessary for the functioning of the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the website, deliver advertisements on and off the website, 
                and so on. These cookies are set by external services and are governed by their respective privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Updates to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes to our cookie use or for other operational, legal, or regulatory reasons. 
                Please revisit this Cookie Policy regularly to stay informed about our use of cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us:
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
