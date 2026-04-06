import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms & Conditions | HMCTS',
  description: 'Read our complete terms and conditions',
}

export default function TermsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-700 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/legal" className="flex items-center gap-2 text-teal-100 hover:text-white mb-4 w-fit transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Legal
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Terms & Conditions</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-gray">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using the HMCTS website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service. HMCTS reserves the right to modify these terms at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on HMCTS website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
              <p>
                The materials on HMCTS website are provided on an 'as is' basis. HMCTS makes no warranties, expressed or implied, 
                and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
              <p>
                In no event shall HMCTS or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
                or due to business interruption) arising out of the use or inability to use the materials on HMCTS website, even if HMCTS or an authorized 
                representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on HMCTS website could include technical, typographical, or photographic errors. HMCTS does not warrant that any 
                of the materials on the website are accurate, complete, or current. HMCTS may make changes to the materials contained on the website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Links</h2>
              <p>
                HMCTS has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. 
                The inclusion of any link does not imply endorsement by HMCTS of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications</h2>
              <p>
                HMCTS may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by 
                the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the State of Wyoming, United States, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="font-semibold">HMCTS LLC</p>
                <p>Email: <a href="mailto:info@hospitalitysoftwaresolutions.com" className="text-teal-600 hover:text-teal-700">info@hospitalitysoftwaresolutions.com</a></p>
                <p>Phone: <a href="tel:+18459047626" className="text-teal-600 hover:text-teal-700">+1 (845) 904-7626</a></p>
                <p>Address: 30 N GOULD STREET, SHERIDAN, WYOMING 82801 USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
