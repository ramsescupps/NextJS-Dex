/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'z5': '344px',  // Galaxy Z Fold 5
        's8': '360px',  // Galaxy S8+
        'se': '375px',  // iPhone SE
        'xs': '390px',  // iPhone 12 Pro
        'du': '540px',  // Surface Duo
      },
      colors: {
        primary: {
          default: 'rgba(175, 177, 198, 0.07)',
          dark: 'rgba(14, 16, 20, 1)',
          light: 'rgba(36, 47, 54, 1)',
          medium: 'rgba(255, 255, 255, 0.68)',
          slight: 'rgba(25, 31, 42, 1)',
        },
        seconday: {
          default: 'rgba(20, 24, 31, 1)',
          dark: 'rgba(88, 88, 88, 1)',
          light: 'rgba(158, 158, 158, 0.3)',
          middle: 'rgba(158, 158, 158, 1)',
          medium: 'rgba(205, 212, 230, 1)',
          slight: 'rgba(242, 242, 242, 1)',
        },
        switch: {
          default: 'rgba(35, 38, 43, 1)',
          dark: 'rgba(24, 25, 28, 1)',
        },
        dark: 'rgba(25, 27, 32, 1)',
        green: 'rgba(59, 241, 165, 1)',
        yellow: 'rgba(238, 179, 29, 1)',
        cancel: 'rgba(255, 133, 106, 1)',
      },
      fontFamily: {
        poppins: ['Poppins'],
        dmsans: ['DMSans']
      },
      keyframes: {
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'pulse-scale': 'pulse-scale 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}