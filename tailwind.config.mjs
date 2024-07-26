/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"White" : "#ffffff",
				"Orange" : "#FF4500",
				"Blue" : "#024379",
				"Black" : "#000000",
				"Deny" : "#fe0001",
				"Accept" : "#107d00",
			},
			fontFamily:{
				"Poppins" : "Poppins",
				"Oswald" : "Oswald",
			}
		},
	},
	plugins: [],
}
