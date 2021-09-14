import { extendTheme } from "@chakra-ui/react";
import { theme as base, ThemeConfig } from "@chakra-ui/theme";
import { globalStyles } from "./styles";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const fonts = {
  body: "Inter, sans-serif",
  heading: "Inter, sans-serif",
};

const colors = {
  bg: base.colors.gray,
  color: base.colors.red,
};

const theme = extendTheme({
  config,
  fonts,
  colors,
  styles: globalStyles,
  components: {
    Button: {
      baseStyle: {
        _focus: {
          ring: 2,
          ringColor: base.colors.cyan[500],
        },
      },
    },
  },
});

export default theme;
