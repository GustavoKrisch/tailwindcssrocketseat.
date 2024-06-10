import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        gustavo: '#FF0000',
      }
    },
  },
  plugins: [],
};
export default config;
