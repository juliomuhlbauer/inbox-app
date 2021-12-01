import { useList } from "@/lib";
import { Box, Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { FC, memo, useEffect } from "react";
import ListItem from "./list-item";

const InboxList: FC = () => {
  const list = useList((state) => state.list);

  useEffect(() => {
    document.getElementById("bottom-focus")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  return (
    <Flex pb={10} direction="column" position="relative">
      <AnimatePresence>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </AnimatePresence>
      <Box id="bottom-focus" h="20" />
    </Flex>
  );
};

export default memo(InboxList);
