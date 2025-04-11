module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Primary colors (Navy Blue)
          'primary': '#1E2A38',
          'primary-dark': '#0F172A',
          'primary-light': '#2C3A4B',
          
          // Accent colors (Teal)
          'accent': '#17C3B2',
          'accent-dark': '#0D9488',
          'accent-light': '#2DD4BF',
          
          // Alert colors (Red/Orange)
          'alert': '#FF6B6B',
          'alert-dark': '#EF4444',
          'alert-light': '#FECACA',
          
          // Background colors
          'background': '#F8F9FA',
          'background-dark': '#E5E7EB',
          
          // Text colors
          'text-primary': '#1E2A38',
          'text-secondary': '#4B5563',
          'text-light': '#F8F9FA'
        },
        backgroundColor: {
          'main': '#F8F9FA',
        },
      },
    },
    plugins: [],
  }