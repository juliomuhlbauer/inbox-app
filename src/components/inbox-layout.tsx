import { useMedia, useShortcuts } from "@/hooks";
import { Box, Container, Stack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import InboxInput from "./inbox-input";
import Nav from "./nav";

const InboxList = dynamic(() => import("@/components/inbox-list"), {
  ssr: false,
});

const Shortcuts = () => {
  useShortcuts();
  return <div></div>;
};

const InboxLayout = () => {
  const { isDesktop } = useMedia();

  return (
    <Box w="100%" h="100%" pt={4}>
      <Shortcuts />
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
