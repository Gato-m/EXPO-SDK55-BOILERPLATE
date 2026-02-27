import { useTheme } from "@shopify/restyle";
import { Tabs } from "expo-router";
import { Theme } from "../../theme";

export default function TabsLayout() {
  const theme = useTheme<Theme>();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.gray200,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray800,

        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTitleStyle: {
          color: theme.colors.text,
        },
        headerTintColor: theme.colors.text,
      }}
    />
  );
}
