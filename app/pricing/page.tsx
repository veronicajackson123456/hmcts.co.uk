import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const packages = [
    {
      name: "Strategic Assessment",
      price: "£5,000 - £15,000",
      duration: "2-4 weeks",
      description: "Perfect for understanding your current state and improvement opportunities",
      features: [
        "On-site operational assessment",
        "Financial & profitability analysis",
        "Staffing & culture evaluation",
        "Technology & systems review",
        "Detailed findings report",
        "Executive recommendations",
        "No obligation to proceed further",
      ],
      cta: "Start with Assessment",
      highlight: false,
    },
    {
      name: "Operational Excellence Program",
      price: "£25,000 - £75,000",
      duration: "3-6 months",
      description: "Comprehensive operational transformation with measurable results",
      features: [
        "Everything in Assessment",
        "Process documentation & redesign",
        "Revenue optimisation strategy",
        "Cost reduction initiatives",
        "Staff training programs",
        "System implementation support",
        "Biweekly progress reporting",
        "3-6 months on-site/remote support",
        "Success metrics tracking",
      ],
      cta: "Get Started",
      highlight: true,
    },
    {
      name: "Full Transformation",
      price: "£75,000 - £150,000+",
      duration: "6-12 months",
      description: "End-to-end business transformation across all operational areas",
      features: [
        "Everything in Operational Program",
        "Leadership coaching & development",
        "Interim management capacity",
        "Multi-site rollout support",
        "Cultural change management",
        "Technology integration oversight",
        "Weekly implementation meetings",
        "Staff change management",
        "Sustained improvement tracking",
        "Long-term partnership optionality",
      ],
      cta: "Schedule Consultation",
      highlight: false,
    },
  ]

  const serviceLineItems = [
    {
      service: "Revenue Management Audit & Optimization",
      duration: "3-4 weeks",
      investment: "£8,000 - £15,000",
      outcomes: "15-25% revenue uplift, optimised pricing strategy, market positioning",
    },
    {
      service: "Staff Training Program",
      duration: "6-12 weeks",
      investment: "£5,000 - £20,000",
      outcomes: "Improved guest satisfaction, reduced turnover, stronger team performance",
    },
    {
      service: "Cost Reduction Initiative",
      duration: "4-8 weeks",
      investment: "£6,000 - £12,000",
      outcomes: "10-15% operational cost reduction, vendor negotiation support",
    },
    {
      service: "Interim General Manager",
      duration: "3-12 months",
      investment: "£4,000 - £8,000/month",
      outcomes: "Experienced leadership, business continuity, team stability",
    },
    {
      service: "Opening/Transition Support",
      duration: "8-16 weeks",
      investment: "£15,000 - £40,000",
      outcomes: "Successful opening, operational readiness, staff onboarding",
    },
    {
      service: "Systems Implementation",
      duration: "4-12 weeks",
      investment: "£8,000 - £30,000",
      outcomes: "PMS/Revenue system deployment, staff training, process optimisation",
    },
    {
      service: "Health & Safety Audit",
      duration: "2-3 weeks",
      investment: "£4,000 - £8,000",
      outcomes: "Compliance review, risk assessment, improvement roadmap",
    },
    {
      service: "Multi-Site Standardisation",
      duration: "12-24 weeks",
      investment: "£40,000 - £100,000",
      outcomes: "Standardised processes, brand consistency, shared best practices",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <Badge className="mb-6 bg-teal-100 text-teal-700 border-teal-300 rounded-full px-4 py-2">
              Transparent Pricing
            </Badge>
            <h1 className="text-5xl font-bold mb-4 text-balance">
              Consulting Investment
              <br />
              <span className="text-teal-600">That Delivers ROI</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Flexible engagement models tailored to your budget and business goals. Clear scope, no hidden fees, measurable results.
            </p>
          </div>
        </section>

        {/* Main Packages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Engagement Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 border-2 transition-all ${
                    pkg.highlight
                      ? "border-teal-500 bg-gradient-to-br from-teal-50 to-emerald-50 shadow-xl"
                      : "border-gray-200 bg-white hover:border-teal-300"
                  }`}
                >
                  {pkg.highlight && <Badge className="mb-4 bg-teal-600 text-white">Most Popular</Badge>}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-teal-600 font-semibold mb-1">{pkg.price}</p>
                  <p className="text-sm text-gray-600 mb-6">{pkg.duration}</p>
                  <p className="text-gray-700 mb-8 text-sm leading-relaxed">{pkg.description}</p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button
                      className={`w-full rounded-full py-6 font-semibold ${
                        pkg.highlight
                          ? "bg-teal-600 hover:bg-teal-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                    >
                      {pkg.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A La Carte Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">À La Carte Services</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
              Already have a roadmap? Select specific services you need. All engagements include consulting expertise, implementation support, and staff training.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {serviceLineItems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.service}</h4>
                      <p className="text-sm text-gray-600">{item.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-teal-600">{item.investment}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">Expected outcomes:</span> {item.outcomes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What's Always Included</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Consulting</h3>
                <ul className="space-y-4">
                  {[
                    "Strategic assessment & analysis",
                    "Detailed recommendations",
                    "Implementation roadmap",
                    "Project management",
                    "Regular progress reporting",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Team Support</h3>
                <ul className="space-y-4">
                  {[
                    "Staff training & coaching",
                    "Leadership development",
                    "Change management support",
                    "Knowledge transfer",
                    "Best practice documentation",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Notes */}
        <section className="py-20 bg-teal-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Notes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-teal-200">
                <h3 className="font-bold text-gray-900 mb-4">How We Price</h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>• Daily rates for consultant expertise</li>
                  <li>• Travel expenses billed separately (UK-based travel usually included)</li>
                  <li>• Fixed-fee options available for defined projects</li>
                  <li>• Monthly rates for interim management roles</li>
                  <li>• Volume discounts for multi-month engagements</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 border border-teal-200">
                <h3 className="font-bold text-gray-900 mb-4">Flexible Arrangements</h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>• Milestone-based payment schedules</li>
                  <li>• Hybrid models (part-time + project work)</li>
                  <li>• Phased implementations to manage budget</li>
                  <li>• ROI-based incentives for certain engagements</li>
                  <li>• Contact us to discuss your specific needs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Focus */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Your Investment, Our Focus</h2>
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-12 border border-teal-200">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-5xl font-bold text-teal-600 mb-2">24%</p>
                  <p className="font-semibold text-gray-900 mb-1">Average Revenue Growth</p>
                  <p className="text-sm text-gray-700">From consulting engagements</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-teal-600 mb-2">12%</p>
                  <p className="font-semibold text-gray-900 mb-1">Average Margin Improvement</p>
                  <p className="text-sm text-gray-700">Through cost optimization</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-teal-600 mb-2">3-6mo</p>
                  <p className="font-semibold text-gray-900 mb-1">Typical ROI Timeline</p>
                  <p className="text-sm text-gray-700">Measurable results emerge</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-12 text-center">
                We're committed to delivering measurable ROI. Our pricing is competitive, our scope is clear, and our focus is on creating financial value for your business. Let's discuss how we can help.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Discuss Your Investment?</h2>
            <p className="text-xl mb-8 text-teal-50">
              Every hotel is different. Let's talk about your specific situation and create a customised proposal that fits your budget and goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold">
                  Get a Custom Quote
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full font-semibold bg-transparent"
                >
                  View FAQ
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
