import { ListProps } from "@/types";
import produce, { Draft } from "immer";
import create, { State, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface ListStore {
  list: ListProps[];
  addItem: (title: string) => void;
  deleteItem: (id: string) => void;
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
    immer((set) => ({
      list: [],
      addItem: (title) => {
        set((state) => {
          state.list.push({
            id: Math.random().toString(),
            title,
          });
        });
      },
      deleteItem: (id) =>
        set((state) => {
          state.list.splice(
            state.list.findIndex((item) => item.id === id),
            1
          );
        }),
    })),
    {
      name: "inbox-list",
    }
  )
);
