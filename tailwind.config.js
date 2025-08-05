module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50: '#F9FAFB',
        },
        indigo: {
          900: '#312E81',
          800: '#3730A3',
          700: '#4338CA',
          600: '#4F46E5',
          500: '#6366F1',
          400: '#818CF8',
          300: '#A5B4FC',
          200: '#C7D2FE',
          100: '#E0E7FF',
          50: '#EEF2FF',
        },
        sky: {
          500: '#007AFF',
          600: '#005BB5',
          700: '#00458B',
        },
        fuchsia: {
          500: '#C759F5',
          600: '#A03DA8',
          700: '#7E3794',
        },
        emerald: {
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        amber: {
          500: '#FFA500',
          600: '#FF8C00',
          700: '#FF7F50',
        },
        violet: {
          500: '#A855F7',
          600: '#7E3BF5',
          700: '#6B21A8',
        },
        rose: {
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};