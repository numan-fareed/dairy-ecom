'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search, Globe } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/brands', label: 'Brands' },
    { href: '/recipes', label: 'Recipes' },
    { href: '/visit-almarai', label: 'Almarai Visits' },
    { href: '/food-service', label: 'Foodservice' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/corporate', label: 'Corporate' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Main Header */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-almarai-green"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5L25 15H15L20 5Z" fill="#00A651"/>
                <circle cx="20" cy="25" r="8" fill="#00A651"/>
                <text x="40" y="28" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#00A651">almarai</text>
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.slice(0, 5).map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-almarai-green text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-almarai-green">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden lg:flex items-center space-x-1 text-gray-700 hover:text-almarai-green text-sm">
              <Globe className="w-4 h-4" />
              <span>عربى</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container-custom py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-almarai-green border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
