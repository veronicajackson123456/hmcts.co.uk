import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AccessibilityStatementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Accessibility Statement</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              HMCTS is committed to ensuring that the website located at hospitalitysoftwaresolutions.com (the "Site")
              is accessible to all individuals, regardless of ability or disability. We strive to meet or exceed the Web
              Content Accessibility Guidelines (WCAG) 2.1 Level AA standards established by the World Wide Web Consortium
              (W3C).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Accessibility Commitment</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We are committed to providing an inclusive digital experience by:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Ensuring keyboard navigation throughout the Site</li>
              <li className="leading-relaxed">Providing alternative text for images and visual content</li>
              <li className="leading-relaxed">Using clear and descriptive headings and labels</li>
              <li className="leading-relaxed">Maintaining sufficient color contrast for readability</li>
              <li className="leading-relaxed">Ensuring compatibility with screen readers and assistive technologies</li>
              <li className="leading-relaxed">Using semantic HTML for proper document structure</li>
              <li className="leading-relaxed">Providing captions and transcripts for multimedia content</li>
              <li className="leading-relaxed">Testing regularly for accessibility compliance</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Supported Accessibility Features</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Screen Reader Support</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Site is designed to work with popular screen readers such as JAWS, NVDA, and VoiceOver. All content
              has been structured with proper semantic HTML to ensure compatibility.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Keyboard Navigation</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can navigate the entire Site using your keyboard alone. Use Tab to move forward and Shift+Tab to move
              backward through interactive elements. Press Enter or Space to activate links and buttons.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Text Resizing</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most browsers allow you to increase or decrease text size. You can typically use Ctrl++ to zoom in and
              Ctrl+- to zoom out (Cmd++ and Cmd+- on Mac).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Color Contrast</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We maintain sufficient color contrast ratios throughout the Site to ensure readability for users with color
              blindness or low vision.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Known Accessibility Issues</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              While we strive for full accessibility, there may be some areas of the Site that do not fully meet WCAG
              guidelines. We are actively working to address any known issues. If you encounter an accessibility barrier,
              please report it to us as described below.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Content</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site may contain links to and embedded content from third-party websites. We are not responsible for
              the accessibility of third-party content. We encourage you to contact the third-party providers directly
              regarding accessibility concerns.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Reporting Accessibility Issues</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> info@hospitalitysoftwaresolutions.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +1 (845) 904-7626
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Please provide as much detail as possible, including:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>The URL or page where you encountered the issue</li>
              <li>A description of the accessibility barrier</li>
              <li>The assistive technology or device you were using</li>
              <li>Steps to reproduce the issue</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              We will respond to all accessibility reports within 5 business days and work to resolve issues promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Technical Standards</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site aims to comply with the following technical standards:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
              <li>Section 508 of the Rehabilitation Act (in the United States)</li>
              <li>EN 301 549 (in the European Union)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Accessibility Tools & Resources</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For more information on web accessibility and how to use assistive technologies, visit:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>
                <a href="https://www.w3.org/WAI/" className="text-teal-600 hover:text-teal-700 underline">
                  Web Accessibility Initiative (WAI)
                </a>
              </li>
              <li>
                <a href="https://www.webaccessibility.com/" className="text-teal-600 hover:text-teal-700 underline">
                  WebAIM
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ongoing Improvements</h2>

            <p className="text-gray-700 leading-relaxed">
              We continuously evaluate and improve the accessibility of the Site. We welcome your feedback and are
              committed to making the Site as accessible as possible for all users.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
