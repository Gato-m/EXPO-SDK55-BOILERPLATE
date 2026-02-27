import { createBox } from "@shopify/restyle";
import { theme } from "../theme/theme";

const ThemedView = createBox<typeof theme>();

export default ThemedView;
