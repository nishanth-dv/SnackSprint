/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'pulse-gray': {
          '0%, 100%': { backgroundColor: '#e2e8f0' },
          '50%': { backgroundColor: '#cbd5e1' },
        },
      },
      animation: {
        'pulse-gray': 'pulse-gray 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
