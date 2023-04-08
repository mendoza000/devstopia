/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				dark: "#161616",
			},
		},
	},
	// plugins: [require("rippleui")],
	darkMode: "class",
};
