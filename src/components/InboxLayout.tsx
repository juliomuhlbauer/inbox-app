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
        <Container maxW="container.md">
          {!isDesktop && <InboxInput />}
        </Container>
      </Stack>
    </Box>
  );
};

export default InboxLayout;
