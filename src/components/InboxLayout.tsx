import { useMedia, useShortcuts } from "@/hooks";
import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import InboxInput from "./InboxInput";
import UndoMenu from "./UndoMenu";

const InboxList = dynamic(() => import("@/components/InboxList"), {
  ssr: false,
});

const Nav = () => {
  return (
    <Flex justify="space-between">
      <Heading as="h1">Inbox</Heading>
      <UndoMenu />
    </Flex>
  );
};

const InboxLayout = () => {
  const { isDesktop } = useMedia();

  useShortcuts();

  return (
    <Box w="100%" h="100%" pt={4}>
      <Stack w="100%" h="100%" spacing={4} align="center">
        <Container maxW="container.md">
          <Nav />
        </Container>
        {isDesktop && (
          <Container maxW="container.md">
            <InboxInput />
          </Container>
        )}
        <Box
          w="100%"
          h="100%"
          overflow="auto"
          sx={{
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "inherit",
            },
            _hover: {
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "gray.700",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "color.400",
              },
            },
          }}
        >
          <Container w="100%" h="100%" maxW="container.md">
            <InboxList />
          </Container>
        </Box>

        {!isDesktop && (
          <Container pb={4} maxW="container.md">
            <InboxInput />
          </Container>
        )}
      </Stack>
    </Box>
  );
};

export default InboxLayout;
