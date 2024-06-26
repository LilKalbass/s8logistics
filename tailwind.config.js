
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      ph: '360px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    colors: {
      body: '#e5e5e5',
      white: '#fff',
      green: {DEFAULT: 'rgb(0, 145, 106)', hover: '#40807d'},
      black: {DEFAULT: '#000000', heavy: '#1b211c'},
      orange: {DEFAULT: '#f2994a', hover: '#da863c'},
      grey: 'rgb(135, 135, 135)',
      secondary: 'rgb(60, 60, 60)',
      outline: '#f1f1f1',
      pink: '#ffa5a5'
    },
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        hero: 'url(/assets/BgHeroDesk.webp)',
        heroph: 'url(/assets/BgHeroPhone.webp)',
        service: 'url(/assets/ServBg.png)',
        contactForm: 'url(/assets/PhoneCallBg.webp)',
        contactFormDesk: 'url(/assets/PhoneCallBgDesk.webp)',
        footer: 'url(/assets/Footer.png)',
      },
      boxShadow: {
        primary: '40px 4px 40px 0px rgba(68, 68, 68, 0.25)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
