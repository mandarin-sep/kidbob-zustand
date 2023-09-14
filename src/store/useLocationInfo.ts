import { create } from "zustand";

type hookState = {
  center: naver.maps.LatLng;
  shoptype: string;
  division: string;
};

type hookAction = {
  updateCenter: (center: hookState["center"]) => void;
  updateShoptype: (shopType: string) => void;
  updateDivision: (division: string) => void;
};

export const useLocationInfo = create<hookState & hookAction>((set) => ({
  center: new window.naver.maps.LatLng(0, 0),
  shoptype: "",
  division: "",
  updateCenter: (center) => set(() => ({ center: center })),
  updateShoptype: (shoptype) => set(() => ({ shoptype })),
  updateDivision: (division) => set(() => ({ division })),
}));
