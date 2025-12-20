'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-almarai-gray-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-almarai-gray-700 py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-xl font-bold mb-4 md:mb-0">
              Subscribe to our Newsletter <span className="text-almarai-green">No spam, good stuff only!</span>
            </h3>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 w-full md:w-80 text-gray-900 rounded-l focus:outline-none"
              />
              <button className="bg-almarai-green hover:bg-almarai-green-dark px-6 py-3 rounded-r transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Quick Links Column 1 */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-almarai-green">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/faqs" className="hover:text-almarai-green transition-colors">FAQs</Link></li>
              <li><Link href="/sitemap" className="hover:text-almarai-green transition-colors">Sitemap</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-almarai-green transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-almarai-green transition-colors">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-almarai-green">Contact</h4>
            <ul className="space-y-2">
              <li><Link href="/contact-us" className="hover:text-almarai-green transition-colors">Contact Us</Link></li>
              <li><Link href="/contact-us/locations" className="hover:text-almarai-green transition-colors">Our Locations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-4 text-almarai-green">Quick Connect</h4>
            <div className="space-y-2 text-sm">
              <p>P. O. Box 8524, Riyadh 11492</p>
              <p>Phone: +966 (11) 470 0005</p>
              <p>WhatsApp: <a href="https://api.whatsapp.com/send?phone=966554700101" className="hover:text-almarai-green">+966554700101</a></p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-almarai-green">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/almarai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-almarai-gray-800 rounded-full flex items-center justify-center hover:bg-almarai-green hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/almarai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-almarai-gray-800 rounded-full flex items-center justify-center hover:bg-almarai-green hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/almarai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-almarai-gray-800 rounded-full flex items-center justify-center hover:bg-almarai-green hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/user/almaraicom" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-almarai-gray-800 rounded-full flex items-center justify-center hover:bg-almarai-green hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/almarai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-almarai-gray-800 rounded-full flex items-center justify-center hover:bg-almarai-green hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-almarai-gray-700">
        <div className="container-custom py-6">
          <p className="text-center text-sm text-almarai-gray-400">
            © 2025 Almarai. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
