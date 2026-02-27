import { createTheme } from "@shopify/restyle";

export const palette = {
  primary: "#0A84FF",
  primaryDark: "#0060DF",

  gray100: "#F5F5F5",
  gray200: "#E5E5E5",
  gray800: "#333333",

  white: "#FFFFFF",
  black: "#000000",
};

export const theme = createTheme({
  colors: {
    ...palette,
    background: palette.white,
    text: palette.gray800,
  },

  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },

  borderRadii: {
    s: 4,
    m: 8,
    l: 16,
    full: 999,
  },

  textVariants: {
    defaults: {
      color: "text",
      fontSize: 16,
      fontFamily: "Inter-Regular",
    },
    header: {
      color: "text",
      fontSize: 28,
      fontFamily: "Inter-Bold",
    },
    body: {
      fontSize: 16,
      fontFamily: "Inter-Regular",
    },
    small: {
      fontSize: 12,
      fontFamily: "Inter-Regular",
    },
  },

  buttonVariants: {
    primary: {
      backgroundColor: "primary",
      padding: "m",
      borderRadius: "m",
    },
    secondary: {
      backgroundColor: "gray100",
      padding: "m",
      borderRadius: "m",
      borderWidth: 1,
      borderColor: "primary",
    },
  },

  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
