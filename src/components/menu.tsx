import { useActions } from "@/hooks";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import {
  HStack,
  IconButton,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  Text,
  Button,
} from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";

const Menu = () => {
  const {
    handleRedo,
    handleUndo,
    canUndo,
    canRedo,
    listIsNotEmpty,
    handleClean,
    copyToClipboard,
  } = useActions();

  const color = useColorModeValue("gray.800", "gray.300");
  const disableColor = useColorModeValue("gray.500", "gray.600");

  const bgColor = useColorModeValue("gray.200", "gray.800");
  const hoverBgColor = useColorModeValue("gray.300", "gray.700");

  const cleanModal = useDisclosure();

  return (
    <>
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

        <Tooltip label="Clean (Ctrl+del)" openDelay={250}>
          <IconButton
            aria-label="Clean"
            onClick={() => listIsNotEmpty && cleanModal.onOpen()}
            icon={<DeleteIcon />}
            variant="menu"
            color={listIsNotEmpty ? color : disableColor}
            cursor={listIsNotEmpty ? "pointer" : "default"}
            _hover={{
              bgColor: listIsNotEmpty ? hoverBgColor : bgColor,
            }}
          />
        </Tooltip>

        <Tooltip label="Copy list (Ctrl+c)" openDelay={250}>
          <IconButton
            aria-label="Copy"
            onClick={copyToClipboard}
            icon={<CopyIcon />}
            variant="menu"
            color={listIsNotEmpty ? color : disableColor}
            cursor={listIsNotEmpty ? "pointer" : "default"}
            _hover={{
              bgColor: listIsNotEmpty ? hoverBgColor : bgColor,
            }}
          />
        </Tooltip>
      </HStack>

      <Modal isOpen={cleanModal.isOpen} onClose={cleanModal.onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Clean list</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure to clean all items?</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={cleanModal.onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                handleClean();
                cleanModal.onClose();
              }}
            >
              Clean
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(Menu);
