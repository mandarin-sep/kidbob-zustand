import { create } from "zustand";

type NaverMarker = naver.maps.Marker;

type propsType = {
  marker: NaverMarker;
  id: number;
};

type hookState = {
  markers: {
    marker: NaverMarker;
    id: number;
  }[];
};

type hookAction = {
  addMarkers: (prop: propsType) => void;
};

export const useMarker = create<hookAction & hookState>((set) => ({
  markers: [],
  addMarkers: (markers) => {
    set((state) => ({
      markers: [...state.markers, markers],
    }));
  },
}));
