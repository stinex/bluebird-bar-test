/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        // you can configure the container to be centered
        center: true,

        padding: {
          DEFAULT: '15px',
          sm: '15px',
          md: '39px',
          lg: '39px',
          xl: '15px',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1200px',
        '3xl': '1919px',
      },
      fontFamily: {
        body: ['Raleway', 'Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        mainColor: '#2c5b9b',
        secondaryColor: '#1f4977',
        typeographyColor: '#5C5C5C',
        whiteColor: '#FFFFFF',
        complementaryColor: '#F7F7F7',
        blueColor: '#AFC7E9',
      },
    },
  },
  plugins: [],
}
