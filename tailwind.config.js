const { default: daisyui } = require("daisyui");

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // for React files
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
