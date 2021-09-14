import { useList } from "@/lib";
import { AddIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { memo, useState } from "react";

const InputComponent = () => {
  const addItem = useList((state) => state.addItem);

  const [inputValue, setInputValue] = useState("");

  return (
    <InputGroup my={2}>
      <Input
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
          }
        }}
      />
      <InputRightElement>
        <IconButton
          variant="ghost"
          icon={<AddIcon />}
          aria-label="Add an item"
          onClick={() => {
            addItem(inputValue);
            setInputValue("");
          }}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default memo(InputComponent);
