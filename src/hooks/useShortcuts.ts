import { useHotkeys } from "react-hotkeys-hook";
import { useActions } from "./useActions";

export const useShortcuts = () => {
  const { handleUndo, handleRedo } = useActions();

  const undo = useHotkeys(
    "ctrl+z",
    (e) => {
      e.preventDefault();
      handleUndo();
    },
    [handleUndo]
  );

  const redo = useHotkeys(
    "ctrl+y",
    (e) => {
      e.preventDefault();
      handleRedo();
    },
    [handleRedo]
  );

  const inputFocus = useHotkeys("n,alt+n", (e) => {
    e.preventDefault();
    document.getElementById("input")?.focus();
  });

  return {
    undo,
    redo,
    inputFocus,
  };
};
