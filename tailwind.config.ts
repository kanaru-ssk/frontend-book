import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{tsx,mdx}"],
  plugins: [typography],
  theme: {
    extend: {
      height: {
        screen: "100svh",
      },
      fontFamily: {
        sans: ["Helvetica", "sans-serif"],
        self: ["serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              margin: "0 4px",
              padding: "4px 8px",
              backgroundColor: "#e5e5e5",
              borderRadius: "4px",
            },
            "code::before": null,
            "code::after": null,
          },
        },
      },
    },
  },
};

export default config;
