import { ListProps } from "@/types";
import produce, { Draft } from "immer";
import { undoMiddleware, UndoState } from "zundo";
import create, { State, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface ListStore extends UndoState {
  list: ListProps[];
  lastItemId: null | string;
  addItem: (title: string) => void;
  deleteItem: (id: string) => void;
  resetLastItemId: () => void;
}

const immer =
  <T extends State>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (partial, replace) => {
        const nextState =
          typeof partial === "function"
            ? produce(partial as (state: Draft<T>) => T)
            : (partial as T);
        return set(nextState, replace);
      },
      get,
      api
    );

export const useList = create<ListStore>(
  persist(
    undoMiddleware(
      immer((set) => ({
        list: [],
        lastItemId: null,
        addItem: (title) => {
          const id = Math.random().toString();
          set((state) => {
            state.list.push({
              id,
              title,
            });
            state.lastItemId = id;
          });
        },
        deleteItem: (id) =>
          set((state) => {
            state.list.splice(
              state.list.findIndex((item) => item.id === id),
              1
            );
          }),
        resetLastItemId: () =>
          set((state) => {
            state.lastItemId = null;
          }),
      }))
    ),
    {
      name: "inbox-list",
    }
  )
);
