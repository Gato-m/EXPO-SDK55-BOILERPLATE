// theme.ts
import { createTheme } from "@shopify/restyle";

export const LightPalette = {
  primary: "#fbfbfb",
  primaryDark: "#e6e6e6",
  accent: "#af2362",
  gray100: "#F5F5F5",
  gray200: "#d2d2d2",
  gray400: "#b9b9b9",
  gray800: "#333333",
  white: "#FFFFFF",
  black: "#000000",
  text: "#959595",
  textSecondary: "#818d9c",
};
export const DarkPalette = {
  primary: "#323e4d",
  primaryDark: "#262f3b",
  accent: "#af2362",
  gray100: "#222222",
  gray200: "#d2d2d2",
  gray400: "#b9b9b9",
  gray800: "#333333",
  white: "#dddada",
  black: "#000000",
  text: "#959595",
  textSecondary: "#818d9c",
};

export const createAppTheme = (palette: typeof LightPalette) =>
  createTheme({
    colors: {
      ...palette,
      background: palette.primaryDark,
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
        backgroundColor: "accent",
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
      accent: {
        backgroundColor: "accent",
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

export type Theme = ReturnType<typeof createAppTheme>;
