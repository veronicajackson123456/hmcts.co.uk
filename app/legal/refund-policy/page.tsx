import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Refund & Cancellation Policy | HMCTS',
  description: 'Our refund, cancellation, and return policies',
}

export default function RefundPolicyPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-700 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/legal" className="flex items-center gap-2 text-teal-100 hover:text-white mb-4 w-fit transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Legal
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Refund & Cancellation Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-gray">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund & Cancellation Policy</h2>
              <p>
                At HMCTS, we want you to be completely satisfied with our products and services. 
                This policy outlines our approach to refunds, cancellations, and returns.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Refund Eligibility</h2>
              <p>
                Requests for refunds must be submitted within 30 days of purchase. To be eligible for a refund, 
                the product or service must not have been substantially used or accessed.
              </p>
              <p className="mt-3">
                For services, a refund may be available if the service has not been activated or if you cancel within 
                the specified grace period outlined in your service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How to Request a Refund</h2>
              <p>
                To request a refund, please contact our customer support team with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your order or transaction ID</li>
                <li>The date of purchase</li>
                <li>A detailed reason for your refund request</li>
                <li>Any relevant documentation or evidence</li>
              </ul>
              <p className="mt-3">
                We will review your request and respond within 5-7 business days with our decision.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Processing</h2>
              <p>
                Once a refund is approved, we will process it within 10-14 business days. 
                Refunds will be credited to the original payment method used for the purchase.
              </p>
              <p className="mt-3">
                Please note that your financial institution may take additional time to post the credit to your account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Cancellations</h2>
              <p>
                You may cancel services at any time by contacting our support team. Cancellations are effective 
                at the end of the current billing period unless otherwise specified.
              </p>
              <p className="mt-3">
                Upon cancellation, you will not be charged for the next billing period. 
                No refunds will be issued for partially used billing periods unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Non-Refundable Items</h2>
              <p>
                The following are generally non-refundable:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Services that have been fully delivered and substantially used</li>
                <li>Digital products that have been accessed or downloaded</li>
                <li>Custom or personalized services</li>
                <li>Consultation services that have been provided</li>
                <li>Promotional items or discounted services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Returns and Exchanges</h2>
              <p>
                For physical products, returns must be made in accordance with our returns process. 
                Products should be in original condition with all documentation and packaging.
              </p>
              <p className="mt-3">
                We offer exchanges for defective or damaged products within 30 days of purchase.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Subscription Refunds</h2>
              <p>
                Subscription services may be cancelled at any time. You will not be charged for renewal, 
                but refunds for partially used subscription periods are not available.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Exceptional Circumstances</h2>
              <p>
                We reserve the right to consider refund requests on a case-by-case basis for exceptional circumstances, 
                such as technical failures, errors on our part, or service quality issues.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Amendments</h2>
              <p>
                We reserve the right to modify this Refund & Cancellation Policy at any time. 
                Changes will be effective immediately upon posting to this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p>
                For refund requests or questions about this policy:
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
