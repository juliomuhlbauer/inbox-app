import { useActions } from "@/hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  HStack,
  IconButton,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { memo } from "react";

const UndoMenu = () => {
  const { handleRedo, handleUndo, canUndo, canRedo } = useActions();

  const color = useColorModeValue("gray.800", "gray.300");
  const disableColor = useColorModeValue("gray.500", "gray.600");

  const bgColor = useColorModeValue("gray.200", "gray.800");
  const hoverBgColor = useColorModeValue("gray.300", "gray.700");

  return (
    <HStack>
      <Tooltip label="Undo (Ctrl+Z)" openDelay={250}>
        <IconButton
          aria-label="Undo"
          onClick={handleUndo}
          icon={<ChevronLeftIcon />}
          variant="menu"
          color={canUndo ? color : disableColor}
          cursor={canUndo ? "pointer" : "default"}
          _hover={{
            bgColor: canUndo ? hoverBgColor : bgColor,
          }}
        />
      </Tooltip>
      <Tooltip label="Redo (Ctrl+Y)" openDelay={250}>
        <IconButton
          aria-label="Redo"
          onClick={handleRedo}
          icon={<ChevronRightIcon />}
          variant="menu"
          color={canRedo ? color : disableColor}
          cursor={canRedo ? "pointer" : "default"}
          _hover={{
            bgColor: canRedo ? hoverBgColor : bgColor,
          }}
        />
      </Tooltip>
    </HStack>
  );
};

export default memo(UndoMenu);
