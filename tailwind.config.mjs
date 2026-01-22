import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				sand: '#f7f3ec',
				ink: '#1b1b1b',
				inkMuted: '#5a6068',
				surface: '#ffffff',
				surfaceMuted: '#f1ede5',
				accent: '#0f766e',
				accentStrong: '#115e59',
				accentSoft: '#c9f0ea',
				line: '#e3ddd2',
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
