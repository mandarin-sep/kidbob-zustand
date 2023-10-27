import { create } from "zustand";

type hookState = {
  result: string;
};

type hookAction = {
  setResult: (prop: string) => void;
};

export const useSearchResult = create<hookAction & hookState>((set) => ({
  result: "",
  setResult: (result) => set(() => ({ result })),
}));
