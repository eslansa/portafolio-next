/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '600px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      custom: '1201px'
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024'
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.webp")',
        circles: 'url("/bg-circles.webp")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
        hero: 'url("/img/hero-pattern.svg")',
        top: 'url("/top-left-img.webp")'
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        sora: ['var(--font-sora)', 'sans-serif']
      }
    }
  },
  container: {
    padding: {
      DEFAULT: '15px'
    }
  },

  plugins: [require('tailwind-scrollbar')]

}
