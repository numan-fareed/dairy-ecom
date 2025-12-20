# Almarai Website Replica

An exact replica of the Almarai website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This is a pixel-perfect recreation of the official Almarai website (almarai.com), featuring:
- Exact color scheme (Almarai Green #00A651)
- Original layout and design structure
- All main pages: Home, Products, and Brands
- Responsive design matching the original
- Same navigation structure and footer layout

## 🚀 Features

### Pages Included
1. **Home Page**
   - Hero slider section
   - Recipes showcase (4 featured recipes)
   - Product categories grid (12 categories)
   - Almarai Cares section
   - Brand showcase (12 brands)
   - Statistics section
   - Newsletter subscription

2. **Products Page**
   - 12 product categories:
     - Liquid Dairy
     - Cheese & Foods
     - Yogurt & Desserts
     - Dips
     - Ice Cream
     - Bakery
     - Poultry
     - Juices
     - Beverages
     - Infant Nutrition
     - Dates
     - Seafood

3. **Brands Page**
   - 12 Almarai brands:
     - Almarai
     - L'usine
     - 7DAYS
     - ALYOUM
     - Nura
     - Evolac
     - SureGrow
     - SureNutri
     - Farm's Select
     - Ice Leaf
     - Almira
     - Seama

### Design Specifications

**Colors:**
- Primary Green: #00A651
- Dark Green: #008C44
- Blue: #0066B3
- Gray Scale: Multiple shades matching original

**Typography:**
- Font Family: Arial, Helvetica, sans-serif (matching original)

**Components:**
- Sticky header with search and language toggle
- Mobile-responsive hamburger menu
- Footer with newsletter subscription
- Social media links (Facebook, Instagram, Twitter, YouTube, LinkedIn)
- Product cards with hover effects
- Brand cards with categories

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Package Manager:** npm

## 🛠️ Installation & Setup

1. **Install Dependencies:**
\`\`\`bash
npm install
\`\`\`

2. **Run Development Server:**
\`\`\`bash
npm run dev
\`\`\`

3. **Open in Browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
almarai-replica/
├── app/
│   ├── page.tsx                 # Home page
│   ├── products/
│   │   └── page.tsx            # Products page
│   ├── brands/
│   │   └── page.tsx            # Brands page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── Header.tsx              # Navigation header
│   └── Footer.tsx              # Footer component
├── public/
│   └── images/                 # Static images
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
├── postcss.config.js           # PostCSS config
├── package.json                # Dependencies
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
\`\`\`

## 🎨 Design System

### Color Palette
\`\`\`css
--almarai-green: #00A651
--almarai-green-dark: #008C44
--almarai-blue: #0066B3
\`\`\`

### Component Classes
\`\`\`css
.btn-primary          /* Green button */
.btn-secondary        /* White button with green border */
.product-card         /* Card with hover effect */
.section-padding      /* Standard section spacing */
.container-custom     /* Max-width container */
\`\`\`

## 🔧 Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- This is a UI replica for demonstration purposes
- All content, text, and structure matches the original Almarai website
- Images are represented with emojis/placeholders
- Links are functional but lead to placeholder pages

## 🤝 Contributing

This is a replica project. For the official Almarai website, visit [www.almarai.com](https://www.almarai.com)

## 📄 License

This is an educational/demonstration project. All Almarai trademarks and content belong to Almarai Company.

## 🔗 Reference

Original Website: [https://www.almarai.com/en](https://www.almarai.com/en)

---

Built with ❤️ using Next.js 14
