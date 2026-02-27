import { useTheme } from "@shopify/restyle";
import { Tabs } from "expo-router";
import { Theme } from "../../theme";

export default function TabsLayout() {
  const theme = useTheme<Theme>();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.primaryDark,
          borderTopColor: theme.colors.gray200,
        },
        tabBarActiveTintColor: theme.colors.accent,
        tabBarInactiveTintColor: theme.colors.gray200,

        headerStyle: {
          backgroundColor: theme.colors.primaryDark,
        },
        headerTitleStyle: {
          color: theme.colors.gray200,
        },
        headerTintColor: theme.colors.gray200,
      }}
    />
  );
}
