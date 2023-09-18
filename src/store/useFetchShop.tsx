import { create } from "zustand";
import { ApiDTO, listItem } from "../types/apiItem";

const daeguKey = import.meta.env.VITE_DAEGU_KEY;

type hookState = {
  shops: listItem | undefined;
};

type hookAction = {
  fetchShop: (value: string) => Promise<void>;
};

export const useFetchShop = create<hookAction & hookState>((set) => ({
  shops: undefined,
  fetchShop: async (value) => {
    const response = await fetch(
      `https://apis.data.go.kr/6270000/dgMealCardShop/getGugunList?serviceKey=${daeguKey}&type=json&numOfRows=1000&pageNo=1&gugunName=${value}`
    )
      .then((res) => res.json())
      .then((data) => data as ApiDTO);
    set({ shops: response.body.items.item });
  },
}));
