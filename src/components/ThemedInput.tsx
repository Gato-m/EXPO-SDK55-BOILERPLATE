import { createBox, useTheme } from "@shopify/restyle";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { theme } from "../theme/theme";

const Box = createBox<typeof theme>();

export type ThemedInputProps = TextInputProps & {
  variant?: "primary" | "secondary";
};

const ThemedInput: React.FC<ThemedInputProps> = ({
  variant = "primary",
  style,
  ...props
}) => {
  const themeObj = useTheme<typeof theme>();
  const inputStyle = {
    backgroundColor:
      variant === "primary" ? themeObj.colors.white : themeObj.colors.gray100,
    borderRadius: themeObj.borderRadii.s,
    padding: themeObj.spacing.s,
    borderWidth: variant === "secondary" ? 1 : 0,
    borderColor: variant === "secondary" ? themeObj.colors.primary : undefined,
    color: themeObj.colors.text,
    ...style,
  };

  return <TextInput style={inputStyle} {...props} />;
};

export default ThemedInput;
