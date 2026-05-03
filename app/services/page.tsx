import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Server, TrendingUp, Workflow, Star, GraduationCap, Building2, Headphones, Settings } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-700 border-emerald-300 rounded-full px-4 py-2">
              Our Services
            </Badge>
            <h1 className="text-5xl font-bold mb-4 text-balance">
              Comprehensive <span className="text-teal-600">Hospitality Solutions</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From consultation to implementation, we provide end-to-end solutions to help your hospitality business
              thrive in today's competitive market.
            </p>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Consultation Services */}
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-10 border border-teal-200 hover:shadow-xl transition">
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Consultation Services</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Expert guidance to help you choose the right technology solutions for your property. We analyze your
                  operations and recommend tailored solutions.
                </p>
                <ul className="space-y-3">
                  {[
                    "Property needs assessment",
                    "Technology stack recommendations",
                    "Budget planning and ROI analysis",
                    "Implementation roadmap",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Training & Certification */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-10 border border-purple-200 hover:shadow-xl transition">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Training & Certification</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Comprehensive training programs to ensure your team can maximize the potential of your new systems and
                  deliver exceptional service.
                </p>
                <ul className="space-y-3">
                  {[
                    "On-site and remote training sessions",
                    "Staff certification programs",
                    "Custom training materials",
                    "Ongoing support and refresher courses",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hospitality Management */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 border border-blue-200 hover:shadow-xl transition">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Hospitality Management</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Complete property management solutions including PMS, HMS, and revenue optimization tools to
                  streamline your operations.
                </p>
                <ul className="space-y-3">
                  {[
                    "Property Management Systems (PMS)",
                    "Hotel Management Systems (HMS)",
                    "Channel management integration",
                    "Guest experience optimization",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Integration */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-10 border border-orange-200 hover:shadow-xl transition">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Technology Integration</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Seamless integration of new systems with your existing technology infrastructure for a unified
                  operational experience.
                </p>
                <ul className="space-y-3">
                  {[
                    "System integration services",
                    "API development and connectivity",
                    "Data migration and synchronization",
                    "Legacy system modernization",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Technology Solutions</h2>
              <p className="text-lg text-gray-600">Cutting-edge tools designed for the hospitality industry</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Server className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Property Management Systems</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Complete PMS solutions for reservations, check-ins, housekeeping, billing, and reporting.
                </p>
                <Button variant="outline" className="w-full rounded-full bg-transparent">
                  Learn More
                </Button>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hotel Management Systems</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Comprehensive HMS for multi-property management with centralized control and analytics.
                </p>
                <Button variant="outline" className="w-full rounded-full bg-transparent">
                  Learn More
                </Button>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Revenue Optimization</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Advanced revenue management tools to maximize occupancy and profitability.
                </p>
                <Button variant="outline" className="w-full rounded-full bg-transparent">
                  Learn More
                </Button>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Workflow className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Channel Management</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Synchronize rates and availability across all booking channels in real-time.
                </p>
                <Button variant="outline" className="w-full rounded-full bg-transparent">
                  Learn More
                </Button>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Guest Experience Tools</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Mobile check-in, digital concierge, and personalized guest communication platforms.
                </p>
                <Button variant="outline" className="w-full rounded-full bg-transparent">
                  Learn More
                </Button>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Staff Training Programs</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Comprehensive training modules and certification programs for your hospitality team.
                </p>
                <Button variant="outline" className="w-full rounded-full bg-transparent">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-teal-50">
              Let's discuss how our services can help transform your hospitality business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent"
              >
                View Our Solutions
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
