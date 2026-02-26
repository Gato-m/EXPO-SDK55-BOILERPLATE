import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { ThemedHeader, ThemedText, ThemedView } from "../../components";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ThemedView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <View style={{ position: "absolute", top: 24, right: 24 }}>
        <TouchableOpacity
          onPress={() => router.push("/(modals)/about")}
          accessibilityLabel="About"
        >
          <Ionicons
            name="information-circle-outline"
            size={28}
            color="#007AFF"
          />
        </TouchableOpacity>
      </View>
      <ThemedHeader title="Welcome to Expo Router 6 Boilerplate" />
      <ThemedText style={{ marginTop: 16, fontSize: 16 }}>
        This is your starter entry point. Edit this screen to begin your app!
      </ThemedText>
      <ThemedText style={{ marginTop: 8, color: "#888" }}>
        Use the tabs below to navigate.
      </ThemedText>
    </ThemedView>
  );
}
