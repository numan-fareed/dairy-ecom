'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const BrandsPage = () => {
  const brands = [
    {
      name: 'Almarai',
      tagline: 'Quality You Can Trust',
      description: 'Almarai is the main brand of Almarai Company, built on quality since its inception and has earned the trust of millions of consumers. The market value of this brand is more than 10 billion Saudi Riyals, and produces a variety of products including dairy, juices, drinks and culinary.',
      logo: 'ALMARAI',
      categories: ['Dairy', 'Juices', 'Beverages', 'Culinary'],
      link: '/brands/almarai',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'L\'usine',
      tagline: 'Fresh, Nutritious and Delicious',
      description: 'L\'usine brand includes under its umbrella a large number of products such as bread and ready-made baked goods, as well as various types of sweets. These products come to you from Almarai factories in Al-Kharj, Hail and Jeddah, whose area exceeds 120,000 square meters, equivalent to the size of 16 international football fields.',
      logo: 'L\'USINE',
      categories: ['Bread', 'Baked Goods', 'Sweets'],
      link: '/brands/lusine',
      bgColor: 'bg-orange-50'
    },
    {
      name: '7DAYS',
      tagline: 'Global Snacking Excellence',
      description: '7DAYS is a global brand, with a presence in more than 65 countries around the world. Almarai is responsible for the production and marketing of the 7DAYS brand in Saudi Arabia and the Gulf region. 7DAYS offers a wide range of products such as croissants, cake bars, Swiss rolls that are baked and packed in perfect sizes.',
      logo: '7DAYS',
      categories: ['Croissants', 'Cake Bars', 'Swiss Rolls'],
      link: '/brands/seven-days',
      bgColor: 'bg-red-50'
    },
    {
      name: 'ALYOUM',
      tagline: 'Fresh Chicken Today',
      description: 'ALYOUM meaning "Today" became a brand by Almarai Company in 2009. ALYOUM provides a variety of high quality chicken products that matches your health and nutritional preferences with a Quality You Can Trust.',
      logo: 'ALYOUM',
      categories: ['Whole Chicken', 'Chicken Cuts', 'Processed Chicken'],
      link: '/brands/alyoum',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Nura',
      tagline: 'Complete Baby Nutrition',
      description: 'The brand "Nura" provides you with a full range of baby nutrition to support the health and development of your child from the first day of his birth, produced at Almarai factory in Al-Kharj Saudi Arabia, which is the first of its kind in the Middle East.',
      logo: 'NURA',
      categories: ['Stage 1', 'Stage 2', 'Stage 3', 'Growing Up Milk'],
      link: '/brands/nura',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Evolac',
      tagline: 'Supporting Healthy Growth',
      description: 'The brand "Evolac" provides the Iraqi market with complete range of baby nutrition that support the health and growth of babies from the first day of birth.',
      logo: 'EVOLAC',
      categories: ['Infant Formula', 'Follow-on Formula'],
      link: '/brands/evolac',
      bgColor: 'bg-teal-50'
    },
    {
      name: 'SureGrow',
      tagline: 'Growing Up Strong',
      description: 'SureGrow provides specialized nutrition for growing children, formulated to support their active lifestyles and healthy development.',
      logo: 'SUREGROW',
      categories: ['Growing Up Milk', 'Nutritional Supplements'],
      link: '/brands/suregrow',
      bgColor: 'bg-pink-50'
    },
    {
      name: 'SureNutri',
      tagline: 'Complete Nutritional Support',
      description: 'SureNutri offers comprehensive nutritional solutions for all ages, supporting health and wellness at every life stage.',
      logo: 'SURENUTRI',
      categories: ['Adult Nutrition', 'Senior Care', 'Medical Nutrition'],
      link: '/brands/surenutri',
      bgColor: 'bg-indigo-50'
    },
    {
      name: 'Farm\'s Select',
      tagline: 'Nature\'s Best Selection',
      description: 'Farm\'s Select is one of the latest additions to Almarai company portfolio of brands. Introduced to the market in 2019 with a select range of juices made from the best fruits. The brand received Neilsen IQ award for innovation breakthrough.',
      logo: 'FARM\'S SELECT',
      categories: ['Premium Juices', 'Natural Beverages'],
      link: '/brands/farms-select',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Ice Leaf',
      tagline: 'Natural Refreshment',
      description: 'Ice leaf offers a variety of Iced Tea that is made from finest natural fruit-and-flower extracts, crafted to treat your taste buds and recharge your body and mind in a completely natural way.',
      logo: 'ICE LEAF',
      categories: ['Iced Tea', 'Herbal Drinks', 'Natural Beverages'],
      link: '/brands/ice-leaf',
      bgColor: 'bg-lime-50'
    },
    {
      name: 'Almira',
      tagline: 'Traditional Saudi Dates',
      description: 'Almira brand provides a variety of dates that represents Saudi culture & tradition reflecting hospitality and generosity. Dates are natural and healthy, high in nutritional value, gives energy and vitality.',
      logo: 'ALMIRA',
      categories: ['Premium Dates', 'Date Products'],
      link: '/brands/almira',
      bgColor: 'bg-amber-50'
    },
    {
      name: 'Seama',
      tagline: 'Quality Seafood',
      description: 'Seama provides omega-rich seafood with great taste that meets the highest quality standards.',
      logo: 'SEAMA',
      categories: ['Fresh Seafood', 'Frozen Seafood'],
      link: '/brands/seama',
      bgColor: 'bg-cyan-50'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-almarai-green to-almarai-green-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Brands</h1>
          <p className="text-xl opacity-90">Brands with a Quality You Can Trust</p>
        </div>
      </section>

      {/* Brands Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              Almarai Company has built a portfolio of trusted brands serving millions of customers across the region. 
              From dairy and bakery to poultry and infant nutrition, each brand represents our commitment to quality, 
              innovation, and the health of our consumers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, idx) => (
              <div 
                key={idx}
                className={`${brand.bgColor} rounded-lg overflow-hidden hover:shadow-xl transition-shadow product-card`}
              >
                <div className="p-8">
                  {/* Brand Logo */}
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-almarai-green mb-2">{brand.logo}</div>
                    <p className="text-sm text-gray-600 italic">{brand.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed line-clamp-4">{brand.description}</p>

                  {/* Categories */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {brand.categories.map((category, cidx) => (
                        <span 
                          key={cidx}
                          className="bg-white px-3 py-1 rounded-full text-xs text-gray-700 font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <Link 
                    href={brand.link}
                    className="inline-flex items-center text-almarai-green font-semibold hover:text-almarai-green-dark"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-almarai-green text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">12+</div>
              <p className="text-lg opacity-90">Trusted Brands</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">7</div>
              <p className="text-lg opacity-90">Countries Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">220K+</div>
              <p className="text-lg opacity-90">Points of Sale</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Products
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the full range of products available across our brand portfolio
          </p>
          <Link href="/products" className="btn-primary inline-flex items-center">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BrandsPage
