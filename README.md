# Almarai-Inspired Next.js Application

A beautiful, modern Next.js application inspired by the Almarai website, featuring elegant UI design with warm earth tones, sophisticated typography, and smooth animations.

## Features

- 🎨 **Modern Design System**: Custom color palette with cream, earth, and sage tones
- ✨ **Beautiful Animations**: Smooth fade-in, slide, and scale animations
- 📱 **Responsive Layout**: Mobile-first design that works on all devices
- 🎭 **Custom Typography**: Playfair Display, Lora, and Nunito Sans fonts
- 🎯 **Three Main Pages**: Home, Products, and Brands
- 🔍 **Product Filtering**: Category-based filtering and search functionality
- 🎪 **Brand Showcase**: Beautiful grid layout for brand portfolio

## Pages

### Home Page
- Hero section with call-to-action buttons
- Featured products showcase
- Recipe cards with preparation time
- Statistics section
- Newsletter subscription

### Products Page
- Search functionality
- Category filtering (Dairy, Juices, Bakery, Poultry, Cheese)
- Product grid with detailed cards
- Dynamic filtering and search

### Brands Page
- 12 brand showcases (Almarai, L'usine, 7 Days, ALYOUM, Nura, Evolac, etc.)
- Brand features highlights
- Product listings per brand
- Call-to-action section

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Lora, Nunito Sans)

## Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
almarai-app/
├── app/
│   ├── page.tsx           # Home page
│   ├── products/
│   │   └── page.tsx       # Products page
│   ├── brands/
│   │   └── page.tsx       # Brands page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
\`\`\`

## Design Philosophy

This application follows the **frontend-design** skill principles:

- **Bold Aesthetic Direction**: Warm, organic food & dairy theme
- **Typography**: Distinctive font choices (Playfair Display for headings, Lora for body text)
- **Color System**: Earth tones with sage green accents for a natural, premium feel
- **Motion**: Staggered animations for engaging user experience
- **Spatial Composition**: Generous spacing with asymmetric layouts
- **Background Details**: Subtle grain effect and gradient overlays for depth

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
- `cream`: Light, warm neutrals
- `earth`: Rich browns for text and accents
- `sage`: Green accents for freshness

### Animations
Custom animations are defined in `tailwind.config.js`:
- `fade-in-up`: Fade in from bottom
- `slide-in-left/right`: Slide animations
- `scale-in`: Scale up animation

### Typography
Google Fonts are imported in `globals.css`:
- Display: Playfair Display
- Body: Lora
- Sans: Nunito Sans

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## License

This is a UI demonstration project inspired by Almarai's design language.
