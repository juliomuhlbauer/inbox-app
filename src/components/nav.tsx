import { Flex, Heading } from "@chakra-ui/react";
import { memo } from "react";
import Menu from "./menu";

const Nav = () => {
  return (
    <Flex justify="space-between">
      <Heading as="h1">Inbox</Heading>
      <Menu />
    </Flex>
  );
};

export default memo(Nav);
