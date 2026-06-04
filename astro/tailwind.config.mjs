/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // KMS brand tokens — mirror client/src/components/KmsLayout.tsx C{}
        kms: {
          blueDark:   "#1E5080",
          blueMid:    "#235A91",
          blueSky:    "#3796D2",
          blueLight:  "#4BAAE0",
          green:      "#78A546",
          greenDark:  "#5E8535",
          greenLight: "#8FBF58",
          darkBg:     "#1A2535",
          darkBg2:    "#1E2F44",
          lightBg:    "#F4F7FA",
          textDark:   "#1A2535",
          textMid:    "#3D5166",
        },
      },
      fontFamily: {
        // Match existing KMS typography
        headline: ['"Barlow Condensed"', "sans-serif"],
        body:     ['"Source Sans 3"', "sans-serif"],
        nav:      ['"Barlow"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
