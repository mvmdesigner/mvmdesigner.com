/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      colors: {
        'primary': '#053255',
        'primary-invert': findColorInvert('#053255'),
        'gold': '#bd8f21',
        'gold-invert': findColorInvert('#bd8f21'),
      },
      extend: {},
    },
    plugins: [],
};