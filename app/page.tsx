'use client'

import Link from 'next/link'
import { ArrowRight, Clock, Star, TrendingUp } from 'lucide-react'

const HomePage = () => {
  const featuredProducts = [
    {
      title: 'Fresh Dairy',
      description: 'Farm-fresh milk and dairy products delivered daily',
      image: '🥛',
      color: 'from-blue-50 to-blue-100',
      stats: '4M liters daily'
    },
    {
      title: 'Premium Juices',
      description: 'Natural juices from nature\'s best fruits',
      image: '🧃',
      color: 'from-orange-50 to-orange-100',
      stats: 'No added sugar'
    },
    {
      title: 'Artisan Bakery',
      description: 'Fresh, nutritious and delicious baked goods',
      image: '🥖',
      color: 'from-amber-50 to-amber-100',
      stats: 'Baked fresh daily'
    },
    {
      title: 'Quality Poultry',
      description: 'Fresh, healthy and nutritious chicken products',
      image: '🍗',
      color: 'from-yellow-50 to-yellow-100',
      stats: 'Farm to table'
    }
  ]

  const recipes = [
    { name: 'Creamy Chicken Tawouk Skewers', time: '25 min', image: '🍢' },
    { name: 'Mango Coconut Panna Cotta', time: '20 min', image: '🥭' },
    { name: 'Salmon Cream Cheese Mushrooms', time: '35 min', image: '🍄' },
    { name: 'Tortilla Gishta Tacos', time: '15 min', image: '🌮' }
  ]

  const stats = [
    { value: '4M', label: 'Liters of milk daily', icon: '🥛' },
    { value: '10K+', label: 'Delivery vehicles', icon: '🚚' },
    { value: '39K', label: 'Quality tests per day', icon: '✓' },
    { value: '220K+', label: 'Points of sale', icon: '🏪' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-sage-400/10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-block">
                <span className="px-4 py-2 bg-sage-500/10 text-sage-700 rounded-full text-sm font-semibold border border-sage-500/20">
                  Quality You Can Trust
                </span>
              </div>
              
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-earth-900 leading-tight">
                Fresh Dairy
                <span className="block text-earth-700">For Your Family</span>
              </h1>
              
              <p className="font-body text-lg text-earth-700 leading-relaxed max-w-xl">
                Experience the finest selection of dairy products, fresh juices, artisan bakery, 
                and premium poultry. Bringing nature's goodness to your table every day.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/products"
                  className="group px-8 py-4 bg-earth-800 hover:bg-earth-700 text-cream-50 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/brands"
                  className="px-8 py-4 bg-cream-50 hover:bg-cream-100 text-earth-800 rounded-lg font-semibold transition-all duration-300 border-2 border-earth-800 transform hover:-translate-y-1"
                >
                  Our Brands
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Image Placeholder */}
            <div className="relative animate-slide-in-right">
              <div className="relative aspect-square bg-gradient-to-br from-sage-100 to-cream-200 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl transform hover:scale-110 transition-transform duration-500">🥛</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-earth-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-sage-600 text-cream-50 px-6 py-3 rounded-full shadow-xl animate-scale-in delay-500">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
              Our Products
            </h2>
            <p className="font-body text-lg text-earth-700 max-w-2xl mx-auto">
              Products with a quality you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, idx) => (
              <div 
                key={idx}
                className={`hover-lift bg-gradient-to-br ${product.color} rounded-2xl p-6 cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-6xl mb-4">{product.image}</div>
                <h3 className="font-display text-2xl font-bold text-earth-900 mb-2">
                  {product.title}
                </h3>
                <p className="font-body text-earth-700 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-earth-600 bg-white/60 px-3 py-1 rounded-full">
                    {product.stats}
                  </span>
                  <ArrowRight className="w-5 h-5 text-earth-700" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/products"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-earth-800 hover:bg-earth-700 text-cream-50 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-sage-50 to-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
              Delicious Recipes
            </h2>
            <p className="font-body text-lg text-earth-700">
              Mouthwatering meals for the whole family to enjoy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipes.map((recipe, idx) => (
              <div 
                key={idx}
                className="bg-cream-50 rounded-2xl overflow-hidden hover-lift cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-cream-200 to-sage-100 flex items-center justify-center text-7xl">
                  {recipe.image}
                </div>
                <div className="p-5">
                  <div className="flex items-center space-x-2 text-earth-600 text-sm mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-earth-900 mb-3">
                    {recipe.name}
                  </h3>
                  <button className="text-earth-700 font-semibold text-sm hover:text-earth-600 transition-colors flex items-center space-x-1">
                    <span>Get Recipe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-earth-900 text-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className="font-display text-5xl font-bold mb-2 text-sage-400">
                  {stat.value}
                </div>
                <p className="font-body text-cream-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-cream-100 to-sage-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="font-body text-lg text-earth-700 mb-8">
            Get exclusive offers, recipes, and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-cream-50 border-2 border-cream-300 focus:border-sage-500 focus:outline-none text-earth-900 placeholder-earth-600"
            />
            <button className="px-8 py-4 bg-sage-600 hover:bg-sage-500 text-cream-50 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
