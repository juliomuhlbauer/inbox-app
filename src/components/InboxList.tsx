import { useList } from "@/lib";
import { Stack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { FC, memo } from "react";
import ListItem from "./ListItem";

const InboxList: FC = () => {
  const list = useList((state) => state.list);

  return (
    <Stack pb={10} spacing={4} position="relative">
      <AnimatePresence>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </AnimatePresence>
    </Stack>
  );
};

export default memo(InboxList);
