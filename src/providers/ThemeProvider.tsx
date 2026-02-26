import { createContext, ReactNode, useContext, useState } from "react";
import { theme } from "../theme/theme";

const ThemeContext = createContext(theme);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme] = useState(theme);
  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
