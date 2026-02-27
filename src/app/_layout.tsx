import { Stack } from "expo-router";
import { ThemeProvider } from "../providers/ThemeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="(modals)"
          options={{
            headerShown: false,
            presentation: "transparentModal", // ← svarīgi
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
