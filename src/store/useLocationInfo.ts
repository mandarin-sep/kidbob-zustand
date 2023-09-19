import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
type hookState = {
  center: naver.maps.LatLng;
  shoptype: string;
  division: string;
};

type hookAction = {
  updateCenter: (center: naver.maps.LatLng) => void;
  updateShoptype: (shopType: string) => void;
  updateDivision: (division: string) => void;
};

export const useLocationInfo = create(
  persist<hookState & hookAction>(
    (set) => ({
      center: new window.naver.maps.LatLng(37.5262411, 126.99289439),
      shoptype: "",
      division: "",
      updateCenter: (center) => set(() => ({ center })),
      updateShoptype: (shoptype) => set(() => ({ shoptype })),
      updateDivision: (division) => set(() => ({ division })),
    }),
    {
      name: "searchedLocationInfo",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
