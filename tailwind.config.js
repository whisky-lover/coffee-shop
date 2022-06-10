/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		fontFamily: {
			"sans-serif": ["Lato", "sans-serif"],
		},
		extend: {
			colors: {
				brown: "#AF795D",
				lightBrown: "#DCB5A1",
				darkGray: "#A6A6AA",
				gray: "#CBCBD4",
				lightGray: "#F8F7FA",
			},
		},
	},
	plugins: [],
};
