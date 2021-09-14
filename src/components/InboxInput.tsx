import { useList } from "@/lib";
import { AddIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { memo, useRef } from "react";

const InputComponent = () => {
  const addItem = useList((state) => state.addItem);

  const inputRef = useRef<HTMLInputElement>(null);
  const inputValue: string = inputRef.current?.value || "";

  return (
    <InputGroup my={2}>
      <Input
        ref={inputRef}
        focusBorderColor="cyan.500"
        variant="flushed"
        onKeyDown={(e) => {
          const target = e.target as HTMLInputElement;
          if (e.key === "Enter") {
            addItem(target.value);
            target.value = "";
          }
        }}
      />
      <InputRightElement>
        <IconButton
          variant="ghost"
          icon={<AddIcon />}
          aria-label="Add an item"
          onClick={() => addItem(inputValue)}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default memo(InputComponent);
