import { useList } from "@/lib";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { memo } from "react";

const UndoMenu = () => {
  const undo = useList((state) => state.undo);
  const redo = useList((state) => state.redo);

  const { getState } = useList();

  return (
    <>
      <Tooltip label="Undo" openDelay={250}>
        <IconButton
          aria-label="Undo"
          onClick={undo}
          icon={<ChevronLeftIcon />}
          variant="menu"
          color={
            getState && getState().prevStates.length > 0
              ? "gray.300"
              : "gray.500"
          }
        />
      </Tooltip>
      <Tooltip label="Redo" openDelay={250}>
        <IconButton
          aria-label="Redo"
          onClick={redo}
          icon={<ChevronRightIcon />}
          variant="menu"
          color={
            getState && getState().futureStates.length > 0
              ? "gray.300"
              : "gray.500"
          }
        />
      </Tooltip>
    </>
  );
};

export default memo(UndoMenu);
