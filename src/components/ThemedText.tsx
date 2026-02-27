import { createText } from "@shopify/restyle";
import { theme } from "../theme/theme";

const ThemedText = createText<typeof theme>();

export default ThemedText;
