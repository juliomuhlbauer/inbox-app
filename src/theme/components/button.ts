import { ComponentSingleStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Button: ComponentSingleStyleConfig = {
  variants: {
    float: (props) => ({
      color: mode("gray.600", "gray.500")(props),
      bgColor: mode("gray.200", "gray.800")(props),
      _hover: { bgColor: mode("gray.300", "gray.700")(props) },
    }),
    action: (props) => ({
      color: mode("gray.600", "gray.500")(props),
      _hover: { bgColor: mode("gray.300", "gray.700")(props) },
    }),
    menu: (props) => ({
      color: mode("gray.800", "gray.300")(props),
      bgColor: mode("gray.200", "gray.800")(props),
      _hover: { bgColor: mode("gray.300", "gray.700")(props) },
    }),
  },
};

export default Button;
