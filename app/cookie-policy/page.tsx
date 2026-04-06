import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Cookie Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Cookie Policy explains how HMCTS ("we", "us", "our", and "our Company") uses cookies and similar
              tracking technologies on the website located at hospitalitysoftwaresolutions.com (the "Site"). By
              accessing or using the Site, you consent to the use of cookies as described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Are Cookies?</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Cookies are small text files that are placed on your computer, mobile device, or other electronic devices
              when you visit a website. They allow websites to recognize your device and store information about your
              preferences and behavior. Cookies can be either "persistent" (they remain on your device until deleted) or
              "session" (they are deleted when you close your browser).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Essential Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These cookies are necessary for the Site to function properly. They enable core functionality such as
              security, network management, and accessibility. These cookies cannot be disabled without affecting the
              functionality of the Site.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Performance & Analytics Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use cookies to understand how you interact with the Site, such as which pages you visit, how long you
              stay, and what actions you take. This information helps us improve our Site and user experience. These
              cookies may be provided by third-party analytics services such as Google Analytics.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Functional Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These cookies remember your preferences and choices, such as your language preference, login information,
              and customization settings. They allow us to provide a personalized experience on future visits.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Marketing & Advertising Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may use cookies to deliver targeted advertising content and measure the effectiveness of our marketing
              campaigns. These cookies may be shared with advertising partners and social media platforms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Cookies</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              In addition to our own cookies, we allow third parties (such as analytics providers, advertisers, and
              social media platforms) to place cookies on your device. These third-party cookies are subject to the
              privacy policies of those third parties. We recommend reviewing their privacy policies for more
              information about how they use cookies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Control Cookies</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Most web browsers allow you to control cookies through your browser settings. You can set your browser to
              refuse all cookies or to alert you when a cookie is being sent. However, if you disable cookies, some
              features of the Site may not function properly.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              For more information about cookies and how to manage them, visit:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>
                <a href="https://www.aboutcookies.org" className="text-teal-600 hover:text-teal-700 underline">
                  www.aboutcookies.org
                </a>
              </li>
              <li>
                <a href="https://www.allaboutcookies.org" className="text-teal-600 hover:text-teal-700 underline">
                  www.allaboutcookies.org
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Do Not Track Signals</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Some browsers include a "Do Not Track" feature. At this time, there is no industry standard for
              recognizing Do Not Track signals, and our Site does not respond to Do Not Track browser signals.
              However, you can use other tools to control cookies and tracking as described above.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Updates to This Policy</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our
              practices. Any changes will be posted on this page with an updated version date. Your continued use of the
              Site after such changes constitutes your acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>

            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Cookie Policy or our use of cookies, please contact us at
              info@hospitalitysoftwaresolutions.com or call +1 (845) 904-7626.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
