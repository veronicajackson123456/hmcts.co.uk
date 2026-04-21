import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Building, TrendingUp, Headphones, Sparkles, Check, X } from "lucide-react"
import Link from "next/link"

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <Badge className="mb-6 bg-teal-100 text-teal-700 border-teal-300 rounded-full px-4 py-2">
              ✨ The HMCTS Advantage
            </Badge>
            <h1 className="text-5xl font-bold mb-4 text-balance">
              Why Choose
              <br />
              <span className="text-teal-600">HMCTS?</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Strategic consulting designed specifically for hotel operators. We don't just recommend—we implement alongside your team and build lasting capability.
            </p>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-10 border border-teal-200">
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Hospitality-Focused Expertise</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We specialise in hotel operations, not general business consulting.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our consultants have lived in hotel environments. We understand occupancy pressures, seasonal volatility, labour challenges, and the real cost of operations. This isn't theoretical consulting—it's grounded in hospitality reality.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Hands-On Implementation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We don't leave you with a report—we implement alongside your team.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our consultants are embedded in your operation during implementation. We train your staff, guide decision-making, and ensure improvements stick. We're partners in execution, not just advisors.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-10 border border-purple-200">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Measurable Business Impact</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We focus on financial outcomes, not just operational improvements.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every engagement has clear KPIs tied to revenue, profitability, occupancy, or guest satisfaction. We track progress and report regularly. Success is measured against your goals, not ours.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-10 border border-orange-200">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Real Partnership Model</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We build capability in your team, not dependency on us.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our goal is to leave your team equipped to maintain and build on improvements independently. We train, mentor, and document everything. You own the results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">HMCTS vs. Other Approaches</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Different consulting models work for different needs. Here's how we compare:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white border-b-2 border-gray-300">
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Approach</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900">HMCTS</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900">Big Consulting Firms</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900">General Consultants</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900">DIY/Internal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Hospitality Expertise</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-600 inline" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 inline" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 inline" /></td>
                    <td className="px-6 py-4 text-center">Variable</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Implementation Support</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-600 inline" /></td>
                    <td className="px-6 py-4 text-center">Limited</td>
                    <td className="px-6 py-4 text-center">Limited</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-600 inline" /></td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Staff Training</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-600 inline" /></td>
                    <td className="px-6 py-4 text-center">Extra Cost</td>
                    <td className="px-6 py-4 text-center">Extra Cost</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-600 inline" /></td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Transparent Pricing</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-600 inline" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 inline" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-600 inline" /></td>
                    <td className="px-6 py-4 text-center">N/A</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Cost-Effective</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-600 inline" /></td>
                    <td className="px-6 py-4 text-center">Premium</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-600 inline" /></td>
                    <td className="px-6 py-4 text-center">Resource-Heavy</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Sustainability Focus</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-600 inline" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 inline" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 inline" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-600 inline" /></td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-semibold text-gray-900">Interim Management</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-emerald-600 inline" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 inline" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 inline" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 inline" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Sets HMCTS Apart</h2>
              <p className="text-lg text-gray-600">More reasons to choose HMCTS as your consultancy partner</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Industry Expertise",
                  description:
                    "Years of hands-on experience in hotel operations. We've managed properties, led teams, and solved real hospitality challenges.",
                },
                {
                  title: "Proven Track Record",
                  description: "Successful engagements across independent hotels, chains, and resorts. Real results: revenue growth, cost reduction, team improvements.",
                },
                {
                  title: "Bespoke Approach",
                  description:
                    "No cookie-cutter solutions. We understand your unique market, property type, and business model.",
                },
                {
                  title: "Embedded Partnership",
                  description:
                    "Our consultants work alongside your team during implementation. We're not just advisors—we're collaborators.",
                },
                {
                  title: "Capability Building",
                  description:
                    "We leave your team stronger. Training, documentation, and mentoring ensure sustainability beyond our engagement.",
                },
                {
                  title: "Transparent & Honest",
                  description: "Clear proposals, realistic timelines, honest assessment of challenges. No upselling or scope creep.",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Different Clients Choose HMCTS */}
        <section className="py-20 bg-teal-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Who Chooses HMCTS</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Independent Hotels</h3>
                <p className="text-gray-700 leading-relaxed">
                  Need expert guidance without the overhead of large corporate consultancies. We provide boutique, customised consulting at reasonable investment levels.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growing Hotel Groups</h3>
                <p className="text-gray-700 leading-relaxed">
                  Scaling across multiple properties? We help standardise operations, share best practices, and build consistency across your portfolio.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Underperforming Properties</h3>
                <p className="text-gray-700 leading-relaxed">
                  Facing operational or financial challenges? We diagnose root causes and implement solutions with hands-on support to turn things around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work with a Partner Who Gets Hospitality?</h2>
            <p className="text-xl mb-8 text-teal-50">
              Let's discuss your challenges and explore how HMCTS can help drive real business results for your property.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold">
                  Start a Conversation
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full font-semibold bg-transparent"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

