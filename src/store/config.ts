import { Tags, Themes } from "@/types";
import { create } from "zustand";

interface State {
  tagSelected: Tags;
  theme: Themes;
  setTagSelected: (tag: Tags) => void;
}

export const useConfigStore = create<State>((set, get) => ({
  tagSelected: {name: "Ver todos"},
  theme: "dark",

  setTagSelected(tag) {
    set(state => ({
      ...state,
      tagSelected: tag
    }))
  },
}))