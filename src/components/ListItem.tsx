import { useList } from "@/lib";
import { ListProps } from "@/types";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC, memo } from "react";

interface ListItemProps {
  item: ListProps;
}

const ListItem: FC<ListItemProps> = ({ item }) => {
  const deleteItem = useList((state) => state.deleteItem);

  const bgColor = useColorModeValue("gray.200", "gray.800");
  const hoverBgColor = useColorModeValue("gray.300", "gray.700");

  return (
    <Flex
      align="center"
      key={item.id}
      bgColor={bgColor}
      p={2}
      borderRadius="md"
      _hover={{ bgColor: hoverBgColor }}
      cursor="pointer"
    >
      <Heading fontSize="2xl">{item.title}</Heading>
      <Spacer />
      <IconButton
        size="sm"
        aria-label="Delete item"
        icon={<CloseIcon />}
        onClick={() => deleteItem(item.id)}
        variant="action"
      />
    </Flex>
  );
};

export default memo(ListItem);
