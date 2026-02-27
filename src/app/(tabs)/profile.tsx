import {
  ThemedButton,
  ThemedCard,
  ThemedHeader,
  ThemedSpacer,
  ThemedText,
  ThemedView,
} from "../../components";

import { useTheme } from "@shopify/restyle";
import { useThemeMode } from "../../providers/ThemeProvider";
import { Theme } from "../../theme";

export default function Profile() {
  const { toggle, mode } = useThemeMode();
  const theme = useTheme<Theme>();

  const colorKeys = Object.keys(theme.colors) as (keyof Theme["colors"])[];

  return (
    <ThemedView style={{ padding: 20 }}>
      <ThemedHeader>Krāsu Palete</ThemedHeader>
      <ThemedSpacer size="xl" />

      <ThemedButton
        label={
          mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
        }
        variant="secondary"
        onPress={toggle}
      />

      <ThemedSpacer size="xl" />

      <ThemedSpacer size="m" />

      {colorKeys.map((key) => (
        <ThemedCard
          key={key}
          style={{
            backgroundColor: theme.colors[key],
            marginBottom: theme.spacing.s,
            padding: theme.spacing.s,
          }}
        >
          <ThemedText
            variant="body"
            style={{
              color:
                key === "white" || key === "gray800"
                  ? theme.colors.gray200
                  : theme.colors.gray800,
            }}
          >
            {key}: {theme.colors[key]}
          </ThemedText>
        </ThemedCard>
      ))}
    </ThemedView>
  );
}
