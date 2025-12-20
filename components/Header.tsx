'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Search, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-cream-50/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-earth-600 to-earth-800 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-cream-50 font-display font-bold text-xl">A</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-sage-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="font-display text-2xl font-bold text-earth-800 hidden sm:block">
              Almarai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="font-sans font-semibold text-earth-800 hover:text-earth-600 transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-earth-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/products" 
              className="font-sans font-semibold text-earth-800 hover:text-earth-600 transition-colors duration-300 relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-earth-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/brands" 
              className="font-sans font-semibold text-earth-800 hover:text-earth-600 transition-colors duration-300 relative group"
            >
              Brands
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-earth-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-earth-800 hover:text-earth-600 transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-earth-800 hover:text-earth-600 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream-50 border-t border-cream-300 px-4 py-6 space-y-4">
          <Link 
            href="/" 
            className="block font-sans font-semibold text-earth-800 hover:text-earth-600 py-2 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/products" 
            className="block font-sans font-semibold text-earth-800 hover:text-earth-600 py-2 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            href="/brands" 
            className="block font-sans font-semibold text-earth-800 hover:text-earth-600 py-2 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Brands
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
