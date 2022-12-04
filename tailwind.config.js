/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			"bg-body": "#151515",
			"bg-contact": "#242424",
			accent: "#4ee1a0",
			text1: "#d9d9d9",
			text2: "#ffffff",
			invalid: "#ff6f5b",
		},
		fontSize: {
			"fs-18": "0.8rem",
			"fs-88": "5.5rem",
			"fs-72": "4.5rem",
			"fs-40": "2.5rem",
			"fs-48": "3rem",
			"fs-32": "2rem",
			"fs-24": "1.5rem",
		},
		extend: {},

		plugins: [],
	},
};
