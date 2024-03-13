/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./**/*.{razor,html,cshtml}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            colors: {
                primary: colors.purple,
                secondary: colors.blue,
            },
            fontFamily: {
                sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('flowbite/plugin')
    ],
    darkMode: "class"
}