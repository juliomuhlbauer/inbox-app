import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const useMedia = () => {
  const [isDesktop, setDesktop] = useState(false);
  const [isPointer] = useMediaQuery("(pointer: fine)");

  useEffect(() => {
    setDesktop(isPointer);
  }, [isPointer]);

  return { isDesktop };
};
