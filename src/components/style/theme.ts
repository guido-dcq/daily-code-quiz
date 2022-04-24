import { Theme } from "@emotion/react";

export const breakpoints = {
  extraSmall: 575.98,
  small: 767.98,
  medium: 991.98,
  large: 1199.98,
};

export const white = "rgb(255, 255, 255)"; // White
export const black = "rgb(0, 0, 0)"; // Black

export const text = {
  primary: "#111827",
  secondary: "#6B7280",
};

export const gray = {
  50: "#F9FAFB",
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#D1D5DB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
};

export const backgrounColors = {
  purple: "#d8b4fe",
};

export const purple = {
  lighter: "#f5f3ff",
  light: "#ddd6fe",
  default: "#8b5cf6",
  dark: "#6d28d9",
  darker: "#4c1d95",
};

export const green = {
  lighter: "#ecfdf5",
  light: "#a7f3d0",
  default: "#059669",
  dark: "#047857",
  darker: "#064e3b",
};

export const yellow = {
  lighter: "#fefce8",
  light: "#fef9c3",
  default: "#fde047",
  dark: "#eab308",
  darker: "#a16207",
};

export const red = {
  lighter: "#fef2f2",
  light: "#fecaca",
  default: "#ef4444",
  dark: "#b91c1c",
  darker: "#991b1b",
};

export const neutralGray = {
  lighter: "#F3F4F6",
  light: "#D1D5DB",
  default: "#374151",
  dark: "#1F2937",
  darker: "#111827",
};

const theme: Theme = {
  colors: {
    black,
    white,
    text,
    gray,
    backgrounColors,
    primary: purple,
    accent: purple,
    positive: green,
    warning: yellow,
    negative: red,
    neutral: neutralGray,
    open: red,
    done: green,
    progress: yellow,
    closed: neutralGray,
    error: red,
  },

  helpers: {
    fontSmoothing: `
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    `,
  },

  boxShadow: ` drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))`,

  font: {
    // Typography
    fontFamilyMain: "Inter, sans-serif",
    fontFamilySecondary: "Raleway, sans-serif",
    fontSizes: {
      caption: "0.86em",
      body: "1em",
      bodyLarge: "1.14em",
      h4: "1.28em",
      h3: "1.43em",
      h2: "1.71em",
      h1: "2.29em",
      title: "3em",
    },
    fontWeights: {
      regular: 300,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },

  mediaQueries: {
    // 575.98px: extra small devices (phones, portrait phones)
    extraSmallUp: `@media screen and (min-width: ${breakpoints.extraSmall}px)`,
    extraSmallDown: `@media screen and (max-width: ${breakpoints.extraSmall}px)`,
    // 767.98px: small devices (landscape phones)
    smallUp: `@media screen and (min-width: ${breakpoints.small}px)`,
    smallDown: `@media screen and (max-width: ${breakpoints.small}px)`,
    // 991.98px: medium devices (tablets)
    mediumUp: `@media screen and (min-width: ${breakpoints.medium}px)`,
    mediumDown: `@media screen and (max-width: ${breakpoints.medium}px)`,
    // 1199.98px: large devices (desktops)
    largeUp: `@media screen and (min-width: ${breakpoints.large}px)`,
    largeDown: `@media screen and (max-width: ${breakpoints.large}px)`,
  },
};

export default theme;
