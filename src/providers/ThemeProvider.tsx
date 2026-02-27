import { ThemeProvider as RestyleThemeProvider } from "@shopify/restyle";
import { theme } from "../theme/theme";

export function ThemeProvider({ children }) {
  return <RestyleThemeProvider theme={theme}>{children}</RestyleThemeProvider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
