/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9ec942",

          "secondary": "#82a805",

          "accent": "#e01428",

          "neutral": "#16171D",

          "base-100": "#432C5E",

          "info": "#4AC3F2",

          "success": "#75EBC6",

          "warning": "#E8C82C",

          "error": "#ED3026",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

