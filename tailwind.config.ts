import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{tsx,mdx}"],
  plugins: [require("@tailwindcss/typography")],
  extend: {
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
      self: ["serif"],
    },
  },
};
export default config;
