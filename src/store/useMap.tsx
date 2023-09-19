import { create } from "zustand";

type NaverMap = naver.maps.Map;

type hookState = {
  map: NaverMap | undefined;
};

type hookAction = {
  updateMap: (map: NaverMap) => void;
};

export const useMap = create<hookAction & hookState>((set) => ({
  map: undefined,
  updateMap: (map) => set(() => ({ map })),
}));
