/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#E3646E",
        purple: "#BB72E9",
        blue: "#3996DB",
        green: "#82BC4F",
        yellow: "#EABD5F",
        gray: {
          100: "#0D0E11",
          200: "#16181D",
          300: "#292C34",
          400: "#878EA1",
          500: "#C0C4CE",
          600: "#E2E4E9",
        },
      },
      fontFamily: {
        asap: ["Asap", "sans-serif"],
        inconsolata: ["Inconsolata", "sans-serif"],
        mavenpro: ["Maven Pro", "sans-serif"],
      },
      fontSize: {
        // titles
        "title-lg": ["56px", { lineHeight: "120%", fontWeight: "700" }],
        "title-md": ["24px", { lineHeight: "120%", fontWeight: "700" }],
        "title-sm": ["16px", { lineHeight: "120%", fontWeight: "700" }],

        //subtitle
        subtitle: ["20px", { lineHeight: "120%", fontWeight: "400" }],

        //text
        md: ["16px", { lineHeight: "140%", fontWeight: "400" }],
        sm: ["14px", { lineHeight: "140%", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
