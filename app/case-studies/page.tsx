import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Target, Briefcase } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Client Evidence & Case Studies | HMCTS",
  description: "Real-world examples of HMCTS consulting, training, and management support results.",
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Mid-Market Hotel Turnaround",
      client: "Client A — Independent 80-room hotel",
      challenge:
        "Property was underperforming with high staff turnover and inconsistent service quality.",
      engagement: "6-month interim management + operational consulting",
      results: [
        "Revenue increased by 24% YoY",
        "Staff turnover reduced from 45% to 18%",
        "Guest satisfaction scores improved by 31 points",
        "Net Promoter Score (NPS) increased from 35 to 67",
      ],
      keyActivities:
        "Restructured operations, introduced staff training programmes, implemented new revenue management processes.",
      permission: "Permission to use anonymised information granted.",
    },
    {
      title: "Pre-Opening Consultancy — New Boutique Property",
      client: "Client B — Boutique hotel group (40-room property)",
      challenge:
        "First property for this operator; needed end-to-end support from concept to opening.",
      engagement: "Pre-opening management + SOP development + staff training",
      results: [
        "Delivered on-time and on-budget opening",
        "Achieved 68% occupancy by month 3 (industry average: 52%)",
        "Staff trained to operational standard before opening",
        "Established systems supporting scalability for future properties",
      ],
      keyActivities:
        "Designed all operational procedures, recruited and trained management team, established vendor relationships, executed soft opening.",
      permission: "Permission to use anonymised information granted.",
    },
    {
      title: "Revenue Optimization for Multi-Unit Group",
      client: "Client C — 5-property independent hotel group",
      challenge:
        "Inconsistent revenue management practices across properties; revenue underperformance vs. comparable properties.",
      engagement: "Revenue consulting + staff training across all properties",
      results: [
        "Average RevPAR increased by 18% across portfolio",
        "Revenue per occupied room improved by £15-22 per night",
        "Achieved better OCC/ADR balance without sacrificing margin",
        "Established centralised yield management function",
      ],
      keyActivities:
        "Conducted revenue audits, aligned pricing strategies, trained revenue teams, implemented centralised systems.",
      permission: "Permission to use anonymised information granted.",
    },
    {
      title: "Staff Development Program for Boutique Group",
      client: "Client D — 3-property design hotel group",
      challenge:
        "High-quality brand positioning but staff training inconsistent; guest experience varied by property.",
      engagement: "Leadership and service excellence training program (12 months)",
      results: [
        "All 48 team members completed accredited training",
        "Guest feedback scores increased by 26%",
        "Staff engagement scores improved from 58 to 78",
        "Reduced staff turnover by 35%",
      ],
      keyActivities:
        "Developed bespoke training curriculum, delivered on-site workshops, mentored management teams, implemented feedback systems.",
      permission: "Permission to use anonymised information granted.",
    },
    {
      title: "Health & Safety Audit & Remediation",
      client: "Client E — 120-room independent hotel",
      challenge:
        "Urgent H&S audit required before major renovation; compliance gaps identified.",
      engagement: "Comprehensive H&S audit + remediation program + staff training",
      results: [
        "All H&S gaps successfully remediated",
        "Achieved 100% compliance certification",
        "Zero incidents during renovation phase",
        "Staff H&S competency assessed and validated",
      ],
      keyActivities:
        "Conducted full audit, created remediation plan, trained staff on new procedures, implemented monitoring systems.",
      permission: "Permission to use anonymised information granted.",
    },
    {
      title: "Interim Management During Leadership Transition",
      client: "Client F — 95-room full-service hotel",
      challenge:
        "GM unexpectedly departed mid-year; needed immediate leadership continuity during period of uncertainty.",
      engagement: "3-month interim General Manager placement",
      results: [
        "Maintained operational standards during transition",
        "Revenue remained stable despite leadership change",
        "Successfully recruited permanent GM",
        "Team morale preserved and trust maintained",
      ],
      keyActivities:
        "Day-to-day operational management, team leadership, financial control, liaison with ownership on transition plan.",
      permission: "Permission to use anonymised information granted.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Client Evidence & Case Studies</h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              Real-world examples of how HMCTS delivers measurable results across consulting, training, and interim management engagements.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg p-8 border border-emerald-200">
                <p className="text-4xl font-bold text-emerald-600 mb-2">6+</p>
                <p className="text-gray-700 font-semibold">Active Projects</p>
                <p className="text-sm text-gray-600">Completed in last 24 months</p>
              </div>
              <div className="bg-white rounded-lg p-8 border border-emerald-200">
                <p className="text-4xl font-bold text-emerald-600 mb-2">24%</p>
                <p className="text-gray-700 font-semibold">Avg Revenue Growth</p>
                <p className="text-sm text-gray-600">Across consulting clients</p>
              </div>
              <div className="bg-white rounded-lg p-8 border border-emerald-200">
                <p className="text-4xl font-bold text-emerald-600 mb-2">18%</p>
                <p className="text-gray-700 font-semibold">RevPAR Improvement</p>
                <p className="text-sm text-gray-600">Multi-unit portfolio optimisation</p>
              </div>
              <div className="bg-white rounded-lg p-8 border border-emerald-200">
                <p className="text-4xl font-bold text-emerald-600 mb-2">78+</p>
                <p className="text-gray-700 font-semibold">Staff Trained</p>
                <p className="text-sm text-gray-600">Across all programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Recent Engagements</h2>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-xl p-10 hover:shadow-xl transition"
                >
                  {/* Header */}
                  <div className="mb-6 pb-6 border-b border-gray-300">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{study.title}</h3>
                    <p className="text-lg font-semibold text-gray-700">{study.client}</p>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Left Column */}
                    <div>
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <Target className="w-6 h-6 text-teal-600" />
                          Challenge
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <Briefcase className="w-6 h-6 text-teal-600" />
                          Engagement
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{study.engagement}</p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <TrendingUp className="w-6 h-6 text-emerald-600" />
                          Measurable Results
                        </h4>
                        <ul className="space-y-3">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex gap-3 text-gray-700">
                              <span className="text-emerald-600 font-bold mt-1">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Key Activities */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Users className="w-6 h-6 text-teal-600" />
                      Key Activities
                    </h4>
                    <p className="text-gray-700">{study.keyActivities}</p>
                  </div>

                  {/* Permission */}
                  <div className="text-sm text-gray-600 italic border-t border-gray-200 pt-4">
                    {study.permission}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Results */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why We Deliver Results</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert-Led</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team brings decades of hands-on hospitality experience. We understand operational realities and design solutions that actually work.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bespoke Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  We don't apply cookie-cutter solutions. Every engagement is tailored to your specific challenges, market position, and team capability.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Measurable Outcomes</h3>
                <p className="text-gray-700 leading-relaxed">
                  We focus on quantifiable improvements: revenue uplift, cost efficiency, team performance, and sustainable operational change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Want to Discuss Your Challenge?</h2>
            <p className="text-lg text-gray-700 mb-8">
              These are just a few examples of the results we've achieved. Every property and business is different. Let's explore how HMCTS can support your specific goals.
            </p>
            <Link href="/contact">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>

        {/* Confidentiality Notice */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center text-sm text-gray-600 bg-white rounded-lg p-6 border border-gray-200">
              <p>
                Client names and specific details in these case studies have been anonymised to protect client confidentiality. Full references and detailed information are available upon request
                via our <a href="/for-partners" className="text-teal-600 hover:underline font-semibold">For Banks & Partners</a> compliance hub.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
