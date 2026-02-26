import { Stack } from "expo-router";

export default function ModalsLayout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        presentation: "transparentModal", // ← svarīgi iOS
        animation: "slide_from_bottom", // ← tagad iOS respektē
        headerShown: true,
        headerTitle: route.name.charAt(0).toUpperCase() + route.name.slice(1),
      })}
    />
  );
}
