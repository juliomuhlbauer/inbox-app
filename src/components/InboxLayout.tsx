import { useMedia } from "@/hooks";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import InboxInput from "./InboxInput";
import UndoMenu from "./UndoMenu";

const InboxList = dynamic(() => import("@/components/InboxList"), {
  ssr: false,
});

const Nav = () => {
  return (
    <Flex justify="space-between">
      <Heading>Inbox</Heading>
      <UndoMenu />
    </Flex>
  );
};

const InboxLayout = () => {
  const { isDesktop } = useMedia();

  return (
    <Box w="100%" h="100%" py={4}>
      <Stack w="100%" h="100%" spacing={4} align="center">
        <Container maxW="container.md">
          <Nav />
        </Container>
        <Container maxW="container.md">{isDesktop && <InboxInput />}</Container>
        <Box
          w="100%"
          h="100%"
          overflow="auto"
          sx={
            isDesktop
              ? {
                  maskImage:
                    "linear-gradient(to top, transparent, black), linear-gradient(to left, transparent 4px, black 4px)",
                  maskSize: "100% 20000px",
                  maskPosition: "left bottom",
                  transition: "mask-position 0.2s, -webkit-mask-position 0.2s",
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent, black), linear-gradient(to left, transparent 4px, black 4px)",
                  WebkitMaskSize: "100% 20000px",
                  WebkitMaskPosition: "left bottom",
                  _hover: {
                    WebkitMaskPosition: "left top",
                  },
                }
              : {}
          }
        >
          <Container w="100%" h="100%" maxW="container.md">
            <InboxList />
          </Container>
        </Box>
        <Container maxW="container.md">
          {!isDesktop && <InboxInput />}
        </Container>
      </Stack>
    </Box>
  );
};

export default InboxLayout;
