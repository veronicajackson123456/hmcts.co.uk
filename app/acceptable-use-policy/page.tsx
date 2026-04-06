import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AcceptableUsePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Acceptable Use Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Acceptable Use Policy ("Policy") sets forth the rules and expectations for using the website located
              at hospitalitysoftwaresolutions.com (the "Site") and services provided by HMCTS ("we", "us", "our", and
              "Company"). By accessing or using the Site, you agree to comply with this Policy. Violation of this Policy
              may result in termination of your account and access to the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Prohibited Activities</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to engage in any of the following activities:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Illegal Activities:</strong> Violating any local, state, national, or international law or
                regulation.
              </li>
              <li className="leading-relaxed">
                <strong>Fraud & Misrepresentation:</strong> Engaging in fraudulent activities, making false claims, or
                misrepresenting your identity.
              </li>
              <li className="leading-relaxed">
                <strong>Harassment & Abuse:</strong> Harassing, bullying, threatening, or abusing other users or
                employees.
              </li>
              <li className="leading-relaxed">
                <strong>Spam & Unsolicited Content:</strong> Sending spam, unsolicited advertisements, or bulk messages.
              </li>
              <li className="leading-relaxed">
                <strong>Malicious Software:</strong> Uploading, transmitting, or distributing viruses, malware, or other
                harmful code.
              </li>
              <li className="leading-relaxed">
                <strong>Unauthorized Access:</strong> Attempting to access, modify, or disable any part of the Site
                without authorization.
              </li>
              <li className="leading-relaxed">
                <strong>Intellectual Property Violations:</strong> Infringing on copyrights, trademarks, patents, or
                other intellectual property rights.
              </li>
              <li className="leading-relaxed">
                <strong>Phishing & Social Engineering:</strong> Attempting to deceive users or collect sensitive
                information through phishing or social engineering.
              </li>
              <li className="leading-relaxed">
                <strong>Automated Access:</strong> Using bots, scrapers, or other automated tools to access or download
                content without permission.
              </li>
              <li className="leading-relaxed">
                <strong>Denial of Service Attacks:</strong> Attempting to disrupt the availability or functionality of
                the Site.
              </li>
              <li className="leading-relaxed">
                <strong>Adult Content:</strong> Uploading, sharing, or promoting sexually explicit, obscene, or
                inappropriate content.
              </li>
              <li className="leading-relaxed">
                <strong>Discrimination & Hate Speech:</strong> Posting content that promotes discrimination, hatred, or
                violence against individuals or groups.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">User-Generated Content</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If the Site allows you to submit, post, or share content, you are solely responsible for such content. You
              grant HMCTS a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute
              your content. You warrant that you own or have the necessary rights to all content you submit and that it
              does not violate any laws or third-party rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Account Security</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              You are responsible for maintaining the confidentiality of your login credentials and for all activities
              conducted under your account. You agree to notify us immediately of any unauthorized access or use of your
              account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Monitoring & Enforcement</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to monitor user activity on the Site and investigate potential violations of this
              Policy. We may remove content, suspend or terminate accounts, and take legal action as necessary to enforce
              this Policy and protect the Site, our users, and our rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Reporting Violations</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you become aware of any violation of this Policy, please report it to us immediately at
              info@hospitalitysoftwaresolutions.com. We will investigate all reports and take appropriate action.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Consequences of Violation</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Violations of this Policy may result in:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Removal of content</li>
              <li>Suspension or termination of your account</li>
              <li>Loss of access to the Site and its services</li>
              <li>Legal action and liability for damages</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>

            <p className="text-gray-700 leading-relaxed">
              We may update this Acceptable Use Policy from time to time. Any changes will be posted on this page. Your
              continued use of the Site following any changes constitutes your acceptance of the updated Policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
