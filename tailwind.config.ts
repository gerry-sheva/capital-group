import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				black: '#101010',
				lightWhite: 'rgba(246, 243, 237, .3)',
				gold: '#E2A220',
				lightGold: '#EAB650',
			},
		},
	},
	plugins: [],
}
export default config
