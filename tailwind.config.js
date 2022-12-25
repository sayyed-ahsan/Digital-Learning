module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3b5bdb",

          "secondary": "#20c997",

          "accent": "#22b8cf",

          "neutral": "#F0F4F5",

          "base-100": "#FFFFFF",

          "info": "#17233e",

          "success": "#029E9D",

          "warning": "#27334C",

          "error": "#F32B42",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

