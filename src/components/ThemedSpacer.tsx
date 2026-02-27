import { createBox, useTheme } from "@shopify/restyle";
import React from "react";
import { theme } from "../theme/theme";

const Box = createBox<typeof theme>();

export type ThemedSpacerProps = {
  size?: keyof typeof theme.spacing;
  horizontal?: boolean;
};

const ThemedSpacer: React.FC<ThemedSpacerProps> = ({
  size = "m",
  horizontal = false,
}) => {
  const themeObj = useTheme<typeof theme>();
  const spacerStyle = horizontal
    ? { width: themeObj.spacing[size], height: 1 }
    : { height: themeObj.spacing[size], width: 1 };

  return <Box style={spacerStyle} />;
};

export default ThemedSpacer;
