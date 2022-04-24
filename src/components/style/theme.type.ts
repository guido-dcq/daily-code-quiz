export type ColorOptions =
  | "primary"
  | "accent"
  | "positive"
  | "warning"
  | "negative"
  | "neutral"
  | "open"
  | "done"
  | "progress"
  | "closed"
  | "error";
export type ColorTextOptions = "primary" | "secondary";
export type TintShadeOptions =
  | "lighter"
  | "light"
  | "default"
  | "dark"
  | "darker";
export type GrayOptions =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export interface Color {
  lighter: string;
  light: string;
  default: string;
  dark: string;
  darker: string;
}

interface Colors {
  black: string;
  white: string;

  text: {
    primary: string;
    secondary: string;
  };

  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  primary: Color;
  accent: Color;
  positive: Color;
  warning: Color;
  negative: Color;
  neutral: Color;
  open: Color;
  done: Color;
  progress: Color;
  closed: Color;
  error: Color;
}

export default interface Theme {
  colors: Colors;

  helpers: {
    fontSmoothing: string;
  };

  font: {
    // Typography
    fontFamilyMain: string;
    fontFamilySecondary: string;
    fontSizes: {
      caption: string;
      body: string;
      bodyLarge: string;
      h4: string;
      h3: string;
      h2: string;
      h1: string;
      title: string;
    };
    fontWeights: {
      regular: 400;
      medium: 500;
      semiBold: 600;
      bold: 700;
    };
  };

  boxShadow: string;

  mediaQueries: {
    extraSmallUp: string;
    extraSmallDown: string;
    smallUp: string;
    smallDown: string;
    mediumUp: string;
    mediumDown: string;
    largeUp: string;
    largeDown: string;
  };
}
