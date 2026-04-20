import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Lock, Shield, CheckCircle, Database } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Security & Data Protection | HMCTS",
  description: "HMCTS security practices, GDPR compliance, and data protection measures.",
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Security & Data Protection</h1>
            <p className="text-xl text-green-100 max-w-3xl">
              Your data security is our highest priority. HMCTS complies with GDPR and uses industry-standard encryption protocols.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Commitment to Data Protection</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                HMCTS protects client data in line with GDPR and UK data protection legislation. We understand that your business information is sensitive, and we implement robust measures to safeguard it at every stage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to transparency about how we collect, store, and use data. Our full privacy policy is available on our legal documentation page.
              </p>
            </div>

            {/* Key Protections */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Security Measures</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-green-200 rounded-xl p-8 bg-green-50">
                  <div className="flex items-start gap-4 mb-4">
                    <Lock className="w-8 h-8 text-green-600 shrink-0 mt-1" />
                    <h3 className="text-2xl font-bold text-gray-900">Encryption</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span><strong>HTTPS & TLS:</strong> All communications between your device and our systems use industry-standard encryption.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span><strong>Data at Rest:</strong> All stored data is encrypted using AES-256 or equivalent standards.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span><strong>End-to-End:</strong> Sensitive information remains encrypted throughout transmission and storage.</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-blue-200 rounded-xl p-8 bg-blue-50">
                  <div className="flex items-start gap-4 mb-4">
                    <Database className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                    <h3 className="text-2xl font-bold text-gray-900">Data Storage</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Secure Servers:</strong> Data is stored on secure, regularly maintained servers.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Access Controls:</strong> Strict role-based access ensures only authorised personnel can view sensitive data.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Backups:</strong> Regular backups protect against data loss or system failures.</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-purple-200 rounded-xl p-8 bg-purple-50">
                  <div className="flex items-start gap-4 mb-4">
                    <Shield className="w-8 h-8 text-purple-600 shrink-0 mt-1" />
                    <h3 className="text-2xl font-bold text-gray-900">Access & Security</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                      <span><strong>Multi-Factor Authentication:</strong> Where applicable, we require multiple verification methods.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                      <span><strong>Secure Passwords:</strong> Passwords are hashed and salted using industry-standard algorithms.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                      <span><strong>Session Management:</strong> Secure session handling prevents unauthorised access to accounts.</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-orange-200 rounded-xl p-8 bg-orange-50">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="w-8 h-8 text-orange-600 shrink-0 mt-1" />
                    <h3 className="text-2xl font-bold text-gray-900">Monitoring & Compliance</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                      <span><strong>Security Audits:</strong> Regular assessments ensure our systems meet current security standards.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                      <span><strong>Incident Response:</strong> We maintain a security incident response plan.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                      <span><strong>Compliance:</strong> Full GDPR, UK GDPR, and industry regulation compliance.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* GDPR Section */}
            <div className="mb-16 bg-emerald-50 border border-emerald-200 rounded-xl p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">GDPR Compliance</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Data Controller</h3>
                  <p className="text-gray-700">
                    HMCTS Ltd is the data controller for all personal data processed during our engagement with you.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Your Rights</h3>
                  <p className="text-gray-700 mb-4">
                    Under GDPR, you have the right to:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Access your personal data</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Correct inaccurate data</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Request erasure ("right to be forgotten")</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Restrict or object to processing</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Request data portability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Protection Officer */}
            <div className="mb-16 bg-blue-50 border border-blue-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Protection Officer</h2>
              <p className="text-gray-700 mb-6">
                We are committed to transparent data handling. If you have concerns about how we process your data or wish to exercise your GDPR rights, please contact our Data Protection Officer:
              </p>
              <div className="space-y-3">
                <p className="text-gray-900">
                  <span className="font-semibold">Email:</span> <a href="mailto:dpo@hmcts.co.uk" className="text-blue-600 hover:underline">dpo@hmcts.co.uk</a>
                </p>
                <p className="text-gray-900">
                  <span className="font-semibold">General Contact:</span> <a href="mailto:info@hmcts.co.uk" className="text-blue-600 hover:underline">info@hmcts.co.uk</a>
                </p>
                <p className="text-gray-900">
                  <span className="font-semibold">Phone:</span> <a href="tel:+18459047626" className="text-blue-600 hover:underline">+1 (845) 904-7626</a>
                </p>
              </div>
            </div>

            {/* Breach Notification */}
            <div className="mb-16 bg-red-50 border border-red-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Breach Notification</h2>
              <p className="text-gray-700 mb-4">
                In the unlikely event of a data breach, we are committed to compliance with GDPR notification requirements. We will notify affected individuals without undue delay if a breach is likely to result in high risk to their rights and freedoms.
              </p>
              <p className="text-gray-700">
                We maintain a formal incident response procedure to ensure swift and appropriate action in the event of any security incident.
              </p>
            </div>

            {/* Security Best Practices */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">How You Can Help Protect Your Data</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Use Strong Passwords</p>
                    <p className="text-gray-700">Create unique, complex passwords and change them regularly.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Enable Multi-Factor Authentication</p>
                    <p className="text-gray-700">Use additional verification methods when available.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Verify Communications</p>
                    <p className="text-gray-700">Always verify requests for sensitive information by calling our verified phone number.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Keep Software Updated</p>
                    <p className="text-gray-700">Maintain current versions of your operating system and applications.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* More Information */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn More</h3>
              <p className="text-gray-700 mb-6">
                For more detailed information about our security practices and data protection policies, please review our full privacy and legal documentation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/legal/privacy">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                    Privacy Policy
                  </Button>
                </Link>
                <Link href="/legal/data-protection">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                    Data Protection Policy
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 rounded-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
