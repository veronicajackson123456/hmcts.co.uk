import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Globe } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About HMCTS | Hotel Management Consultants & Training Specialists",
  description: "HMCTS provides hotel management consulting, operational training, and bespoke management support across the UK and internationally.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About HMCTS</h1>
            <p className="text-xl text-teal-100 max-w-3xl">
              We're hotel management consultants and training specialists dedicated to transforming hospitality operations across the UK and internationally.
            </p>
          </div>
        </section>

        {/* Main About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  HMCTS provides hotel management consulting, operational training, and bespoke management support to hospitality clients across the UK and internationally. We specialise in pre-opening management, revenue optimisation, staff training, and interim leadership.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our core expertise spans independent hotels, boutique groups, and hospitality schools. Whether you're launching a new property, optimising existing operations, or developing your team's capabilities, we bring hands-on experience and proven methodologies to every engagement.
                </p>
                <Link href="/contact">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-12 border border-teal-200">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <Award className="w-8 h-8 text-teal-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Expert-Led</h3>
                      <p className="text-gray-700">Decades of combined hospitality experience across operations, revenue, and leadership.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Users className="w-8 h-8 text-teal-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Team-Focused</h3>
                      <p className="text-gray-700">We invest in your people through practical training and leadership development.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Globe className="w-8 h-8 text-teal-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">International Reach</h3>
                      <p className="text-gray-700">Proven track record with hospitality clients across multiple countries and markets.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Journey */}
            <div className="bg-gray-50 rounded-xl p-12 mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded on the belief that hospitality businesses thrive when operations, people, and systems work in harmony. We've built a reputation for delivering measurable results—from pre-opening turnarounds to sustainable operational improvements and effective team transformation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every engagement begins with a detailed assessment of your specific needs. We don't offer one-size-fits-all solutions; instead, we design bespoke strategies that align with your business goals, market position, and team capacity.
              </p>
            </div>

            {/* Service Areas */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What We Specialise In</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultancy</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Operational audits and gap analysis</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Standard Operating Procedures (SOP) development</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Pre-opening management and setup</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Training</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Front-of-house and guest service excellence</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Housekeeping and facilities management</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Revenue management and leadership courses</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Interim Management</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Acting General Manager placements</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Revenue and Operations Director support</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Crisis management and stabilisation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Audits & Compliance</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Health & safety support and readiness</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Hospitality regulatory compliance</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Standards certification and assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how HMCTS can support your hospitality business.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
