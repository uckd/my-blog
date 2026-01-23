import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sand: 'rgb(var(--color-sand) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        inkMuted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        surfaceMuted: 'rgb(var(--color-surface-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accentStrong: 'rgb(var(--color-accent-strong) / <alpha-value>)',
        accentSoft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
      },
      boxShadow: {
        soft: '0 12px 30px rgba(16, 24, 40, 0.08)',
        glow: '0 30px 80px rgba(16, 24, 40, 0.12)',
      },
      maxWidth: {
        content: '68rem',
        narrow: '48rem',
      },
    },
    fontFamily: {
      sans: ['Atkinson', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [typography],
};
