import { useList } from "@/lib";
import { ListProps } from "@/types";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, useIsPresent } from "framer-motion";
import { FC, memo } from "react";

interface ListItemProps {
  item: ListProps;
}

const ListItem: FC<ListItemProps> = ({ item }) => {
  const deleteItem = useList((state) => state.deleteItem);

  const hoverBgColor = useColorModeValue("gray.200", "gray.800");

  const isPresent = useIsPresent();

  return (
    <Box position="relative">
      <motion.div
        layout
        style={{
          position: isPresent ? "static" : "absolute",
          width: "100%",
        }}
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -50,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 50,
          mass: 1,
        }}
      >
        <Flex
          align="center"
          key={item.id}
          p={2}
          my={2}
          borderRadius="md"
          cursor="pointer"
          _hover={{ bgColor: hoverBgColor }}
        >
          <Heading size="md" fontWeight="semibold">
            {item.title}
          </Heading>
          <Spacer />
          <IconButton
            size="sm"
            aria-label="Delete item"
            icon={<CloseIcon />}
            onClick={() => deleteItem(item.id)}
            variant="action"
          />
        </Flex>
      </motion.div>
    </Box>
  );
};

export default memo(ListItem);
