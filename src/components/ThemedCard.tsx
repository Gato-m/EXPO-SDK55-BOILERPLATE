import { createBox, useTheme } from "@shopify/restyle";
import React from "react";
import { theme } from "../theme/theme";

const Box = createBox<typeof theme>();

export type ThemedCardProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  style?: any;
};

const ThemedCard: React.FC<ThemedCardProps> = ({
  children,
  variant = "secondary",
  style,
}) => {
  const themeObj = useTheme<typeof theme>();
  const cardStyle = {
    backgroundColor:
      variant === "primary" ? themeObj.colors.primary : themeObj.colors.gray100,
    borderRadius: themeObj.borderRadii.m,
    padding: themeObj.spacing.m,
    ...style,
  };

  return <Box style={cardStyle}>{children}</Box>;
};

export default ThemedCard;
