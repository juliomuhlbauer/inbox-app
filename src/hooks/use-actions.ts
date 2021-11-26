import { useList } from "@/lib";
import { useCallback } from "react";

export const useActions = () => {
  const undo = useList((state) => state.undo);
  const redo = useList((state) => state.redo);

  const { getState } = useList();

  const canUndo: Boolean = getState ? getState().prevStates.length > 0 : false;

  const canRedo: Boolean = getState
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
  };
};
