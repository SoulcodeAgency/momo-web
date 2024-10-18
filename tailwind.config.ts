import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './integrations/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(13 47 59)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-headings': 'inherit',
          },
        },
      },
      boxShadow: {
        'custom-teal': '0px 0px 20px 7px rgb(13 47 59)',
      },
    },
  },
  safelist: [
    {
      pattern: /grid-cols-*/,
      variants: ['md'],
    },
  ],
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
export default config;
