import { ListProps } from "@/types";
import produce, { Draft } from "immer";
import { undoMiddleware, UndoState } from "zundo";
import create, { State, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface ListStore extends UndoState {
  list: ListProps[];
  addItem: (title: string) => void;
  addMultiple: (titles: string[]) => void;
  deleteItem: (id: string) => void;
  clean: () => void;
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
        addItem: (title) => {
          const id = Math.floor(Math.random() * 100000000).toString();
          set((state) => {
            state.list.push({
              id,
              title,
              created_at: new Date(),
            });
          });
          document.getElementById("bottom-focus")?.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        },
        addMultiple: (titles) => {
          titles.forEach((title) => {
            set((state) => {
              state.list.push({
                id: Math.floor(Math.random() * 100000000).toString(),
                title,
                created_at: new Date(),
              });
            });
          });
          document.getElementById("bottom-focus")?.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        },
        deleteItem: (id) =>
          set((state) => {
            state.list.splice(
              state.list.findIndex((item) => item.id === id),
              1
            );
          }),
        clean: () => {
          set((state) => {
            state.list = [];
          });
        },
      }))
    ),
    {
      name: "inbox-list",
    }
  )
);
