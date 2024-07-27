/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    screens: {
      sm: "150px",
      md: "640px",
      lg: "1024px",
      xm: "1280px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6b120a",
          secondary: "#eb5d50",
          accent: "#353535",
          neutral: "#fff",
          "base-100": "#f1f1f1",
          faded: "#9BA2AE",
          info: "#00faff",
          success: "#00f190",
          warning: "#e97400",
          error: "#d93458",
        },
      },
    ],
  },
  darkMode: "class",
};
