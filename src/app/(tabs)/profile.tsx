import {
  ThemedButton,
  ThemedCard,
  ThemedHeader,
  ThemedIcon,
  ThemedInput,
  ThemedSpacer,
  ThemedText,
  ThemedView,
} from "../../components";
import { useThemeMode } from "../../providers/ThemeProvider";

export default function Profile() {
  const { toggle, mode } = useThemeMode();

  return (
    <ThemedView>
      <ThemedHeader variant="header">Profile</ThemedHeader>

      <ThemedSpacer size="l" />

      <ThemedCard>
        <ThemedText variant="body">Welcome to your profile!</ThemedText>

        <ThemedSpacer size="m" />

        <ThemedInput placeholder="Update your name" variant="secondary" />

        <ThemedSpacer size="m" />

        <ThemedButton
          label="Save Changes"
          variant="primary"
          onPress={() => {}}
        />
      </ThemedCard>

      <ThemedSpacer size="l" />

      <ThemedIcon name="person" variant="primary" size={48} />

      <ThemedSpacer size="l" />

      {/* 🔥 Šī ir tumšās/light tēmas pārslēgšanas poga */}
      <ThemedButton
        label={
          mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
        }
        variant="secondary"
        onPress={toggle}
      />
    </ThemedView>
  );
}
