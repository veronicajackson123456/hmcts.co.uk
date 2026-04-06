import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-emerald-50 to-teal-50 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
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
              </div>
            </Link>
            <p className="text-sm text-gray-700 leading-relaxed">
              Empowering professionals and businesses in the hospitality industry with cutting-edge solutions,
              comprehensive training, and tools for success.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-700 hover:text-teal-600">
                  Property Management Systems
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-teal-600">
                  Hotel Management Systems
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-teal-600">
                  Revenue Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-teal-600">
                  Channel Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-teal-600">
                  Guest Experience Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-gray-700 hover:text-teal-600">
                  Consultation Services
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-700 hover:text-teal-600">
                  Training & Certification
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-teal-600">
                  Hospitality Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-teal-600">
                  Technology Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/legal" className="text-gray-700 hover:text-teal-600">
                  All Legal Documents
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-gray-700 hover:text-teal-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-gray-700 hover:text-teal-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/cookie-policy" className="text-gray-700 hover:text-teal-600">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/data-protection" className="text-gray-700 hover:text-teal-600">
                  Data Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <a href="mailto:info@hospitalitysoftwaresolutions.com" className="text-gray-700 hover:text-teal-600">
                  info@hospitalitysoftwaresolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+18459047626" className="text-gray-700 hover:text-teal-600">
                    +1 (845) 904-7626
                  </a>
                  <p className="text-gray-600 text-xs mt-1">24/7 Support Available</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <address className="text-gray-700 not-italic">
                  30 N GOULD STREET SHERIDAN
                  <br />
                  WYOMING 82801 USA
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Proud Partner of</span>
              <span className="font-bold text-gray-900">Cloudbeds</span>
            </div>
            <p className="text-sm text-gray-600 text-center">
              © 2025 HMCTS LLC- Hospitality Management Consultancy & Technology Solutions. EIN: 37-2155102. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
