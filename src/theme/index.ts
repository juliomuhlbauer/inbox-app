import { extendTheme } from "@chakra-ui/react";
import { theme as base, ThemeConfig } from "@chakra-ui/theme";
import components from "./components";
import { globalStyles } from "./styles";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const fonts = {
  heading: "Inter, sans-serif",
  body: "Inter, sans-serif",
};

const colors = {
  bg: base.colors.gray,
  color: base.colors.cyan,
};

const theme = extendTheme({
  config,
  fonts,
  colors,
  components,
  styles: globalStyles,
});

export default theme;
