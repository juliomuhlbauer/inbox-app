import { ComponentSingleStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    _focus: {
      ring: 2,
      ringColor: "color.500",
    },
  },
  variants: {
    float: (props) => ({
      color: mode("gray.600", "gray.500")(props),
      bgColor: mode("gray.200", "gray.800")(props),
    }),
    ghost: (props) => ({
      color: mode("gray.600", "gray.500")(props),
    }),
  },
};

export default Button;
