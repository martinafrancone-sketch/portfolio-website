# Portfolio Website - React + Vite + Tailwind CSS

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with mobile menu
│   │   ├── Hero.jsx            # Hero section with CTA buttons
│   │   ├── About.jsx           # About section with skills
│   │   ├── Projects.jsx        # Projects showcase grid
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer with social links
│   ├── pages/
│   │   └── Home.jsx            # Main page combining all components
│   ├── assets/                 # Static assets folder
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles with Tailwind
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies (if not already done):
```bash
npm install
```

3. Install Tailwind CSS and dependencies (if not already done):
```bash
npm install -D tailwindcss postcss autoprefixer
```

## Development

### Start the Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173/`

The page will automatically reload as you make changes to the code.

## Building for Production

Create a production-ready build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Features

### Components

1. **Navbar**
   - Sticky navigation bar
   - Mobile-responsive hamburger menu
   - Smooth scroll navigation links

2. **Hero Section**
   - Eye-catching gradient background
   - Call-to-action buttons
   - Animated scroll indicator

3. **About Section**
   - Personal introduction
   - Skills showcase in card format
   - Photo placeholder

4. **Projects Section**
   - Responsive project grid (1-4 columns)
   - Project cards with descriptions
   - Technology tags
   - Hover effects

5. **Contact Section**
   - Contact form with validation
   - Contact information and social links
   - Icon-based layout

6. **Footer**
   - Quick links
   - Social media links
   - Copyright information

## Styling

This project uses **Tailwind CSS**, a utility-first CSS framework that enables rapid UI development.

### Tailwind Features Used

- Responsive design (`sm:`, `md:`, `lg:` prefixes)
- Gradient backgrounds
- Shadow and hover effects
- Flexbox and grid layouts
- Smooth transitions and animations
- Utility classes for spacing, sizing, and colors

### Customizing Tailwind

Edit `tailwind.config.js` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints
- Plugins

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint (if configured) |

## Customization Guide

### Update Personal Information

1. **Navbar Brand**: Edit the logo/name in `src/components/Navbar.jsx`
2. **About Section**: Update text and skills in `src/components/About.jsx`
3. **Projects**: Add your projects in `src/components/Projects.jsx`
4. **Contact Info**: Update email, phone, and location in `src/components/Contact.jsx`
5. **Social Links**: Edit social media URLs in `src/components/Contact.jsx` and `Footer.jsx`

### Add Images

Place images in `src/assets/` and import them:

```jsx
import myImage from './assets/my-image.png'

<img src={myImage} alt="My Image" />
```

### Modify Colors

Edit `tailwind.config.js` to extend the theme:

```js
theme: {
  extend: {
    colors: {
      primary: '#your-color-here',
    },
  },
},
```

## Performance Tips

1. **Lazy Load Images**: Use React Suspense for code splitting
2. **Optimize Images**: Convert images to WebP format
3. **Minify**: Production builds are automatically minified
4. **Caching**: Vite handles browser caching efficiently

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **React 18** - UI library
- **Vite 8** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **JavaScript (ES6+)** - Programming language

## Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Tailwind UI Components](https://tailwindui.com/)

## License

This project is open source and available under the MIT License.

## Next Steps

1. Replace placeholder content with your personal information
2. Add your project images and descriptions
3. Set up form submission (Backend API or service like Formspree)
4. Deploy to a hosting platform (Vercel, Netlify, etc.)
5. Add analytics (Google Analytics)

## Support

For questions or issues, please refer to the official documentation of the technologies used or create an issue in the repository.

---

**Happy coding! 🚀**
