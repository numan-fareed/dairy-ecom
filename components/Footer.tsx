'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-earth-900 text-cream-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cream-300 to-cream-400 rounded-full flex items-center justify-center">
                <span className="text-earth-900 font-display font-bold text-lg">A</span>
              </div>
              <span className="font-display text-xl font-bold">Almarai</span>
            </div>
            <p className="font-body text-cream-200 text-sm leading-relaxed">
              Premium dairy products, bakery, and poultry with a quality you can trust. 
              Bringing freshness to your table every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Brands', 'Recipes', 'About Us'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-cream-200 hover:text-cream-50 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-cream-200 text-sm">
              <li>P. O. Box 8524</li>
              <li>Riyadh 11492</li>
              <li className="pt-2">Phone: +966 (11) 470 0005</li>
              <li>Email: info@almarai.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-cream-200 text-sm mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-cream-100 text-earth-900 placeholder-earth-600 focus:outline-none focus:ring-2 focus:ring-sage-500"
              />
              <button className="px-6 py-2 bg-sage-600 hover:bg-sage-500 rounded-r-lg transition-colors duration-300 font-semibold">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-earth-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="w-10 h-10 bg-earth-800 hover:bg-sage-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-cream-300 text-sm">
              © 2025 Almarai. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
