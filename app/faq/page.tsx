'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const faqs = [
    {
      category: "About HMCTS Services",
      questions: [
        {
          q: "What types of consulting services does HMCTS provide?",
          a: "HMCTS offers strategic consultancy, staff training and development, interim management, operational audits, and hotel systems optimization. We work with independent hotels, boutique properties, and multi-unit groups.",
        },
        {
          q: "What makes HMCTS different from other hospitality consultants?",
          a: "We have deep hospitality industry expertise with hands-on hotel operations experience. Unlike larger firms, we embed ourselves in your operation during implementation, provide staff training, and build long-term capability rather than just leaving reports.",
        },
        {
          q: "Do you work with all types of properties?",
          a: "Yes. We work with independent hotels, chain affiliates, resorts, and boutique properties. We tailor our approach to your specific property type, market, and business model.",
        },
        {
          q: "What industries do you serve?",
          a: "We specialise in hospitality. This includes hotels, resorts, serviced apartments, and short-term rental operations. Our consultancy is specifically designed around hotel operations challenges.",
        },
      ],
    },
    {
      category: "Engagement & Process",
      questions: [
        {
          q: "How does an engagement typically work?",
          a: "We start with a discovery and assessment phase. From that, we develop a bespoke strategy with clear deliverables and timelines. Then we execute alongside your team, providing training and hands-on support. Finally, we measure results and transition out, leaving your team equipped to sustain improvements.",
        },
        {
          q: "How long does a typical engagement last?",
          a: "Engagements vary. Strategic audits can take 4-8 weeks. Training programs typically run 8-12 weeks. Operational transformation programs run 3-6 months. We tailor the timeline to your needs and budget.",
        },
        {
          q: "Can you work with our existing management team?",
          a: "Absolutely. In fact, that's our preference. We work alongside your team, building their capability and knowledge rather than replacing them. Our goal is to strengthen your existing leadership.",
        },
        {
          q: "Do you offer interim management services?",
          a: "Yes. We can provide interim management support during transitions, crises, or when you need temporary leadership capacity while recruiting permanent staff.",
        },
      ],
    },
    {
      category: "Results & ROI",
      questions: [
        {
          q: "What kind of results should we expect?",
          a: "Typical outcomes include 15-25% revenue improvement, 2-4 point margin improvement, 10-15% operational cost reduction, 25-40% staff retention improvement, and 20-30 point guest satisfaction gains within 12 months.",
        },
        {
          q: "How do you measure success?",
          a: "We establish clear KPIs at the start tied to your business goals—whether that's revenue, profitability, occupancy, staff retention, or guest satisfaction. We track progress monthly and report transparently.",
        },
        {
          q: "How quickly do we see results?",
          a: "Quick wins often appear within the first 30-60 days (operational improvements, process changes). Significant business impact typically shows within 3-6 months. Sustainable transformation happens over 6-12 months.",
        },
        {
          q: "What's the typical ROI on consulting?",
          a: "Most clients see ROI within 3-6 months. If you implement recommendations properly, the financial gains (revenue increase, cost reduction, staff retention savings) typically exceed consulting costs by 3-5x within the first year.",
        },
      ],
    },
    {
      category: "Pricing & Investment",
      questions: [
        {
          q: "How is pricing structured?",
          a: "We offer tiered engagement packages (Assessment, Operational Program, Full Transformation) and à la carte services. Pricing varies based on property size, complexity, scope, and duration. We provide detailed proposals with transparent fees.",
        },
        {
          q: "Do you offer flexible payment terms?",
          a: "Yes. We can discuss monthly retainers, project-based fees, or hybrid models depending on your preference and cash flow situation.",
        },
        {
          q: "Is there a minimum engagement size?",
          a: "We work with properties of all sizes. For very small properties, we may recommend à la carte training or focused audits rather than full programs. There's no strict minimum—we find a model that works for you.",
        },
        {
          q: "What's included in your fees?",
          a: "Typically included: consultant time, training delivery, documentation, implementation support, progress reporting, and transition planning. Travel, accommodation, and third-party software are usually quoted separately.",
        },
      ],
    },
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I get started?",
          a: "Contact us to schedule an initial conversation. We'll discuss your challenges, goals, and explore if and how HMCTS can help. If it's a good fit, we'll provide a detailed proposal.",
        },
        {
          q: "Do you offer a free initial consultation?",
          a: "Yes. We're happy to have an initial call to understand your situation, answer questions, and explore whether working together makes sense. There's no obligation.",
        },
        {
          q: "What information should we prepare for the initial meeting?",
          a: "It helps if you can share: current financial performance, operational challenges, staffing concerns, your business goals for the next 12 months, and any previous consulting engagements.",
        },
        {
          q: "How can we contact HMCTS?",
          a: "You can reach us at hotelmanagement@hmcts.co.uk, call +44 (0)333 335 5520, or use our contact form. We typically respond within 1 business day.",
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
              Questions?
            </Badge>
            <h1 className="text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Common questions about HMCTS consulting services, how we work, pricing, and what to expect.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => {
                    const key = `${catIndex}-${qIndex}`
                    const isOpen = openIndex === key

                    return (
                      <div
                        key={key}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:border-teal-300 transition"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : key)}
                          className="w-full px-6 py-4 text-left font-semibold text-gray-900 bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between"
                        >
                          {item.q}
                          <ChevronDown
                            className={`w-5 h-5 text-teal-600 transition-transform ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-white border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">{item.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Didn&apos;t find your answer?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us directly and we&apos;ll be happy to help with any questions about our services.
            </p>
            <a href="mailto:hotelmanagement@hmcts.co.uk" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition">
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
