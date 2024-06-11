import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'text': {
          50: '#091306',
          100: '#12270c',
          200: '#254e18',
          300: '#377425',
          400: '#4a9b31',
          500: '#5cc23d',
          600: '#7dce64',
          700: '#9dda8b',
          800: '#bee7b1',
          900: '#def3d8',
          950: '#eff9ec',
        },
        'background': {
          50: '#0a1208',
          100: '#14240f',
          200: '#29471f',
          300: '#3d6b2e',
          400: '#528f3d',
          500: '#66b34d',
          600: '#85c270',
          700: '#a3d194',
          800: '#c2e0b8',
          900: '#e0f0db',
          950: '#f0f7ed',
        },
        'primary': {
          50: '#0a1406',
          100: '#14270c',
          200: '#274f17',
          300: '#3b7623',
          400: '#4e9d2f',
          500: '#62c43b',
          600: '#81d062',
          700: '#a1dc89',
          800: '#c0e8b0',
          900: '#e0f3d8',
          950: '#eff9eb',
        },
        'secondary': {
          50: '#080614',
          100: '#100c27',
          200: '#21174f',
          300: '#312376',
          400: '#412f9d',
          500: '#523bc4',
          600: '#7462d0',
          700: '#9789dc',
          800: '#bab0e8',
          900: '#dcd8f3',
          950: '#eeebf9',
        },
        'accent': {
          50: '#140613',
          100: '#270c27',
          200: '#4e184d',
          300: '#752474',
          400: '#9c309a',
          500: '#c33cc1',
          600: '#cf63cd',
          700: '#db8ada',
          800: '#e7b1e6',
          900: '#f3d8f3',
          950: '#f9ebf9',
        },
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
