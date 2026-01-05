'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { categoryService } from '@/services/categoryService'
import { Category } from '@/types/database'

const ProductsPage = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const bgColors = [
    'bg-blue-50',
    'bg-yellow-50',
    'bg-pink-50',
    'bg-green-50',
    'bg-purple-50',
    'bg-orange-50',
    'bg-cyan-50',
    'bg-amber-50',
    'bg-indigo-50',
    'bg-rose-50',
    'bg-teal-50',
    'bg-lime-50'
  ]

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      setLoading(true)
      const { data, error } = await categoryService.getAll()
      
      if (error) {
        setError(error.message || 'Failed to fetch categories')
        console.error('Error fetching categories:', error)
      } else if (data) {
        setCategories(data)
      }
    } catch (err) {
      setError('An unexpected error occurred')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }

  const getBgColor = (index: number) => {
    return bgColors[index % bgColors.length]
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-almarai-green to-almarai-green-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Products</h1>
          <p className="text-xl opacity-90">Products with a Quality You Can Trust</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-almarai-green"></div>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg text-center">
              <p className="font-semibold mb-2">Error loading categories</p>
              <p className="text-sm">{error}</p>
              <button 
                onClick={fetchCategories}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Categories Grid */}
          {!loading && !error && categories.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, idx) => (
                <div 
                  key={category.id}
                  className={`${getBgColor(idx)} rounded-lg overflow-hidden hover:shadow-xl transition-shadow product-card`}
                >
                  <div className="p-8">
                    {/* Category Image - Using regular img tag */}
                    {category.image && (
                      <div className="mb-4 w-20 h-20">
                        <img 
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {category.name}
                    </h3>
                    
                    {category.description && (
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                    )}
                    
                    <Link 
                      href={`/products/${generateSlug(category.id)}`}
                      className="inline-flex items-center text-almarai-green font-semibold hover:text-almarai-green-dark"
                    >
                      Explore Products
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && categories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 mb-4">No categories available yet</p>
              <p className="text-gray-500">Check back soon for new products!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Looking for Something Specific?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our complete product catalog or contact us for more information about our offerings
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact-us" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/brands" className="btn-secondary">
              View Our Brands
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage