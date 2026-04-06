import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Refund & Cancellation Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Refund and Cancellation Policy outlines the terms under which customers can request refunds,
              cancellations, and returns of services and products provided by HMCTS. By purchasing from us, you agree to
              the terms outlined in this policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Service-Based Refunds</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              HMCTS provides consulting, training, and advisory services. Our refund policy for services is as follows:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you are not satisfied with our services within 30 days of purchase, you may request a full refund. To
              qualify for this guarantee, you must:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Provide written notice of your request for a refund within 30 days</li>
              <li className="leading-relaxed">Clearly explain the reason for your dissatisfaction</li>
              <li className="leading-relaxed">Not have received substantially similar services from us previously</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Exclusions</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Refunds are not available for:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Custom or specialized services already delivered</li>
              <li>Services partially completed at the customer&apos;s request</li>
              <li>Services cancelled by the customer after 30 days</li>
              <li>Non-compliance with service requirements or terms</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Product Refunds</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For physical or digital products purchased from HMCTS:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Return Window</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Products may be returned within 30 days of purchase for a full refund, provided they are in their original
              condition and unopened. Digital products may not be refunded after download.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Return Process</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              To initiate a return:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                Contact us at info@hospitalitysoftwaresolutions.com with your order number and reason for return
              </li>
              <li className="leading-relaxed">
                Obtain a return authorization number from us
              </li>
              <li className="leading-relaxed">
                Ship the product back to us in its original packaging (shipping costs are the customer&apos;s responsibility)
              </li>
              <li className="leading-relaxed">
                Once received and inspected, we will process your refund within 5-10 business days
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Subscription Cancellations</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you have subscribed to ongoing services from HMCTS:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                You may cancel your subscription at any time by notifying us in writing
              </li>
              <li className="leading-relaxed">
                Cancellations take effect at the end of your current billing period
              </li>
              <li className="leading-relaxed">
                No refunds are issued for partial months or unused portions of a subscription
              </li>
              <li className="leading-relaxed">
                If you cancel within 14 days of initial purchase, you may be eligible for a pro-rata refund
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Payment Issues & Disputes</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you believe you have been charged in error or have questions about a charge, please contact us
              immediately. We will investigate your claim and take appropriate action.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Chargebacks & Disputes with Financial Institutions</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              By accepting our terms, you agree that any disputes regarding charges must be resolved directly with HMCTS
              before pursuing chargebacks or payment disputes with your financial institution. Pursuing a chargeback
              without first attempting to resolve the issue with us may result in:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Termination of your account</li>
              <li>Suspension of future services</li>
              <li>Legal action to recover chargeback fees and damages</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Non-Refundable Items</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The following purchases are generally non-refundable:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Completed consulting sessions or training events</li>
              <li>Downloaded or accessed digital content</li>
              <li>Services rendered at the customer&apos;s request</li>
              <li>Custom development or specialized projects</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Refund Processing Time</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Approved refunds will be processed within 5-10 business days. The funds will be returned to your original
              payment method. Depending on your financial institution, it may take an additional 3-5 business days for the
              credit to appear on your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Requesting a Refund</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              To request a refund, please contact us with the following information:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Order number or transaction ID</li>
              <li>Date of purchase</li>
              <li>Description of the product or service</li>
              <li>Reason for requesting a refund</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700">
                <strong>Contact:</strong> info@hospitalitysoftwaresolutions.com
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Special Circumstances</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you have special circumstances or believe your situation warrants an exception to this policy, please
              contact us to discuss. We may consider exceptions on a case-by-case basis at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>

            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify this Refund and Cancellation Policy at any time. Changes will be effective
              immediately upon posting to the Site. Your continued use of our services following any changes constitutes
              your acceptance of the updated policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
