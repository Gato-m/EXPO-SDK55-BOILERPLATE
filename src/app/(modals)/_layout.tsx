import { useTheme } from "@shopify/restyle";
import { Stack } from "expo-router";
import { Theme } from "../../theme";

export default function ModalsLayout() {
  const theme = useTheme<Theme>();

  return (
    <Stack
      screenOptions={({ route }) => ({
        presentation: "transparentModal",
        animation: "slide_from_bottom",
        headerShown: true,
        headerTitle: route.name.charAt(0).toUpperCase() + route.name.slice(1),

        // 🔥 Šeit notiek tumšās/light tēmas pārslēgšana
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTitleStyle: {
          color: theme.colors.text,
        },
        headerTintColor: theme.colors.text,
      })}
    />
  );
}
