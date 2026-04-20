"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <rect x="4" y="4" width="7" height="7" />
                <rect x="13" y="4" width="7" height="7" />
                <rect x="4" y="13" width="7" height="7" />
                <rect x="13" y="13" width="7" height="7" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg">HMCTS</div>
              <div className="text-xs text-gray-600">Hospitality Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium">
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-gray-900 font-medium">
              Case Studies
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact
            </Link>
            <Link href="/for-partners" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
              For Partners
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium">
                Services
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-gray-900 font-medium">
                Case Studies
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
                Contact
              </Link>
              <Link href="/for-partners" className="text-gray-700 hover:text-gray-900 font-medium">
                For Partners
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">Get Started</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
