import { useList } from "@/lib";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  HStack,
  IconButton,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { memo } from "react";

const UndoMenu = () => {
  const undo = useList((state) => state.undo);
  const redo = useList((state) => state.redo);

  const { getState } = useList();

  const prevHasLength: Boolean = getState
    ? getState().prevStates.length > 0
    : false;

  const futureHasLength: Boolean = getState
    ? getState().futureStates.length > 0
    : false;

  const color = useColorModeValue("gray.800", "gray.300");
  const disableColor = useColorModeValue("gray.500", "gray.500");

  const bgColor = useColorModeValue("gray.200", "gray.800");
  const hoverBgColor = useColorModeValue("gray.300", "gray.700");

  const handleUndo = () => {
    if (prevHasLength) {
      undo && undo();
    }
  };

  const handleRedo = () => {
    if (futureHasLength) {
      redo && redo();
    }
  };

  return (
    <HStack>
      <Tooltip label="Undo (Ctrl+Z)" openDelay={250}>
        <IconButton
          aria-label="Undo"
          onClick={handleUndo}
          icon={<ChevronLeftIcon />}
          variant="menu"
          color={prevHasLength ? color : disableColor}
          cursor={prevHasLength ? "pointer" : "default"}
          _hover={{
            bgColor: prevHasLength ? hoverBgColor : bgColor,
          }}
        />
      </Tooltip>
      <Tooltip label="Redo (Ctrl+Y)" openDelay={250}>
        <IconButton
          aria-label="Redo"
          onClick={handleRedo}
          icon={<ChevronRightIcon />}
          variant="menu"
          color={futureHasLength ? color : disableColor}
          cursor={futureHasLength ? "pointer" : "default"}
          _hover={{
            bgColor: futureHasLength ? hoverBgColor : bgColor,
          }}
        />
      </Tooltip>
    </HStack>
  );
};

export default memo(UndoMenu);
