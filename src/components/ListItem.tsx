import { useList } from "@/lib";
import { ListProps } from "@/types";
import { CloseIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, Spacer, Stack } from "@chakra-ui/react";
import { FC, memo } from "react";

interface ListItemProps {
  item: ListProps;
}

const ListItem: FC<ListItemProps> = ({ item }) => {
  const deleteItem = useList((state) => state.deleteItem);

  return (
    <Flex
      align="center"
      key={item.id}
      bgColor="gray.800"
      p={2}
      borderRadius="md"
      _hover={{ bgColor: "gray.700" }}
      cursor="pointer"
    >
      <Heading fontSize="2xl">{item.title}</Heading>
      <Spacer />
      <IconButton
        size="sm"
        aria-label="Delete item"
        icon={<CloseIcon />}
        onClick={() => deleteItem(item.id)}
        variant="ghost"
      />
    </Flex>
  );
};

export default memo(ListItem);
