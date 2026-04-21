import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Pricing & Packages | HMCTS Consulting",
  description: "Transparent pricing for hotel consulting services. View tiered engagement packages and à la carte services with flexible arrangements.",
}

export default function PricingPage() {
  const packages = [
    {
      name: "Assessment",
      subtitle: "For properties wanting a clear picture",
      price: "£4,500 - £8,500",
      duration: "4-6 weeks",
      description: "Comprehensive assessment of your operations, identifying opportunities and providing a roadmap for improvement.",
      features: [
        "Full operational audit",
        "Financial performance analysis",
        "Staff capability assessment",
        "Market positioning review",
        "Detailed findings report",
        "Strategic recommendations",
        "Implementation roadmap",
      ],
      cta: "Request Assessment",
      highlight: false,
    },
    {
      name: "Operational Program",
      subtitle: "For properties ready to transform",
      price: "£15,000 - £35,000",
      duration: "3-6 months",
      description: "Hands-on implementation of operational improvements with embedded support, staff training, and system optimization.",
      features: [
        "Initial assessment",
        "Strategic planning",
        "On-site implementation support (weekly)",
        "Staff training programs",
        "Process documentation",
        "Performance tracking & reporting",
        "Transition support",
        "3-month results review",
      ],
      cta: "Explore Program",
      highlight: true,
    },
    {
      name: "Full Transformation",
      subtitle: "For multi-unit or complex operations",
      price: "£35,000 - £75,000+",
      duration: "6-12 months",
      description: "Comprehensive transformation including strategy development, implementation across all departments, leadership coaching, and sustained change management.",
      features: [
        "Discovery & strategy development",
        "Full operational transformation",
        "Weekly on-site support",
        "Comprehensive staff training",
        "Leadership coaching program",
        "Change management support",
        "Technology integration guidance",
        "Monthly reporting & adjustments",
        "Sustainability planning",
      ],
      cta: "Request Consultation",
      highlight: false,
    },
  ]

  const alacarte = [
    {
      service: "Strategic Audit",
      description: "Assessment of specific operational areas (F&B, Housekeeping, Front Desk, etc.)",
      price: "£2,000 - £5,000",
    },
    {
      service: "Staff Training Program",
      description: "Customized training for specific departments or skills (service excellence, sales, management)",
      price: "£1,500 - £8,000",
    },
    {
      service: "Interim Management",
      description: "Temporary management support during transitions, crises, or vacancy periods",
      price: "£2,500 - £4,000/week",
    },
    {
      service: "Process Documentation",
      description: "Development of SOP manuals, training materials, and systems documentation",
      price: "£3,000 - £10,000",
    },
    {
      service: "Performance Coaching",
      description: "One-on-one coaching for general managers, department heads, or leadership teams",
      price: "£1,500 - £3,000/session",
    },
    {
      service: "Systems Optimization",
      description: "Review and optimization of PMS, booking systems, and operational technology",
      price: "£2,500 - £7,500",
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
            <h1 className="text-5xl font-bold mb-4 text-balance">Investment in Your Success</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Flexible engagement models tailored to your property size, needs, and budget. No hidden fees. No surprises.
            </p>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Engagement Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden transition transform hover:scale-105 ${
                    pkg.highlight
                      ? "bg-gradient-to-br from-teal-500 to-emerald-600 text-white ring-2 ring-teal-300 shadow-xl md:scale-105"
                      : "bg-white border border-gray-200 text-gray-900"
                  }`}
                >
                  <div className="p-8">
                    {pkg.highlight && (
                      <Badge className="mb-4 bg-white text-teal-600 border-0">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className={`text-sm mb-6 ${pkg.highlight ? "text-teal-50" : "text-gray-600"}`}>
                      {pkg.subtitle}
                    </p>
                    <div className="mb-2">
                      <p className="text-4xl font-bold">{pkg.price}</p>
                      <p className={`text-sm ${pkg.highlight ? "text-teal-50" : "text-gray-600"}`}>
                        {pkg.duration}
                      </p>
                    </div>
                    <p className={`text-sm mb-8 ${pkg.highlight ? "text-teal-50" : "text-gray-600"}`}>
                      {pkg.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white" : "text-teal-600"}`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <Button
                        className={`w-full rounded-full font-semibold ${
                          pkg.highlight
                            ? "bg-white text-teal-600 hover:bg-gray-100"
                            : "bg-teal-600 text-white hover:bg-teal-700"
                        }`}
                      >
                        {pkg.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* À la carte Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">À La Carte Services</h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Looking for specific services? We offer flexible à la carte options for targeted improvements.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {alacarte.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.service}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{item.description}</p>
                  <p className="text-teal-600 font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Always Included */}
        <section className="py-20 bg-teal-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What&apos;s Always Included</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Clear Proposal",
                  description: "Detailed scope, deliverables, timeline, and investment before you commit",
                },
                {
                  title: "Expert Consultants",
                  description: "Experienced hospitality professionals with hands-on property backgrounds",
                },
                {
                  title: "Transparent Reporting",
                  description: "Regular progress updates and KPI tracking tied to your business goals",
                },
                {
                  title: "Knowledge Transfer",
                  description: "Training and documentation so your team owns the improvements long-term",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Notes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Pricing Notes</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-teal-600">
                <h3 className="font-bold text-gray-900 mb-2">Flexible Arrangements</h3>
                <p className="text-gray-700">
                  All prices are indicative and customized based on your property size, complexity, and specific needs. We can discuss monthly retainers, project-based fees, or performance-based pricing models.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-emerald-600">
                <h3 className="font-bold text-gray-900 mb-2">Travel & Expenses</h3>
                <p className="text-gray-700">
                  Consultant time and deliverables are included in above prices. Travel, accommodation, and third-party software/tools are typically quoted separately based on requirements.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 mb-2">No Hidden Fees</h3>
                <p className="text-gray-700">
                  We provide detailed proposals upfront with transparent fees. There are no surprise charges, scope creep additions, or hidden costs. If changes are needed, we discuss and agree in advance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-600">
                <h3 className="font-bold text-gray-900 mb-2">ROI Focus</h3>
                <p className="text-gray-700">
                  Most clients see ROI within 3-6 months. We focus on business outcomes (revenue growth, cost reduction, staff retention) that measurably exceed the investment in consulting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to discuss your needs?</h2>
            <p className="text-lg text-teal-50 mb-8">
              Let&apos;s schedule a consultation to explore which package or services fit your property best.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
