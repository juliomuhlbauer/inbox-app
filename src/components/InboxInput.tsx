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
import { memo, useEffect, useState } from "react";

const InputComponent = () => {
  const addItem = useList((state) => state.addItem);

  const { isDesktop } = useMedia();

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    isDesktop && document.getElementById("input")?.focus();
  });

  return (
    <InputGroup>
      <Input
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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          const target = e.target as HTMLInputElement;
          if (e.key === "Enter") {
            addItem(target.value);
            setInputValue("");
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
            onClick={() => {
              addItem(inputValue);
              setInputValue("");
            }}
          />
        </Tooltip>
      </InputRightElement>
    </InputGroup>
  );
};

export default memo(InputComponent);
