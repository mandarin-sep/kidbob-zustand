import { create } from "zustand";

type chosenShopInfoType = {
  shopBsType: string;
  shopName: string;
  shopRoadAddr: string;
};

type hookState = {
  itemClikedState: boolean;
  shopInfo: chosenShopInfoType;
};

type hookAction = {
  updateShopInfo: (shopInfo: chosenShopInfoType) => void;
  updateItemClickedState: (itemClikedState: boolean) => void;
};

export const useClickedShopInfo = create<hookState & hookAction>((set) => ({
  itemClikedState: false,
  shopInfo: {
    shopBsType: "",
    shopName: "",
    shopRoadAddr: "",
  },
  updateShopInfo: (shopInfo) => set(() => ({ shopInfo })),
  updateItemClickedState: (itemClikedState) => set(() => ({ itemClikedState })),
}));
