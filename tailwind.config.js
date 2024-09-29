/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: withOpacity("--color-primary-100"),
          200: withOpacity("--color-primary-200"),
          300: withOpacity("--color-primary-300"),
          400: withOpacity("--color-primary-400"),
        },
        background: withOpacity("--color-background"),
        dark: withOpacity("--color-dark"),
        textcolor: withOpacity("--color-text"),
      },
      fontFamily: {
        sans: ["var(--font-morabba)", ...fontFamily.sans],
        iranYekan: ["var(--font-iran-yekan)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("flowbite/plugin"),
],
};
