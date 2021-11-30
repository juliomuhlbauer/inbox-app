import { useHotkeys } from "react-hotkeys-hook";
import { useActions } from "./use-actions";

export const useShortcuts = () => {
  const { handleUndo, handleRedo, handleClean, copyToClipboard, pasteList } =
    useActions();

  const copy = useHotkeys(
    "ctrl+c",
    (e) => {
      e.preventDefault();
      copyToClipboard();
    },
    [copyToClipboard]
  );

  const paste = useHotkeys(
    "ctrl+v",
    (e) => {
      e.preventDefault();
      pasteList();
    },
    [pasteList]
  );

  const clean = useHotkeys(
    "ctrl+delete",
    (e) => {
      e.preventDefault();
      handleClean();
    },
    [handleClean]
  );

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
    clean,
    undo,
    redo,
    inputFocus,
    copy,
    paste,
  };
};
