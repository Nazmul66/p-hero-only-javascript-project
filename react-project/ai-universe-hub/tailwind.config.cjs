/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ab61f4",
                  
          secondary: "#ffbcc5",
                  
          accent: "#3b147f",
                  
          neutral: "#151221",
                  
          base_100: "#383838",
                  
          info: "#98A9EB",
                  
          success: "#37D7B5",
                  
          warning: "#F1920E",
                  
          error: "#ED3B3E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
