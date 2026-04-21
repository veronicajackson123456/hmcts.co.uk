'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqCategories = [
    {
      category: "About Our Services",
      questions: [
        {
          q: "What types of hotels do you work with?",
          a: "We work with independent hotels, boutique properties, chains, and resorts of all sizes. Our consulting approach is tailored to your property type, whether you're a luxury resort, budget hotel, or mid-scale property. We have expertise across different segments and understand the unique operational challenges each faces.",
        },
        {
          q: "How long does a typical consulting engagement take?",
          a: "Engagement lengths vary based on scope and complexity. Strategic consultancy can range from 3-6 months for focused improvements to 12+ months for comprehensive transformation. Interim management assignments are typically 3-12 months depending on your needs. Training programs are customised but usually span 2-6 months.",
        },
        {
          q: "Do you only work on-site or can you work remotely?",
          a: "We offer flexible engagement models. Some work is conducted on-site for hands-on implementation and training, while other components can be delivered remotely. We work with you to determine the optimal mix for your situation, balancing travel efficiency with the need for in-person interaction.",
        },
        {
          q: "What industries do you serve beyond hotels?",
          a: "While hospitality is our core expertise, we have experience supporting serviced apartments, student accommodation, co-living spaces, and other hospitality-adjacent sectors. Our core consulting principles apply broadly across hospitality operations.",
        },
      ],
    },
    {
      category: "Pricing & Investment",
      questions: [
        {
          q: "How do you structure your fees?",
          a: "We typically charge on a daily rate basis, though we can offer fixed-fee engagements for well-defined projects. Pricing depends on seniority, location, and engagement complexity. Interim management roles are priced as monthly assignments. We're transparent about costs upfront with no hidden fees.",
        },
        {
          q: "What's the average investment for a consulting project?",
          a: "This varies significantly based on scope. A focused operational audit might be £5K-15K. Strategic consulting across multiple departments typically ranges from £25K-100K+. Interim management is billed monthly. We'll provide a detailed proposal with transparent pricing before you commit.",
        },
        {
          q: "Do you offer payment plans or flexible arrangements?",
          a: "Yes, we work with clients to find arrangements that fit their budgets. We can discuss milestone-based payments, phased implementations, or hybrid engagement models. Contact us to discuss your specific situation.",
        },
        {
          q: "What's included in the engagement fee?",
          a: "Our fees cover consultant time, analysis, recommendations, implementation support, and team training. Travel expenses (if on-site) are typically billed separately. We provide detailed proposals outlining exactly what's included before you commit.",
        },
      ],
    },
    {
      category: "Our Approach & Methodology",
      questions: [
        {
          q: "How do you measure success?",
          a: "We establish clear KPIs at the start of every engagement aligned to your business goals (revenue, occupancy, margins, guest satisfaction, staff retention, etc.). We track these throughout the project and report regularly. Success is measured against these agreed metrics.",
        },
        {
          q: "What happens after the consulting engagement ends?",
          a: "We transition responsibility back to your team. Our goal is to leave your team equipped to maintain and build on improvements independently. We remain available for ongoing support, but at reduced frequency. Some clients engage us for periodic health checks or new initiatives.",
        },
        {
          q: "Do you provide training to our staff?",
          a: "Yes, training is a core component of what we do. We train your leadership team and staff on new processes, systems, and best practices. This ensures sustainability of improvements and builds capability in your team.",
        },
        {
          q: "Can you help with technology implementation?",
          a: "We have strong technology expertise and regularly help properties select and implement PMS systems, revenue management tools, and other hospitality software. We work closely with your IT team to ensure smooth integration.",
        },
      ],
    },
    {
      category: "Results & ROI",
      questions: [
        {
          q: "How quickly will we see results?",
          a: "Some improvements are immediate (e.g., process changes), while others take time (staff cultural change, market repositioning). Most clients see measurable financial impact within 3-6 months. Significant transformations typically show stronger results after 6-12 months.",
        },
        {
          q: "What if we don't see the expected improvements?",
          a: "We work collaboratively to understand what's not working and adjust our approach. We're committed to your success. If challenges arise, we address them directly rather than just completing a predetermined plan.",
        },
        {
          q: "Can you guarantee ROI?",
          a: "We can't guarantee specific results because outcomes depend on market conditions, execution by your team, and external factors. However, we're transparent about realistic expectations and help you understand the drivers of expected improvements.",
        },
        {
          q: "How do you handle multi-property groups?",
          a: "We have significant experience scaling improvements across multiple properties. We typically start with one flagship property, refine the approach, then roll out to others. This reduces risk and builds momentum across your group.",
        },
      ],
    },
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do we start the process?",
          a: "Contact us via the website or call. We'll have an initial conversation to understand your situation and challenges. If there's potential fit, we'll conduct a brief assessment, then propose a scope of work and investment. There's no obligation at this stage.",
        },
        {
          q: "What should we prepare for an initial conversation?",
          a: "It's helpful to have a sense of your biggest challenges, recent financial performance, current staffing levels, and strategic goals. Nothing formal needed—just context so we can ask intelligent questions.",
        },
        {
          q: "How long does the assessment phase take?",
          a: "Initial assessment is typically 1-2 days on-site, sometimes supplemented by off-site analysis. We'll provide findings and recommendations within 1-2 weeks. This helps you decide whether to proceed with a formal engagement.",
        },
        {
          q: "What if we want to trial your services first?",
          a: "Many clients start with a focused project (e.g., 4-week revenue optimisation project or staff training program) before committing to larger engagements. This is a smart way to experience our approach with lower risk.",
        },
      ],
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
              Questions Answered
            </Badge>
            <h1 className="text-5xl font-bold mb-4 text-balance">
              Frequently Asked
              <br />
              <span className="text-teal-600">Questions</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about working with HMCTS. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqCategories.map((cat, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-teal-200">
                  {cat.category}
                </h2>
                <div className="space-y-4">
                  {cat.questions.map((item, qIndex) => (
                    <div key={qIndex} className="border border-gray-200 rounded-lg overflow-hidden hover:border-teal-300 transition">
                      <button
                        onClick={() => setOpenIndex(openIndex === `${catIndex}-${qIndex}` ? null : `${catIndex}-${qIndex}`)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition"
                      >
                        <h3 className="font-semibold text-gray-900 text-left">{item.q}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-teal-600 transition-transform ${
                            openIndex === `${catIndex}-${qIndex}` ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openIndex === `${catIndex}-${qIndex}` && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-teal-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team is ready to discuss your specific situation and answer any questions you might have about our consulting services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 py-6 text-lg rounded-full">
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg rounded-full"
                >
                  Explore Our Services
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
