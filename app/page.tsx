'use client'

import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Category } from '@/types/database'
import { useEffect, useState } from 'react'
import { categoryService } from '@/services/categoryService'

const HomePage = () => {
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      // setLoading(true)
      const { data, error } = await categoryService.getAll()
      
      if (error) {
        // setError(error.message || 'Failed to fetch categories')
        console.error('Error fetching categories:', error)
      } else if (data) {
const categories = data.slice(0, 12)
        setCategories(categories)
      }
    } catch (err) {
      // setError('An unexpected error occurred')
      console.error('Error:', err)
    } finally {
      // setLoading(false)
    }
  }

  const heroSlides = [
    {
      title: 'Almarai Dairy',
      subtitle: 'The taste distinguishing gatherings',
      cta: 'Explore More',
      link: '/brands/almarai/liquid-dairy',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Almarai Cooking Cream',
      subtitle: 'Prepare delicious & nutritious meals using Almarai products',
      cta: 'Explore More',
      link: '/brands/almarai/cheeses-and-foods',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Natural Juices',
      subtitle: 'Natural juices from Nature\'s best fruits & with no added sugar!',
      cta: 'Explore More',
      link: '/brands/almarai/juices',
      bgColor: 'bg-orange-50'
    },
  ]

  const brands = [
    { name: 'Almarai', logo: 'ALMARAI', link: '/brands/almarai' },
    { name: 'Lusine', logo: 'L\'USINE', link: '/brands/lusine' },
    { name: '7DAYS', logo: '7DAYS', link: '/brands/seven-days' },
    { name: 'ALYOUM', logo: 'ALYOUM', link: '/brands/alyoum' },
    { name: 'Nura', logo: 'NURA', link: '/brands/nura' },
    { name: 'Evolac', logo: 'EVOLAC', link: '/brands/evolac' },
    { name: 'SureGrow', logo: 'SUREGROW', link: '/brands/suregrow' },
    { name: 'SureNutri', logo: 'SURENUTRI', link: '/brands/surenutri' },
    { name: "Farm's Select", logo: "FARM'S SELECT", link: '/brands/farms-select' },
    { name: 'Ice Leaf', logo: 'ICE LEAF', link: '/brands/ice-leaf' },
    { name: 'Almira', logo: 'ALMIRA', link: '/brands/almira' },
    { name: 'Seama', logo: 'SEAMA', link: '/brands/seama' },
  ]

  const stats = [
    {
      icon: '🥛',
      number: '4 Million',
      description: 'Almarai produces 4 million liters of milk a day an average of 40 liters per cow per day roughly double the European average'
    },
    {
      icon: '🚚',
      number: '10,000',
      description: 'The largest food and beverages fleet in the Middle East. Almarai fleet includes more than 10,000 vehicles'
    },
    {
      icon: '✓',
      number: '39,000',
      description: 'Almarai conducts 39,000 Quality tests per day to ensure a quality you can trust'
    },
    {
      icon: '🏪',
      number: '220,000',
      description: 'Almarai products reach more than 220,000 points of sale across 7 countries'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-block mb-4">
              <span className="bg-white text-almarai-green px-4 py-2 rounded-full text-sm font-semibold">
                Quality You Can Trust
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {heroSlides[0].title}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {heroSlides[0].subtitle}
            </p>
            {/* <div className="flex flex-wrap gap-4">
              <Link href={heroSlides[0].link} className="btn-primary inline-flex items-center">
                {heroSlides[0].cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/recipes" className="btn-secondary">
                Check Our Recipes
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recipes</h2>
            <p className="text-xl text-gray-600">Mouthwatering meals for the whole family to enjoy!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipes.map((recipe, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow product-card">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-6xl">🍽️</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-almarai-green text-sm mb-2">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{recipe.time}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{recipe.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{recipe.description}</p>
                  <Link href="/recipes" className="text-almarai-green font-semibold text-sm hover:text-almarai-green-dark flex items-center">
                    Get Recipe
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/recipes" className="btn-primary inline-flex items-center">
              See More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section> */}

      {/* Our Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Products with a Quality You Can Trust</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, idx) => (
              <Link 
                key={idx}
                href={category.id}
                className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow product-card border border-gray-200"
              >
                <div className="text-5xl mb-3">
                <img 
                          src={category.image??''}
                          alt={category.name}
                          className="w-full h-full object-contain"
                        />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{category.name}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/products" className="btn-primary inline-flex items-center">
              Explore More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Almarai Cares Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-8xl">👨‍👦</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Almarai Cares</h2>
              <p className="text-gray-700 leading-relaxed">
                Almarai not only provides fresh and healthy products to its consumers, but also works with them hand in hand to support local communities in order to achieve a real positive impact through its corporate social responsibility program, which is based on: (training and development - promoting healthy living - community care). Almarai cares about you all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Brands</h2>
            <p className="text-xl text-gray-600">Brands with a Quality You Can Trust</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand, idx) => (
              <Link 
                key={idx}
                href={brand.link}
                className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow product-card border border-gray-200 flex items-center justify-center"
              >
                <span className="text-lg font-bold text-almarai-green">{brand.logo}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-almarai-green text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <p className="text-sm opacity-90">{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/corporate" className="inline-block bg-white text-almarai-green px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
              Visit Corporate Profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
