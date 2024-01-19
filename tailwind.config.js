/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				dark: "#161616",
			},
			fontFamily: {
				dosis: ["Dosis", "sans-serif"],
			},
		},
	},
	darkMode: "class",
};
