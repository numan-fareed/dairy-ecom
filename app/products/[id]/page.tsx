'use client'

import Link from 'next/link'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { productService, ProductWithCategory } from '@/services/productService'
import { categoryService } from '@/services/categoryService'
import { Category } from '@/types/database'

const CategoryProductsPage = () => {
  const params = useParams()
  const categoryId = params.id as string

  const [products, setProducts] = useState<ProductWithCategory[]>([])
  const [category, setCategory] = useState<Category | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Array of background colors to cycle through
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
    if (categoryId) {
      fetchCategoryAndProducts()
    }
  }, [categoryId])

  const fetchCategoryAndProducts = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch category details and products in parallel
      const [categoryResult, productsResult] = await Promise.all([
        categoryService.getById(categoryId),
        productService.getByCategory(categoryId)
      ])

      if (categoryResult.error) {
        setError(categoryResult.error.message || 'Failed to fetch category')
        console.error('Error fetching category:', categoryResult.error)
        return
      }

      if (productsResult.error) {
        setError(productsResult.error.message || 'Failed to fetch products')
        console.error('Error fetching products:', productsResult.error)
        return
      }

      setCategory(categoryResult.data)
      setProducts(productsResult.data || [])
    } catch (err) {
      setError('An unexpected error occurred')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const getBgColor = (index: number) => {
    return bgColors[index % bgColors.length]
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-almarai-green to-almarai-green-dark text-white py-20">
        <div className="container-custom">
          <Link 
            href="/products" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Categories
          </Link>
          
          {loading ? (
            <div className="animate-pulse">
              <div className="h-8 bg-white/20 rounded w-64 mb-4"></div>
              <div className="h-6 bg-white/20 rounded w-96"></div>
            </div>
          ) : category ? (
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{category.name}</h1>
              {category.description && (
                <p className="text-xl opacity-90 max-w-3xl">{category.description}</p>
              )}
            </div>
          ) : (
            <h1 className="text-4xl md:text-6xl font-bold">Category Not Found</h1>
          )}
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
              <p className="font-semibold mb-2">Error loading products</p>
              <p className="text-sm">{error}</p>
              <button 
                onClick={fetchCategoryAndProducts}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Products Grid */}
          {!loading && !error && products.length > 0 && (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {products.length} {products.length === 1 ? 'Product' : 'Products'} Available
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, idx) => (
                  <div 
                    key={product.id}
                    className={`${getBgColor(idx)} rounded-lg overflow-hidden hover:shadow-xl transition-shadow product-card`}
                  >
                    <div className="p-8">
                      {/* Product Image */}
                      {product.image && (
                        <div className="mb-4 w-full h-48 relative bg-white rounded-lg overflow-hidden">
                          <img 
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {product.name}
                      </h3>
                      
                      {product.description && (
                        <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                          {product.description}
                        </p>
                      )}

                      {/* Price and Stock */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <p className="text-3xl font-bold text-almarai-green">
                            {formatPrice(product.price)}
                          </p>
                          {product.unit && (
                            <p className="text-sm text-gray-600">
                              / {product.unit}
                            </p>
                          )}
                        </div>
                        {product.stock !== null && (
                          <p className={`text-sm font-semibold mt-2 ${
                            product.stock > 0 
                              ? 'text-green-600' 
                              : 'text-red-600'
                          }`}>
                            {product.stock > 0 
                              ? `In Stock (${product.stock} available)` 
                              : 'Out of Stock'}
                          </p>
                        )}
                      </div>
                      
                      <button 
                        className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                          product.is_active && product.stock && product.stock > 0
                            ? 'bg-almarai-green text-white hover:bg-almarai-green-dark'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!product.is_active || !product.stock || product.stock <= 0}
                      >
                        <ShoppingCart className="mr-2 w-5 h-5" />
                        {product.is_active 
                          ? (product.stock && product.stock > 0 ? 'Add to Cart' : 'Out of Stock')
                          : 'Unavailable'
                        }
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Empty State */}
          {!loading && !error && products.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📦</div>
              <p className="text-xl text-gray-600 mb-4">No products in this category yet</p>
              <p className="text-gray-500 mb-8">Check back soon for new arrivals!</p>
              <Link href="/products" className="btn-primary">
                Browse Other Categories
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {!loading && !error && products.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect products for your needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact-us" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/products" className="btn-secondary">
                View All Categories
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default CategoryProductsPage