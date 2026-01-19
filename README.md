# 🛒 GadgetGrove - Modern E-commerce Platform

A modern, responsive e-commerce platform built with Next.js 16, featuring dark mode, authentication, and a comprehensive product management system.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 User Interface
- **Modern Design** - Clean, professional interface with smooth animations
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - CSS keyframe animations for testimonials and brand showcase
- **Sticky Navigation** - Always accessible navigation with mobile hamburger menu

### 🛍️ E-commerce Functionality
- **Product Catalog** - Comprehensive product listings with detailed specifications
- **Advanced Filtering** - Filter by category, brand, price range, and features
- **Product Management** - Admin interface for adding/editing products
- **Shopping Cart** - Add to cart functionality with quantity management
- **User Reviews** - Customer testimonials and product ratings

### 🔐 Authentication & Security
- **Protected Routes** - Middleware-based route protection
- **Mock Authentication** - Demo login system with cookie-based sessions
- **Role-based Access** - Admin-only features like product management
- **Secure Cookies** - HTTP-only cookies with proper security settings

### 📱 Pages & Components
- **Home Page** - Hero slider, featured products, testimonials
- **About Page** - Company story, values, team, and brand showcase
- **How It Works** - Step-by-step process guide with FAQ
- **Product Pages** - Detailed product information and specifications
- **Login/Register** - Authentication forms with validation
- **Contact** - Contact form and support information

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/gadgetgrove.git
cd gadgetgrove
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
# Create .env.local for development
echo "NEXT_PUBLIC_API_URL=http://localhost:5000" > .env.local
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

Create these environment files:

**`.env.local` (Development)**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**`.env.production` (Production)**
```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

### Authentication

**Demo Credentials:**
- Email: `admin@gadgetgrove.com`
- Password: `admin123`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── add-product/       # Product management (protected)
│   ├── howitworks/        # How it works page
│   ├── login/             # Authentication
│   ├── globals.css        # Global styles & animations
│   ├── layout.jsx         # Root layout with theme provider
│   └── page.jsx           # Home page
├── components/            # Reusable components
│   ├── Footer/           # Site footer
│   ├── Logo/             # Brand logo
│   ├── Navbar/           # Navigation with auth
│   ├── Sections/         # Page sections
│   │   ├── Contact.jsx
│   │   ├── NewsLetter.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhyChooseUs.jsx
│   ├── ThemeToggle/      # Dark/light mode toggle
│   └── UI/               # UI components
│       ├── ContactSupportForm.jsx
│       ├── Hero.jsx
│       └── NewsLetterForm.jsx
├── data/                 # Static data
│   └── products.json     # Product catalog
└── middleware.js         # Route protection
```

## 🎨 Styling & Theming

### Tailwind CSS v4
- **Modern Setup** - Latest Tailwind CSS with new configuration
- **Custom Animations** - Keyframe animations for scrolling elements
- **Dark Mode** - Class-based dark mode with smooth transitions
- **Custom Fonts** - Google Fonts (Poppins) integration

### Key Animations
```css
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}
```

## 🔐 Authentication System

### How It Works
1. **Login** - User enters credentials, system validates against mock data
2. **Cookie Storage** - Auth token stored in HTTP-only cookie
3. **Middleware Protection** - Routes protected by middleware checking cookies
4. **Dynamic UI** - Navigation updates based on auth state

### Protected Routes
- `/add-product` - Product management interface
- Future admin routes can be added to middleware matcher

### Implementation
```javascript
// middleware.js
export const config = {
  matcher: '/add-product/:path*',
};
```

## 📦 Product Management

### Product Schema
```json
{
  "id": 1,
  "name": "iPhone 15 Pro Max",
  "brand": "Apple",
  "category": "Smartphones",
  "price": 1199.99,
  "originalPrice": 1299.99,
  "rating": 4.8,
  "specifications": {
    "display": "6.7-inch Super Retina XDR",
    "processor": "A17 Pro chip"
  },
  "features": ["Face ID", "Water resistant"],
  "colors": ["Natural Titanium", "Blue Titanium"],
  "images": ["/products/iphone-1.jpg"]
}
```

### Add Product Form
- **Dynamic Fields** - Add/remove specifications and features
- **Variant Management** - Colors, storage options, tags
- **Image Upload** - Multiple product images
- **Validation** - Form validation with error handling

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel auto-detects Next.js settings

3. **Set Environment Variables**
In Vercel dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

4. **Deploy**
Click "Deploy" and wait for build completion

### API Server Requirements

Your backend API must:

**✅ Enable CORS**
```javascript
app.use(cors({
  origin: [
    'https://your-app.vercel.app',
    'http://localhost:3000'
  ],
  credentials: true
}));
```

**✅ Use HTTPS in Production**
**✅ Handle Authentication Cookies**
```javascript
res.cookie('auth-token', token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'none'
});
```

### Deployment Checklist
- [ ] Environment variables set in Vercel
- [ ] API server deployed and accessible
- [ ] CORS configured for your domain
- [ ] HTTPS enabled on API
- [ ] Test all functionality post-deployment

## 🛠️ Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Key Dependencies
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - Latest React with concurrent features
- **Tailwind CSS 4** - Utility-first CSS framework
- **next-themes 0.4.6** - Theme switching
- **lucide-react 0.562.0** - Modern icon library
- **swiper 12.0.3** - Touch slider component

### Development Tips
- **Hot Reload** - Changes reflect immediately
- **TypeScript Ready** - Easy migration to TypeScript
- **ESLint Configured** - Code quality enforcement
- **Dark Mode Testing** - Toggle theme during development

## 🐛 Troubleshooting

### Common Issues

**Products Not Loading**
- Check `NEXT_PUBLIC_API_URL` environment variable
- Verify API server is running and accessible
- Check browser console for CORS errors

**Authentication Not Working**
- Ensure cookies are enabled
- Check middleware configuration
- Verify auth token is being set

**Dark Mode Issues**
- Clear browser cache
- Check Tailwind CSS configuration
- Verify theme provider setup

**Hydration Errors**
- Added `suppressHydrationWarning` to form elements
- Check for server/client rendering mismatches

### Debug Tools
- **API Test Page** - Visit `/api-test` to diagnose API issues
- **Browser Console** - Check for JavaScript errors
- **Network Tab** - Monitor API requests and responses
- **Vercel Logs** - Check deployment and runtime logs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use Prettier for formatting
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform
- **Lucide** - Beautiful icon library
- **Google Fonts** - Typography (Poppins)

## 📞 Support

- **Documentation** - Check this README for detailed setup
- **Issues** - Report bugs via GitHub Issues
- **Discussions** - Join GitHub Discussions for questions

---

**Built with ❤️ using Next.js and Tailwind CSS**
