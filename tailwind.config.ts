/** @type {import('tailwindcss').Config} */

const createPxEntries = (size: number) => {
  return {
    0: "0",
    ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return { ...accumulator, [`${i * 4}`]: `${(i * 4) / 10}rem` };
    }),
  };
};

const PX_ENTRIES = createPxEntries(500);

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: PX_ENTRIES,
    fontSize: {
      8: "0.8rem",
      10: "1rem",
      12: "1.2rem",
      14: "1.4rem",
      16: "1.6rem",
      18: "1.8rem",
      20: "2.0rem",
      24: "2.4rem",
      28: "2.8rem",
      32: "3.2rem",
    },
    fontWeight: {
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
    },
    fontFamily: {
      sans: ["Pretendard", "Arial"],
    },
    borderRadius: {
      none: "0px",
      4: "0.4rem",
      8: "0.8rem",
      10: "1rem",
      12: "1.2rem",
      16: "1.6rem",
      24: "2.4rem",
      full: "9999px",
    },
    zIndex: {
      base: "1",
      nav: "2",
      popup: "999",
      floating: "1000",
    },
    colors: {
      transparent: "transparent",
      white: "#FFF",
      black: "#000",
      green: "#74EFC2",
      blue: "#4174F7",
      background: "#121212",
      grey: {
        1: "#FFF",
        4: "#BCC1CB",
        6: "#636872",
        7: "#3C4048",
      },
    },
  },
  plugins: [],
};
