import { useList } from "@/lib";
import { useCallback, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

export const useActions = () => {
  const toast = useToast();

  const [listIsNotEmpty, setListIsNotEmpy] = useState(false);

  const list = useList((state) => state.list);
  const undo = useList((state) => state.undo);
  const redo = useList((state) => state.redo);
  const clean = useList((state) => state.clean);
  const addMultiple = useList((state) => state.addMultiple);

  const { getState } = useList();

  useEffect(() => {
    setListIsNotEmpy(list.length > 0);
  }, [list]);

  const handleClean = useCallback(() => {
    if (listIsNotEmpty) {
      clean();
    }
  }, [listIsNotEmpty, clean]);

  const copyToClipboard = useCallback(() => {
    if (listIsNotEmpty) {
      const items = list.map((item) => `- ${item.title}`);
      const text = items.join("\n");
      navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        status: "success",
        duration: 3000,
      });
    }
  }, [listIsNotEmpty, list]);

  const pasteList = useCallback(() => {
    navigator.clipboard.readText().then((text) => {
      const items = text
        .split("\n")
        .map((item) => item.replace("- ", "").trim());
      addMultiple(items);
    });
    toast({
      title: "Pasted",
      status: "success",
      duration: 3000,
    });
  }, []);

  const canUndo: boolean = getState ? getState().prevStates.length > 0 : false;

  const canRedo: boolean = getState
    ? getState().futureStates.length > 0
    : false;

  const handleUndo = useCallback(() => {
    if (canUndo) {
      undo && undo();
    }
  }, [canUndo, undo]);

  const handleRedo = useCallback(() => {
    if (canRedo) {
      redo && redo();
    }
  }, [canRedo, redo]);

  return {
    handleUndo,
    handleRedo,
    canUndo,
    canRedo,
    handleClean,
    listIsNotEmpty,
    copyToClipboard,
    pasteList,
  };
};
