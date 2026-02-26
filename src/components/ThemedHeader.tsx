import { Text } from "react-native";

export function ThemedHeader({ title }: { title: string }) {
  return <Text style={{ fontSize: 24, fontWeight: "bold" }}>{title}</Text>;
}
