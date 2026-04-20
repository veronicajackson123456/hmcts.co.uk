import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | HMCTS',
  description: 'Learn how we protect your personal information',
}

export default function PrivacyPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-700 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/legal" className="flex items-center gap-2 text-teal-100 hover:text-white mb-4 w-fit transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Legal
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Privacy Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-gray">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p>
                HMCTS LLC ("we", "us", "our", or "Company") operates the HMCTS website. This page informs you of our policies regarding the collection, 
                use, and disclosure of personal data when you use our service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information Collection and Use</h2>
              <p>We collect several different types of information for various purposes to provide and improve our service to you.</p>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Types of Data Collected:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Data:</strong> While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include: Email address, First name and last name, Phone number, Address, cookies and usage data</li>
                <li><strong>Usage Data:</strong> We may also collect information on how the service is accessed and used ("Usage Data"). This may include: Computer's Internet Protocol address (IP address), Browser type, Browser version, Pages you visit, Time and date of your visit, Time spent on pages, Device identifiers, and other diagnostic data</li>
                <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our service and hold certain information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Data</h2>
              <p>HMCTS uses the collected data for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features of our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Security of Data</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
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
