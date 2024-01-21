import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{tsx,mdx}"],
  plugins: [require("@tailwindcss/typography")],
};
export default config;
