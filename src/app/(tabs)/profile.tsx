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

export default function ProfileScreen() {
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
    </ThemedView>
  );
}
