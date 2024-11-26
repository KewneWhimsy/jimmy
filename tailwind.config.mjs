/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// couleurs définie dans le global.css
				text: 'var(--textcolor)',
				bg: 'var(--bgcolor)',
				mid:'var(--midcolor)',
				btn:'var(--btncolor)'
			},
			borderColor: {
				text: 'var(--textcolor)',
				mid:'var(--midcolor)', 
			},
			fontFamily: {
				text: ["system-ui", "sans-serif", "Arial"], // police de base ou autre police lisible et universel
				heading: ["sans-serif", "Tahoma", "Verdana", "system-ui", "Arial"], // police des titres
			},
		},
	},
	plugins: [],
}
