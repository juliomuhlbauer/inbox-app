import { Flex, Heading } from "@chakra-ui/react";
import { memo } from "react";
import UndoMenu from "./undo-menu";

const Nav = () => {
  return (
    <Flex justify="space-between">
      <Heading as="h1">Inbox</Heading>
      <UndoMenu />
    </Flex>
  );
};

export default memo(Nav);
