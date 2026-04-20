import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, Users, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Our Services | HMCTS | Hotel Management Consulting & Training",
  description: "Consultancy, training, interim management, and audits for hospitality businesses.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <Badge className="mb-6 bg-teal-100 text-teal-700 border-teal-300 rounded-full px-4 py-2">
              Our Services
            </Badge>
            <h1 className="text-5xl font-bold mb-4 text-balance">
              Consulting, Training, <span className="text-teal-600">& Management Support</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From operational audits to interim leadership, we deliver bespoke solutions tailored to your hospitality business.
            </p>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="space-y-16">
              {/* Consultancy */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">Consultancy</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Our consultancy services help you diagnose operational challenges, develop sustainable solutions, and position your hotel for growth.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Operational Audits</p>
                        <p className="text-sm text-gray-600">Comprehensive assessment of systems, processes, and performance.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">SOP Development</p>
                        <p className="text-sm text-gray-600">Bespoke standard operating procedures for consistency and quality.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Pre-Opening Management</p>
                        <p className="text-sm text-gray-600">From concept to launch—we manage every operational detail.</p>
                      </div>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full flex items-center gap-2">
                      Discuss Your Needs
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-10 border border-teal-200 h-full">
                  <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg border border-teal-100">
                      <p className="font-semibold text-gray-900 mb-1">Revenue Optimisation</p>
                      <p className="text-sm text-gray-600">Unlock new revenue streams and improve profitability.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-teal-100">
                      <p className="font-semibold text-gray-900 mb-1">Staff Structure Review</p>
                      <p className="text-sm text-gray-600">Optimal team configurations for your property size and market.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-teal-100">
                      <p className="font-semibold text-gray-900 mb-1">Quality Assurance</p>
                      <p className="text-sm text-gray-600">Consistent delivery of guest and operational standards.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-10 border border-purple-200 h-full order-2 md:order-1">
                  <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg border border-purple-100">
                      <p className="font-semibold text-gray-900 mb-1">Front-of-House Excellence</p>
                      <p className="text-sm text-gray-600">Guest service, communication, and problem-solving skills.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-purple-100">
                      <p className="font-semibold text-gray-900 mb-1">Housekeeping & Facilities</p>
                      <p className="text-sm text-gray-600">Standards, efficiency, and equipment operation.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-purple-100">
                      <p className="font-semibold text-gray-900 mb-1">Revenue & Leadership</p>
                      <p className="text-sm text-gray-600">Management skills, commercial acumen, and team development.</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">Training</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Your team is your competitive advantage. We design practical, engaging training programmes that build capability and confidence.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Bespoke Delivery</p>
                        <p className="text-sm text-gray-600">On-site and remote options tailored to your team's needs.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Certification</p>
                        <p className="text-sm text-gray-600">Recognised credentials in hospitality management and service.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Ongoing Support</p>
                        <p className="text-sm text-gray-600">Refresher courses and follow-up coaching included.</p>
                      </div>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center gap-2">
                      Develop Your Team
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Interim Management */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">Interim Management</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    When you need experienced leadership on the ground, our interim managers provide hands-on support during transitions, crises, or planned absences.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Acting General Manager</p>
                        <p className="text-sm text-gray-600">Full P&L responsibility and operational leadership.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Revenue & Operations Director</p>
                        <p className="text-sm text-gray-600">Commercial optimisation and process improvements.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Crisis Management</p>
                        <p className="text-sm text-gray-600">Rapid stabilisation and recovery planning.</p>
                      </div>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-2">
                      Find the Right Manager
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 border border-blue-200 h-full">
                  <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg border border-blue-100">
                      <p className="font-semibold text-gray-900 mb-1">Flexible Duration</p>
                      <p className="text-sm text-gray-600">Days to months, tailored to your timeline.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-blue-100">
                      <p className="font-semibold text-gray-900 mb-1">Seamless Integration</p>
                      <p className="text-sm text-gray-600">Quick onboarding and immediate impact.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-blue-100">
                      <p className="font-semibold text-gray-900 mb-1">Knowledge Transfer</p>
                      <p className="text-sm text-gray-600">Coaching your team for sustainable improvements.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Audits & Compliance */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-10 border border-green-200 h-full order-2 md:order-1">
                  <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg border border-green-100">
                      <p className="font-semibold text-gray-900 mb-1">Health & Safety Audits</p>
                      <p className="text-sm text-gray-600">Compliance with UK and international standards.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-green-100">
                      <p className="font-semibold text-gray-900 mb-1">Regulatory Readiness</p>
                      <p className="text-sm text-gray-600">Preparation for inspections and certifications.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-green-100">
                      <p className="font-semibold text-gray-900 mb-1">Risk Management</p>
                      <p className="text-sm text-gray-600">Identification and mitigation of operational risks.</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">Audits & Compliance</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Comprehensive audits ensure your operations meet legal, safety, and industry standards. We identify gaps and recommend practical solutions.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Independent Assessment</p>
                        <p className="text-sm text-gray-600">Objective evaluation by experienced auditors.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Detailed Reporting</p>
                        <p className="text-sm text-gray-600">Clear findings with actionable recommendations.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Follow-Up Support</p>
                        <p className="text-sm text-gray-600">Guidance through implementation of improvements.</p>
                      </div>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full flex items-center gap-2">
                      Schedule an Audit
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose HMCTS */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose HMCTS?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
                <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Expert-Led</h3>
                <p className="text-sm text-gray-600">Decades of combined hospitality experience across all operations areas.</p>
              </div>
              <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
                <TrendingUp className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Results-Focused</h3>
                <p className="text-sm text-gray-600">Measurable improvements in revenue, operations, and team performance.</p>
              </div>
              <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
                <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Bespoke Solutions</h3>
                <p className="text-sm text-gray-600">No one-size-fits-all approach—we tailor every engagement to your needs.</p>
              </div>
              <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
                <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-sm text-gray-600">Trusted by independent hotels, boutique groups, and hospitality schools.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl mb-8 text-teal-50">
              Let's discuss how HMCTS can support your hospitality business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
