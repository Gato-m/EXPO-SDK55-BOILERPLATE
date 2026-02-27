import React from "react";
import { ThemedText } from "./ThemedText";

export function ThemedHeader({ children }: { children: React.ReactNode }) {
  return <ThemedText variant="header">{children}</ThemedText>;
}
