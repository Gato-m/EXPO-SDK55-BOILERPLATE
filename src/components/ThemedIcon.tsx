import React from "react";
import { createBox, useTheme } from "@shopify/restyle";
import { theme } from "../theme/theme";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Box = createBox<typeof theme>();

export type ThemedIconProps = {
  name: string;
  size?: number;
  color?: string;
  variant?: "primary" | "secondary";
};

const ThemedIcon: React.FC<ThemedIconProps> = ({ name, size = 24, color, variant = "primary" }) => {
  const themeObj = useTheme<typeof theme>();
  const iconColor =
    color || (variant === "primary" ? themeObj.colors.primary : themeObj.colors.gray800);

  return (
    <View>
      <MaterialIcons name={name} size={size} color={iconColor} />
    </View>
  );
};

export default ThemedIcon;
