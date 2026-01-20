/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fear-bg': '#F5F3F0',
        'fear-dark': '#1A1A1A',
        'fear-card': '#C4BDB3',
        'fear-text-gray': '#6B6B6B',
        'fear-text-light': '#8B8B8B',
      },
      backgroundImage: {
        'radial-gray': 'radial-gradient(ellipse at center, #e8e4df 0%, #c9c3bb 50%, #b5afa7 100%)',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'josefin': ['Josefin Slab', 'serif'],
        'jacques': ['Jacques Francois', 'serif'],
      },
      maxWidth: {
        'container': '1200px',
        'full': '100%',
        'screen': '100vw',
        'none': 'none',
        'viewport': '100vw',
      },
      width: {
        'screen': '100vw',
        'viewport': '100vw',
      },
      fontSize: {
        'hero': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-title': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Disable utilities that might cause overflow
    container: false,
  },
}
