import { create } from "zustand";
import { currentItem } from "../types/apiItem";
type hookState = {
  currentShop: currentItem | undefined;
};

type hookAction = {
  updateCurrentShop: (shop: currentItem) => void;
};

export const useCurrentShop = create<hookState & hookAction>((set) => ({
  currentShop: undefined,
  updateCurrentShop: (currentShop) => set(() => ({ currentShop })),
}));
