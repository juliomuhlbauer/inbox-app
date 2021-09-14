import { useMedia } from "@/hooks";
import {
  Box,
  Container,
  Heading,
  HStack,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import InboxInput from "./InboxInput";
import UndoMenu from "./UndoMenu";

const InboxList = dynamic(() => import("@/components/InboxList"), {
  ssr: false,
});

const InboxLayout = () => {
  const { isDesktop } = useMedia();

  return (
    <Box w="100%" h="100%" overflow="auto">
      <Container maxW="container.md" py={4}>
        <Stack spacing={6}>
          <HStack>
            <Heading>Inbox</Heading>
            <Spacer />
            <UndoMenu />
          </HStack>
          {isDesktop && <InboxInput />}

          <InboxList />
          {!isDesktop && (
            <Box p={2} position="fixed" bottom="0" w="100%" left="0">
              <InboxInput />
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default InboxLayout;
