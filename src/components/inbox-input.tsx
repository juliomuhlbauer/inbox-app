import { useMedia } from "@/hooks";
import { useList } from "@/lib";
import { AddIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { memo, useEffect, useRef, useState } from "react";

const InputComponent = () => {
  const addItem = useList((state) => state.addItem);
  const addMultiple = useList((state) => state.addMultiple);

  const toast = useToast();

  const { isDesktop } = useMedia();

  const inputRef = useRef<HTMLInputElement>(null);

  const [inputText, setInputText] = useState("");

  const addHandler = () => {
    addItem(inputText);
    setInputText("");
  };

  useEffect(() => {
    isDesktop && inputRef.current?.focus();
  }, [isDesktop]);

  return (
    <InputGroup>
      <Input
        ref={inputRef}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onPaste={(e) => {
          e.preventDefault();

          const text = e.clipboardData.getData("text/plain");
          const items = text
            .split("\n")
            .map((item) => item.replace("- ", "").trim());
          addMultiple(items);

          toast({
            title: "Pasted",
            status: "success",
            duration: 3000,
          });
        }}
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
            setInputText("");
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
