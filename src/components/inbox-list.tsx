import { useList } from "@/lib";
import { Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { FC, memo, useEffect } from "react";
import ListItem from "./list-item";

const InboxList: FC = () => {
  const list = useList((state) => state.list);
  const resetLastItemId = useList((state) => state.resetLastItemId);
  const lastItemId = useList((state) => state.lastItemId);

  useEffect(() => {
    document.getElementById(`item-${lastItemId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
    if (lastItemId !== null) {
      resetLastItemId();
    }
  }, [lastItemId, resetLastItemId]);

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
