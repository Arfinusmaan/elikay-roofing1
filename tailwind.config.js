/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        elikay: {
          // Primary Vibrant Magenta / Pink directly from the logo
          primary: '#D81B85',
          primaryHover: '#B3136D',
          primaryMuted: '#F3D0E4',
          magenta: '#D81B85',
          blue: '#D81B85', // Aliased to logo color so any elikay-blue matches the logo
          
          // Deep Imperial Plum / Royal Purple directly from the logo typography
          brandPlum: '#47044B',
          brandDeep: '#22072A',
          deepBlue: '#38073F',
          plum: '#5E0E69',
          
          // Neutral tones
          charcoal: '#111111',
          charcoalSecondary: '#1C1C1C',
          lightGray: '#DBDBDB',
          altGray: '#D5D5D5',
          borderGray: '#B3B3B3',
          
          // Supporting & Hover tones
          supportingBlue: '#B3136D',
          mutedBlue: '#EAA6D1',
          
          canvas: '#F8F6F8',
          surface: '#FFFFFF',
        }
      },
      fontFamily: {
        display: ['"Clash Display"', 'Archivo', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'Colfax', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px -2px rgba(17, 17, 17, 0.05), 0 1px 4px -1px rgba(17, 17, 17, 0.03)',
        'elevated': '0 10px 30px -5px rgba(71, 4, 75, 0.15), 0 4px 12px -2px rgba(17, 17, 17, 0.04)',
        'deep': '0 20px 40px -10px rgba(71, 4, 75, 0.3)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      }
    },
  },
  plugins: [],
}
