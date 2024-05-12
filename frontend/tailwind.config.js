const { nextui } = require('@nextui-org/react')

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				'sea-light': {
					extend: 'dark',
					components: {
						Button: {
							styles: {
								base: {
									background: '#FFFFF7',
								},
							},
						},
					},
					colors: {
						background: '#FFFFF7',
						foreground: '#1b1d04',
						primary: {
							DEFAULT: '#DCE32E',
						},
						secondary: {
							DEFAULT: '#C5EF85',
						},
						accent: {
							DEFAULT: '#8BE959',
						},
						focus: '#DCE32E',
					},
					layout: {
						disabledOpacity: '0.3',
						radius: {
							small: '8px',
							medium: '8px',
							large: '16px',
						},
					},
				},
			},
		}),
	],
}
