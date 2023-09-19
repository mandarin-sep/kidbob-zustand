import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ApiDTO, listItem } from "../types/apiItem";

const daeguKey = import.meta.env.VITE_DAEGU_KEY;

type hookState = {
  shops: listItem[] | undefined;
  status: string;
};

type hookAction = {
  fetchShop: (value: string) => Promise<void>;
  updateShops: (shops: listItem[] | undefined) => void;
};

export const useFetchShop = create(
  persist<hookAction & hookState>(
    (set) => ({
      shops: undefined,
      status: "init",
      fetchShop: async (value) => {
        set({ status: "Loading" });
        const response = await fetch(
          `https://apis.data.go.kr/6270000/dgMealCardShop/getGugunList?serviceKey=${daeguKey}&type=json&numOfRows=1000&pageNo=1&gugunName=${value}`
        )
          .then((res) => {
            set({ status: "Succecs" });
            return res.json();
          })
          .then((data) => {
            return data as ApiDTO;
          });
        set({ shops: response.body.items.item });
      },
      updateShops: (shops) => set(() => ({ shops })),
    }),
    {
      name: "initListData",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
