import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Almarai Inspired - Fresh Dairy & Quality Products',
  description: 'Premium dairy products, bakery, and poultry with quality you can trust',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="grain">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
