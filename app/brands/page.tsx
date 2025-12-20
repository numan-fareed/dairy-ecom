'use client'

import { ArrowRight, Award, Heart, Sparkles, TrendingUp } from 'lucide-react'

const BrandsPage = () => {
  const brands = [
    {
      id: 1,
      name: 'Almarai',
      tagline: 'The taste distinguishing gatherings',
      description: 'Our flagship brand offering the finest dairy products, juices, and bakery items. Trusted by millions of families across the region.',
      icon: '🥛',
      color: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-50 to-sky-100',
      products: ['Fresh Milk', 'Laban', 'Yogurt', 'Cream', 'Juices'],
      highlight: 'Premium Dairy',
      stats: '4M liters daily'
    },
    {
      id: 2,
      name: 'L\'usine',
      tagline: 'Fresh, nutritious and delicious',
      description: 'Premium bakery products crafted with care. From artisan breads to delicate pastries, every bite is a celebration of quality.',
      icon: '🥖',
      color: 'from-amber-400 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-100',
      products: ['Sliced Bread', 'Croissants', 'Baguettes', 'Pastries', 'Cakes'],
      highlight: 'Artisan Bakery',
      stats: 'Baked fresh daily'
    },
    {
      id: 3,
      name: '7 Days',
      tagline: 'Freshness that lasts a week',
      description: 'Innovative croissants and baked snacks with extended freshness. Perfect for on-the-go enjoyment without compromising quality.',
      icon: '🥐',
      color: 'from-red-400 to-rose-600',
      bgGradient: 'from-rose-50 to-pink-100',
      products: ['Croissants', 'Mini Croissants', 'Baked Rolls', 'Snack Cakes'],
      highlight: '7-Day Freshness',
      stats: '100+ varieties'
    },
    {
      id: 4,
      name: 'ALYOUM',
      tagline: 'Fresh, healthy and nutritious',
      description: 'Premium poultry products raised with the highest standards. Bringing farm-fresh chicken to your table every day.',
      icon: '🍗',
      color: 'from-yellow-400 to-amber-600',
      bgGradient: 'from-yellow-50 to-amber-100',
      products: ['Whole Chicken', 'Chicken Breast', 'Wings', 'Drumsticks', 'Minced'],
      highlight: 'Premium Poultry',
      stats: 'Farm to table'
    },
    {
      id: 5,
      name: 'Nura',
      tagline: 'Complete nutrition for your little ones',
      description: 'Specialized infant formula designed to support healthy growth and development. Trusted nutrition from day one.',
      icon: '🍼',
      color: 'from-purple-400 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-100',
      products: ['Stage 1', 'Stage 2', 'Stage 3', 'Growing Up Milk'],
      highlight: 'Infant Nutrition',
      stats: 'Expert formulated'
    },
    {
      id: 6,
      name: 'Evolac',
      tagline: 'Advanced infant nutrition',
      description: 'Premium infant formula with advanced nutrients. Supporting your baby\'s development with scientifically proven ingredients.',
      icon: '👶',
      color: 'from-teal-400 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-100',
      products: ['Premium Formula', 'Gold Series', 'Organic Range'],
      highlight: 'Advanced Formula',
      stats: 'Clinically tested'
    },
    {
      id: 7,
      name: 'Farm\'s Select',
      tagline: 'Nature\'s finest selection',
      description: 'Carefully selected produce and natural products. Bringing the best of nature\'s harvest to your kitchen.',
      icon: '🥕',
      color: 'from-green-400 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-100',
      products: ['Fresh Vegetables', 'Fruits', 'Herbs', 'Organic Produce'],
      highlight: 'Fresh Produce',
      stats: 'Farm fresh daily'
    },
    {
      id: 8,
      name: 'Ice Leaf',
      tagline: 'Refreshing wellness drinks',
      description: 'Innovative tea-based beverages that refresh and revitalize. A perfect blend of taste and wellness.',
      icon: '🍵',
      color: 'from-lime-400 to-green-600',
      bgGradient: 'from-lime-50 to-green-100',
      products: ['Iced Tea', 'Green Tea', 'Herbal Blends', 'Fruit Fusion'],
      highlight: 'Wellness Drinks',
      stats: 'Zero calories'
    },
    {
      id: 9,
      name: 'Almira',
      tagline: 'Premium cheese selection',
      description: 'Artisan cheeses crafted with traditional methods. From mild to mature, discover exceptional flavor in every slice.',
      icon: '🧀',
      color: 'from-yellow-400 to-orange-600',
      bgGradient: 'from-yellow-50 to-orange-100',
      products: ['Cheddar', 'Mozzarella', 'Cream Cheese', 'Specialty Cheese'],
      highlight: 'Artisan Cheese',
      stats: 'Aged to perfection'
    },
    {
      id: 10,
      name: 'SureGrow',
      tagline: 'Growing up strong',
      description: 'Specialized nutrition for growing children. Formulated to support active lifestyles and healthy development.',
      icon: '🥛',
      color: 'from-pink-400 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-100',
      products: ['Growth Milk', 'Vitamin Enriched', 'Calcium Plus'],
      highlight: 'Growth Formula',
      stats: 'Age 3-12 years'
    },
    {
      id: 11,
      name: 'SureNutri',
      tagline: 'Complete nutritional support',
      description: 'Comprehensive nutritional solutions for all ages. Supporting health and wellness at every life stage.',
      icon: '💊',
      color: 'from-indigo-400 to-blue-600',
      bgGradient: 'from-indigo-50 to-blue-100',
      products: ['Adult Formula', 'Senior Nutrition', 'Meal Replacement'],
      highlight: 'Medical Nutrition',
      stats: 'Clinically proven'
    },
    {
      id: 12,
      name: 'Seama',
      tagline: 'Dairy excellence',
      description: 'Traditional dairy products with modern quality standards. Time-honored recipes meet contemporary nutrition.',
      icon: '🧈',
      color: 'from-slate-400 to-gray-600',
      bgGradient: 'from-slate-50 to-gray-100',
      products: ['Butter', 'Ghee', 'Cream', 'Traditional Dairy'],
      highlight: 'Traditional Dairy',
      stats: 'Heritage quality'
    },
  ]

  const brandFeatures = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Premium Quality',
      description: 'Every brand meets our highest standards'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Family Trusted',
      description: 'Loved by families across the region'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Continuous product development'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Market Leaders',
      description: 'Leading brands in their categories'
    },
  ]

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-20 texture-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 to-sage-50 rounded-3xl -z-10"></div>
        
        <div className="text-center py-16 px-4 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-earth-900 mb-6">
            Our Brands
          </h1>
          <p className="font-body text-xl text-earth-700 max-w-3xl mx-auto leading-relaxed">
            A portfolio of trusted brands delivering excellence across dairy, bakery, 
            poultry, and nutrition. Quality you can trust, taste you'll love.
          </p>
        </div>

        {/* Brand Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-8">
          {brandFeatures.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-cream-50/80 backdrop-blur-sm rounded-xl p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 bg-sage-600 text-cream-50 rounded-full flex items-center justify-center mx-auto mb-3">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-earth-900 mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-earth-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Brands Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, idx) => (
            <div
              key={brand.id}
              className={`bg-gradient-to-br ${brand.bgGradient} rounded-2xl overflow-hidden hover-lift cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Brand Header */}
              <div className="p-6 bg-white/40 backdrop-blur-sm border-b border-white/60">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-6xl">{brand.icon}</div>
                  <div className={`bg-gradient-to-r ${brand.color} text-cream-50 px-3 py-1 rounded-full text-xs font-bold`}>
                    {brand.highlight}
                  </div>
                </div>
                
                <h2 className="font-display text-3xl font-bold text-earth-900 mb-2">
                  {brand.name}
                </h2>
                <p className="font-body text-sm text-earth-700 italic">
                  {brand.tagline}
                </p>
              </div>

              {/* Brand Content */}
              <div className="p-6">
                <p className="font-body text-earth-800 mb-6 leading-relaxed">
                  {brand.description}
                </p>

                {/* Products */}
                <div className="mb-6">
                  <h4 className="font-display font-semibold text-earth-900 mb-3 text-sm">
                    Featured Products:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {brand.products.map((product, pidx) => (
                      <span 
                        key={pidx}
                        className="text-xs bg-white/70 px-3 py-1 rounded-full text-earth-700 font-medium"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-earth-900/10">
                  <span className="text-sm font-semibold text-earth-600">
                    {brand.stats}
                  </span>
                  <button className="flex items-center space-x-2 text-earth-900 font-semibold text-sm hover:text-earth-700 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto mt-20 text-center bg-gradient-to-br from-earth-800 to-earth-900 rounded-3xl p-12 text-cream-50">
        <h2 className="font-display text-4xl font-bold mb-4">
          Discover Our Complete Portfolio
        </h2>
        <p className="font-body text-lg text-cream-200 mb-8">
          Explore our full range of products and find the perfect match for your family
        </p>
        <button className="px-8 py-4 bg-sage-600 hover:bg-sage-500 text-cream-50 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          View All Products
        </button>
      </section>
    </div>
  )
}

export default BrandsPage
