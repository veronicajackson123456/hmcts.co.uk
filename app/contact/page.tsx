"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h1 className="text-5xl font-bold mb-4 text-balance">
              Get in <span className="text-teal-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Have questions about our solutions? We're here to help you transform your hospitality business.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">General Enquiries</h3>
                <a
                  href="mailto:hotelmanagement@hmcts.co.uk"
                  className="text-sm text-blue-600 hover:underline break-all"
                >
                  hotelmanagement@hmcts.co.uk
                </a>
                <p className="text-xs text-gray-600 mt-1">or <a href="mailto:info@hmcts.co.uk" className="hover:underline">info@hmcts.co.uk</a></p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Finance Enquiries</h3>
                <a
                  href="mailto:finance@hmcts.co.uk"
                  className="text-sm text-blue-600 hover:underline break-all"
                >
                  finance@hmcts.co.uk
                </a>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center border border-orange-200">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <a href="tel:+443333355520" className="text-sm text-gray-700 hover:text-orange-600 font-medium">
                  +44 (0)333 335 5520
                </a>
                <p className="text-xs text-gray-600 mt-1">Mon–Fri 09:00–17:00</p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 text-center border border-teal-200">
                <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Compliance</h3>
                <a
                  href="mailto:partners@hmcts.co.uk"
                  className="text-sm text-teal-600 hover:underline break-all"
                >
                  partners@hmcts.co.uk
                </a>
              </div>
            </div>

            {/* Form and Info Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                  <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <Input
                          placeholder="Your Hotel/Business"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Select a service</option>
                        <option value="pms">Property Management System</option>
                        <option value="hms">Hotel Management System</option>
                        <option value="revenue">Revenue Optimization</option>
                        <option value="consultation">Consultation Services</option>
                        <option value="training">Training & Certification</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        placeholder="Tell us about your needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg rounded-full"
                    >
                      Send Message ✈️
                    </Button>
                  </form>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Why Contact Us */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                  <h3 className="text-xl font-bold mb-6">Why Contact Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Free consultation to assess your needs",
                      "Customized solutions for your property",
                      "Expert guidance from industry professionals",
                      "24/7 support and assistance",
                      "Competitive pricing and flexible plans",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Response Guarantee */}
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Quick Response Guarantee</h3>
                  <p className="text-sm mb-6 text-orange-50">
                    We understand the importance of timely communication in the hospitality industry. Our team is
                    committed to responding to your inquiry within 24 hours.
                  </p>
                  <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
                    <p className="text-sm text-orange-100 mb-1">Average Response Time</p>
                    <p className="text-3xl font-bold">2-4 Hours</p>
                  </div>
                </div>

                {/* Trusted by */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-3">Trusted by Industry Leaders</h3>
                  <p className="text-sm text-gray-600">
                    Join clients who have transformed their hospitality operations with HMCTS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
