// theme.ts
import { createTheme } from "@shopify/restyle";

export const LightPalette = {
  primary: "#F4F4F5",
  primaryDark: "#D4D4D8",
  accent: "#D81B60",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray400: "#9CA3AF",
  gray800: "#1F2937",
  white: "#FFFFFF",
  black: "#000000",
  text: "#1F2937",
  textSecondary: "#6B7280",
  background: "#FAFAFA",
};
export const DarkPalette = {
  primary: "#3A3F47",
  primaryDark: "#2A2F36",
  accent: "#E91E63",
  gray100: "#1F1F1F",
  gray200: "#D1D5DB",
  gray400: "#9CA3AF",
  gray800: "#2D2D2D",
  white: "#F3F4F6",
  black: "#000000",
  text: "#E5E7EB",
  textSecondary: "#9CA3AF",
  background: "#111827",
};

export const createAppTheme = (palette: typeof LightPalette) =>
  createTheme({
    colors: {
      ...palette,
      background: palette.background,
      text: palette.text,
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
        // color: "text",
        fontSize: 28,
        fontFamily: "Inter-Regular",
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
