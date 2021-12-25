module.exports = {
	purge: {
		mode: 'all',
		content: ['./src/**/*.svelte', './src/**/*.html'],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
