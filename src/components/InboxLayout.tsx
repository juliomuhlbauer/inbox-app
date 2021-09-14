import { useMedia } from "@/hooks";
import { Box, Container, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import InboxInput from "./InboxInput";

const InboxList = dynamic(() => import("@/components/InboxList"), {
  ssr: false,
});

const InboxLayout = () => {
  const { isDesktop } = useMedia();

  return (
    <Box w="100%" h="100%" overflow="auto">
      <Container maxW="container.md" py={4}>
        <Heading my={2}>Inbox</Heading>
        {isDesktop && <InboxInput />}

        <InboxList />
        {!isDesktop && (
          <Box p={2} position="fixed" bottom="0" w="100%" left="0">
            <InboxInput />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default InboxLayout;
