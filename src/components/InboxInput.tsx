import { useMedia } from "@/hooks";
import { useList } from "@/lib";
import { AddIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";
import { memo, useEffect, useRef } from "react";

const InputComponent = () => {
  const addItem = useList((state) => state.addItem);

  const { isDesktop } = useMedia();

  const inputRef = useRef<HTMLInputElement>(null);

  const addHandler = () => {
    const value = inputRef.current?.value;
    addItem(value || "");
    inputRef.current && (inputRef.current.value = "");
  };

  useEffect(() => {
    isDesktop && inputRef.current?.focus();
  }, [isDesktop]);

  return (
    <InputGroup>
      <Input
        ref={inputRef}
        autoComplete="off"
        id="input"
        _placeholder={{
          textColor: "gray.600",
        }}
        borderColor="gray.600"
        size="lg"
        placeholder="Add an item"
        focusBorderColor="cyan.500"
        variant="flushed"
        onKeyDown={(e) => {
          const target = e.target as HTMLInputElement;
          if (e.key === "Enter") {
            addItem(target.value);
            target.value = "";
          } else if (e.key === "Escape") {
            target.blur();
          }
        }}
      />
      <InputRightElement>
        <Tooltip label="Add (Enter)" openDelay={250}>
          <IconButton
            variant="action"
            icon={<AddIcon />}
            aria-label="Add an item"
            onClick={addHandler}
          />
        </Tooltip>
      </InputRightElement>
    </InputGroup>
  );
};

export default memo(InputComponent);
