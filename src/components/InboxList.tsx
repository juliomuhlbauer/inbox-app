import { useList } from "@/lib";
import { Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { FC, memo } from "react";
import ListItem from "./ListItem";

const InboxList: FC = () => {
  const list = useList((state) => state.list);

  return (
    <Flex pb={10} direction="column" position="relative">
      <AnimatePresence>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </AnimatePresence>
    </Flex>
  );
};

export default memo(InboxList);
