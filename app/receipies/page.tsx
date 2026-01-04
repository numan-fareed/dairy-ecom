'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ProductsPage = () => {
  const categories = [
    {
      title: 'Liquid Dairy',
      description: 'Start your day with fresh, nutritious milk and dairy beverages',
      icon: '🥛',
      link: '/products/liquid-dairy',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Cheese & Foods',
      description: 'In the morning, afternoon, evening or at any moment of the day, our cheeses, cooking products, honey and olive oil remain the preferred and healthy choice on your tables.',
      icon: '🧀',
      link: '/products/cheese-foods',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Yogurt & Desserts',
      description: 'Here you can discover our variety of high quality & nutritious yoghurts and desserts. Whether you prefer yogurts before, during or after meals, our products are of quality you can trust.',
      icon: '🍨',
      link: '/products/yogurt-desserts',
      bgColor: 'bg-pink-50'
    },
    {
      title: 'Dips',
      description: 'We have a variety of dips for you! Natural Fresh Cream, Labneh and Hummus. All adding high nutritional value to your meals.',
      icon: '🥣',
      link: '/products/dips',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Ice Cream',
      description: 'Almarai, the pioneer in dairy production, has now stepped into the world of ice cream creation. Using high-quality milk, cream and Natural ingredients, we have crafted a range of ice cream treats that guarantee ultimate enjoyment.',
      icon: '🍦',
      link: '/products/ice-cream',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Bakery',
      description: 'We provide you with the finest fresh, nutritious and delicious baked goods; With a variety of options to suit every member of the family.',
      icon: '🥖',
      link: '/products/bakery',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Poultry',
      description: 'Craving for some chicken? unleash your creativity with a wide range of chicken products. Get your family the most delicious chicken dishes every day.',
      icon: '🍗',
      link: '/products/poultry',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Juices',
      description: 'We\'ve got nature\'s best juices for you! A variety that adds flavor to your life and matches your taste.',
      icon: '🧃',
      link: '/products/juices',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Beverages',
      description: 'Almarai company provides a variety of delicious drinks rich in essential vitamins that give you freshness, whether you are a fan of iced coffee, iced tea or refreshing drinks.',
      icon: '☕',
      link: '/products/beverages',
      bgColor: 'bg-brown-50'
    },
    {
      title: 'Infant Nutrition',
      description: 'Almarai is committed to providing the best food to take care of the health and development of your child from day one.',
      icon: '🍼',
      link: '/products/infant-nutrition',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Dates',
      description: 'Almira brand provides a variety of dates that represents Saudi culture & tradition; reflecting hospitality and generosity. Dates are natural and healthy, high in nutritional value, gives energy and vitality.',
      icon: '🌴',
      link: '/products/dates',
      bgColor: 'bg-amber-50'
    },
    {
      title: 'Seafood',
      description: 'Which seafood do you prefer?! We have omega-rich seafood, great taste meets the highest quality standards.',
      icon: '🐟',
      link: '/products/seafood',
      bgColor: 'bg-cyan-50'
    },
  ]

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <div 
                key={idx}
                className={`${category.bgColor} rounded-lg overflow-hidden hover:shadow-xl transition-shadow product-card`}
              >
                <div className="p-8">
                  <div className="text-7xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{category.description}</p>
                  <Link 
                    href={category.link}
                    className="inline-flex items-center text-almarai-green font-semibold hover:text-almarai-green-dark"
                  >
                    Explore Products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
