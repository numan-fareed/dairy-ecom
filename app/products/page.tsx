'use client'

import { useState } from 'react'
import { Search, Filter, ArrowRight } from 'lucide-react'

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛒' },
    { id: 'dairy', name: 'Dairy', icon: '🥛' },
    { id: 'juices', name: 'Juices', icon: '🧃' },
    { id: 'bakery', name: 'Bakery', icon: '🥖' },
    { id: 'poultry', name: 'Poultry', icon: '🍗' },
    { id: 'cheese', name: 'Cheese & Foods', icon: '🧀' },
  ]

  const products = [
    {
      id: 1,
      name: 'Fresh Full Cream Milk',
      category: 'dairy',
      description: 'Rich and creamy full-fat milk from our premium dairy farms',
      image: '🥛',
      size: '2L',
      color: 'from-blue-50 to-blue-100',
      badge: 'Popular'
    },
    {
      id: 2,
      name: 'Fresh Laban Low Fat',
      category: 'dairy',
      description: 'Refreshing and healthy low-fat laban',
      image: '🥛',
      size: '2L',
      color: 'from-sky-50 to-sky-100',
      badge: 'Best Seller'
    },
    {
      id: 3,
      name: 'Orange Juice',
      category: 'juices',
      description: 'Natural orange juice with no added sugar',
      image: '🍊',
      size: '1.75L',
      color: 'from-orange-50 to-orange-100',
      badge: 'No Sugar'
    },
    {
      id: 4,
      name: 'Mango Juice',
      category: 'juices',
      description: 'Tropical mango juice from nature\'s best fruits',
      image: '🥭',
      size: '1.75L',
      color: 'from-yellow-50 to-yellow-100',
      badge: 'New'
    },
    {
      id: 5,
      name: 'Sliced White Bread',
      category: 'bakery',
      description: 'Soft and fresh sliced white bread',
      image: '🍞',
      size: '600g',
      color: 'from-amber-50 to-amber-100',
      badge: 'Fresh Daily'
    },
    {
      id: 6,
      name: 'Croissants',
      category: 'bakery',
      description: 'Buttery and flaky French croissants',
      image: '🥐',
      size: '6 pieces',
      color: 'from-orange-50 to-orange-100',
      badge: 'Premium'
    },
    {
      id: 7,
      name: 'Fresh Whole Chicken',
      category: 'poultry',
      description: 'Farm-fresh whole chicken, ready to cook',
      image: '🍗',
      size: '1.2kg',
      color: 'from-yellow-50 to-yellow-100',
      badge: 'Halal'
    },
    {
      id: 8,
      name: 'Chicken Breast',
      category: 'poultry',
      description: 'Tender and juicy chicken breast fillets',
      image: '🍖',
      size: '1kg',
      color: 'from-rose-50 to-rose-100',
      badge: 'Premium'
    },
    {
      id: 9,
      name: 'Cream Cheese',
      category: 'cheese',
      description: 'Rich and smooth cream cheese spread',
      image: '🧈',
      size: '500g',
      color: 'from-slate-50 to-slate-100',
      badge: 'Popular'
    },
    {
      id: 10,
      name: 'Cheddar Cheese',
      category: 'cheese',
      description: 'Sharp and flavorful cheddar cheese',
      image: '🧀',
      size: '500g',
      color: 'from-amber-50 to-amber-100',
      badge: 'Best Quality'
    },
    {
      id: 11,
      name: 'Cooking Cream',
      category: 'dairy',
      description: 'Perfect for creamy sauces and desserts',
      image: '🥛',
      size: '1L',
      color: 'from-slate-50 to-slate-100',
      badge: 'Chef\'s Choice'
    },
    {
      id: 12,
      name: 'Mixed Berry Juice',
      category: 'juices',
      description: 'A delicious blend of mixed berries',
      image: '🫐',
      size: '1.75L',
      color: 'from-purple-50 to-purple-100',
      badge: 'Limited'
    },
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-earth-900 mb-4">
            Our Products
          </h1>
          <p className="font-body text-lg text-earth-700 max-w-2xl mx-auto">
            Discover our wide range of premium quality products
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up delay-100">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-600" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-cream-100 border-2 border-cream-300 focus:border-sage-500 focus:outline-none text-earth-900 placeholder-earth-600"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 animate-fade-in-up delay-200">
          <div className="flex items-center space-x-2 mb-6">
            <Filter className="w-5 h-5 text-earth-700" />
            <h3 className="font-display text-xl font-semibold text-earth-900">Categories</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-earth-800 text-cream-50 shadow-lg scale-105'
                    : 'bg-cream-100 text-earth-800 hover:bg-cream-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className={`bg-gradient-to-br ${product.color} rounded-2xl overflow-hidden hover-lift cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-cream-50/50 to-transparent flex items-center justify-center text-8xl relative">
                {product.image}
                {product.badge && (
                  <div className="absolute top-3 right-3 bg-sage-600 text-cream-50 px-3 py-1 rounded-full text-xs font-bold">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg font-bold text-earth-900">
                    {product.name}
                  </h3>
                  <span className="text-sm font-semibold text-earth-600 bg-white/60 px-2 py-1 rounded">
                    {product.size}
                  </span>
                </div>
                
                <p className="font-body text-sm text-earth-700 mb-4">
                  {product.description}
                </p>

                <button className="w-full py-3 bg-earth-800 hover:bg-earth-700 text-cream-50 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-4">🔍</div>
            <h3 className="font-display text-2xl font-bold text-earth-900 mb-2">
              No products found
            </h3>
            <p className="font-body text-earth-700">
              Try adjusting your search or filter to find what you're looking for
            </p>
          </div>
        )}

        {/* Product Count */}
        <div className="mt-12 text-center">
          <p className="font-body text-earth-700">
            Showing <span className="font-bold text-earth-900">{filteredProducts.length}</span> of{' '}
            <span className="font-bold text-earth-900">{products.length}</span> products
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
