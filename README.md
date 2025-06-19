<div align="center">

# ✨ Mars~ 
### *A Dreamy Discord Bot Website*

🌙 **Bringing magic to your server with natural language understanding** 🌙

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![CSS Modules](https://img.shields.io/badge/CSS_Modules-Enabled-pink?style=for-the-badge)](https://github.com/css-modules/css-modules)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

[🌐 **Live Website**](https://mars-website-xxx.vercel.app) • [📋 **Commands**](https://mars-website-xxx.vercel.app/commands) • [🤖 **Invite Bot**](#) • [💬 **Support**](#)

---

![Mars Preview](https://via.placeholder.com/800x400/fbbcff/000000?text=Mars+Discord+Bot+Website)

</div>

## 🌟 **About Mars**

Mars is a versatile Discord bot that understands natural language and brings a touch of magic to your server! With a dreamy pink and purple aesthetic, Mars offers economy commands, utilities, and moderation tools that make server management both fun and efficient.

### ✨ **Bot Features**

🏛️ **Economy System**  
- Dream dust currency system with daily rewards
- Item foraging and magical brewing
- Shop and inventory management  
- Gift sharing between friends

🛠️ **Utility Commands**  
- Weather lookups for any location
- Interactive polls and voting
- Server ping monitoring

🛡️ **Moderation Tools**  
- Message purging and cleanup
- Channel management utilities
- Permission handling

## � **Website Features**

### 🏠 **Beautiful Homepage**
- **Animated starry background** with floating particles and gradient orbs
- **Responsive design** optimized for all devices and screen sizes
- **Dreamy Mars-themed** color palette with pink/purple gradients
- **Smooth scroll animations** with intersection observer
- **Feature cards** with hover effects and fade-in animations

### 📋 **Interactive Commands Page**
- **Real-time search** across command names, descriptions, arguments, and permissions
- **Category filtering** with dynamic count updates
- **Keyboard shortcuts** (Ctrl+K to search, Escape to clear)
- **Mobile-optimized** interface with touch-friendly controls
- **Command copying** with one-click slash command copying
- **No results state** with helpful suggestions

### 🚀 **Modern Tech Stack**
- **Next.js 15** with App Router for optimal performance
- **TypeScript** for complete type safety
- **CSS Modules** for scoped component styling
- **Mobile-first responsive** design approach
- **SEO optimized** with proper meta tags and OpenGraph

## �️ **Development**

### **Prerequisites**
- Node.js 18+ 
- npm, yarn, or pnpm

### **Getting Started**

```bash
# Clone the repository
git clone https://github.com/HaruRee/mars-website.git
cd mars-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### **Available Scripts**

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build optimized production bundle
npm run start    # Start production server
npm run lint     # Run ESLint for code quality
```

## 📁 **Project Structure**

```
mars-website/
├── src/
│   ├── app/
│   │   ├── commands/              # Commands page with search
│   │   │   ├── page.tsx          # Commands page component
│   │   │   └── commands.module.css # Scoped CSS styles
│   │   ├── globals.css           # Global Mars theme styles
│   │   ├── layout.tsx            # Root layout with metadata
│   │   └── page.tsx              # Homepage component
│   └── components/               # Reusable React components
│       ├── AnimatedBackground.tsx # Starry background effect
│       ├── Header.tsx            # Navigation header
│       └── Footer.tsx            # Site footer
├── public/
│   └── star.png                  # Mars logo asset
├── package.json                  # Dependencies and scripts
└── README.md                     # This beautiful file!
```

## 🎨 **Design System**

### **Color Palette**
```css
--dreamy-primary: #fbbcff;     /* Dreamy Pink */
--dreamy-secondary: #c084fc;   /* Soft Purple */  
--dreamy-bg: #0f0f0f;         /* Deep Space */
--dreamy-surface: #1a1a1a;    /* Dark Surface */
--dreamy-accent: #2a2a2a;     /* Subtle Accent */
--dreamy-text: #ffffff;       /* Pure White */
--dreamy-muted: #a0a0a0;      /* Muted Gray */
```

### **Typography & Spacing**
- **Clean sans-serif** fonts for readability
- **Consistent spacing** using CSS custom properties
- **Accessible contrast** ratios (WCAG AA compliant)
- **Responsive typography** that scales beautifully

### **Animation Philosophy**
- **Subtle and elegant** motion design
- **Performance-first** with CSS transforms
- **Intersection observer** for scroll-triggered animations
- **Reduced motion** support for accessibility

## 🛠️ Built With

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **React** - Component-based UI library

## 📄 Pages

- **Homepage** (`/`) - Hero section, features, stats, and animated background
- **Commands** (`/commands`) - Interactive command browser with search and filtering

## � **Deployment**

The website is automatically deployed to [Vercel](https://vercel.com/) when changes are pushed to the main branch.

### **Auto-Deploy Setup**
1. Connect your GitHub repository to Vercel
2. Push changes to the `main` branch
3. Vercel automatically builds and deploys
4. Live updates in seconds! ⚡

### **Manual Deployment**
```bash
# Build the project
npm run build

# Deploy to Vercel (install Vercel CLI first)
npm i -g vercel
vercel --prod
```

## 🛠️ **Built With**

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework with App Router | 15.3.4 |
| **TypeScript** | Type safety and developer experience | 5.0+ |
| **CSS Modules** | Scoped styling without conflicts | Latest |
| **React** | Component-based UI library | 18+ |

## � **Pages Overview**

### 🏠 **Homepage** (`/`)
- Hero section with animated background
- Feature showcase with hover effects
- Bot statistics and highlights  
- Call-to-action sections

### 📋 **Commands** (`/commands`)
- Complete command browser
- Real-time search and filtering
- Category organization
- Mobile-optimized interface

## 🤝 **Contributing**

We welcome contributions to make Mars even more magical! ✨

### **How to Contribute**
1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Use CSS Modules for styling
- Ensure mobile responsiveness
- Test across different browsers
- Maintain the dreamy aesthetic! 🌙

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💫 **Acknowledgments**

- Built with ❤️ using Next.js and TypeScript
- Inspired by the beauty of Mars and dreamy space aesthetics
- Special thanks to the Discord.js and React communities
- Font and icon resources from various open-source projects

---

<div align="center">

**Made with ✨ magic ✨ and lots of coffee by the Mars team**

*If you found this project helpful, please consider giving it a ⭐!*

[![GitHub Stars](https://img.shields.io/github/stars/HaruRee/mars-website?style=social)](https://github.com/HaruRee/mars-website)
[![GitHub Forks](https://img.shields.io/github/forks/HaruRee/mars-website?style=social)](https://github.com/HaruRee/mars-website/fork)

[🌟 **Star this repo**](https://github.com/HaruRee/mars-website) • [🐛 **Report Bug**](https://github.com/HaruRee/mars-website/issues) • [💡 **Request Feature**](https://github.com/HaruRee/mars-website/issues)

</div>
