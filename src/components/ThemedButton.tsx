import { createBox, createText, useTheme } from "@shopify/restyle";
import React from "react";
import { TouchableOpacity } from "react-native";
import { theme } from "../theme/theme";

const Box = createBox<typeof theme>();
const Text = createText<typeof theme>();

export type ThemedButtonProps = {
  variant?: "primary" | "secondary";
  label: string;
  onPress?: () => void;
  disabled?: boolean;
};

const ThemedButton: React.FC<ThemedButtonProps> = ({
  variant = "primary",
  label,
  onPress,
  disabled,
}) => {
  const themeObj = useTheme<typeof theme>();
  const variantStyles = themeObj.buttonVariants[variant];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: themeObj.colors[variantStyles.backgroundColor],
        padding: themeObj.spacing[variantStyles.padding],
        borderRadius: themeObj.borderRadii[variantStyles.borderRadius],
        borderWidth: variantStyles.borderWidth || 0,
        borderColor: variantStyles.borderColor
          ? themeObj.colors[variantStyles.borderColor]
          : undefined,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Text variant="body" color="primaryDark">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemedButton;
