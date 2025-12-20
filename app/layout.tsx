import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Fresh Dairy, Bakery, and Poultry Products | Almarai',
  description: 'Almarai brings high-quality food & drinks across the region. Discover dairy, bakery, beverages, ice cream, poultry products, & healthy nutrition options.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
