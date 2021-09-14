import { useList } from "@/lib";
import { Stack } from "@chakra-ui/react";
import { FC, memo } from "react";
import ListItem from "./ListItem";

const InboxList: FC = () => {
  const list = useList((state) => state.list);

  return (
    <Stack spacing={4} my={4}>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </Stack>
  );
};

export default memo(InboxList);
