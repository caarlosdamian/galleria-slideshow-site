import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        gallery: 'repeat(4,310px)',
      },
      gridAutoRows: {
        pixel: '10px',
      },
      spacing: {
        autoScreen: '1440px',
      },
      colors: {
        custom: {
          gray: '#7D7D7D',
          flashWhite: '#F3F3F3',
          platinum: '#E5E5E5',
        },
      },
      backgroundImage: {
        'card-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.84) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
