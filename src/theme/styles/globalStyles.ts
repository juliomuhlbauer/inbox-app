import {
  mode,
  Styles,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

export const globalStyles: Styles = {
  global: (props) => ({
    "*": {
      boxSizing: "border-box",
    },
    html: {
      height: "100%",
      width: "100%",
      scrollBehavior: "smooth",
      WebkitTapHighlightColor: "transparent",
    },
    body: {
      height: "100%",
      width: "100%",
      position: "fixed",
      bg: mode("gray.100", "gray.900")(props),
      textColor: mode("gray.800", "gray.200")(props),
      overscrollBehavior: "none",
      userSelect: "none",
    },
    "#__next": {
      height: "100%",
      width: "100%",
    },
    _selection: {
      color: "white",
      background: "color.500",
    },
    ...scrollbar(props),
    ...nProgress,
  }),
};

const scrollbar: SystemStyleFunction = (props) => ({
  "@media (pointer: fine)": {
    "::-webkit-scrollbar": {
      width: "6px",
      height: "6px ",
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: "5px",
      bgColor: mode("gray.400", "gray.700")(props),
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: mode("color.500", "color.400")(props),
    },
    "::-webkit-scrollbar-corner": {
      bg: "transparent",
    },
  },
});

const nProgress: SystemStyleObject = {
  "#nprogress": {
    pointerEvents: "none",
  },
  "#nprogress .bar": {
    background: "color.200",
    position: "fixed",
    zIndex: "2000",
    top: 0,
    left: 0,
    width: "100%",
    height: "2px",
  },
};
