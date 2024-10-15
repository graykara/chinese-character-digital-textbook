import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "lined-paper":
          "repeating-linear-gradient(transparent, transparent 30px, #d2cbbd 30px, #d2cbbd 33px)",
      },
      fontFamily: {
        nanum: "NanumBarunGothic",
        haeseo: "Haeseo",
        chosun: "ChosunSm",
        cookierun: "CookieRun",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        example: "#3333ff",
        answer: "#ff0000",
        reading: "#2664d9",
        "main-content": "#c43c5a",
      },
    },
  },
  plugins: [],
};
export default config;
