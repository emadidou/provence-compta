/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2545',
          50: '#EAF0F7', 100: '#D6E2EF', 200: '#AEC4DD', 300: '#7E9CC0',
          400: '#4E6E96', 500: '#2C4A70', 600: '#16335A', 700: '#0B2545',
          800: '#081B33', 900: '#051121',
        },
        accent: {
          // Teinte assombrie (logo : #0098A8) pour un contraste AA : 5,0:1 sur blanc, 4,6:1 sur le fond gris clair.
          DEFAULT: '#007B89',
          50: '#E6F6F8', 100: '#C9ECF0', 200: '#97DAE1', 300: '#5FC4CF',
          400: '#2BAABA', 500: '#007B89', 600: '#006B77', 700: '#066470',
          800: '#0A4F58', 900: '#0B3942',
        },
        ink: '#16202E',
        mist: '#F5F7FA',
        line: '#E3E8EF',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,37,69,0.04), 0 8px 24px -12px rgba(11,37,69,0.12)',
        'card-hover': '0 4px 8px rgba(11,37,69,0.06), 0 20px 40px -16px rgba(11,37,69,0.22)',
        soft: '0 1px 3px rgba(11,37,69,0.06)',
      },
      borderRadius: { xl2: '1rem' },
      maxWidth: { content: '1180px' },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: { 'fade-up': 'fadeUp 0.6s ease-out both' },
    },
  },
  plugins: [],
};
