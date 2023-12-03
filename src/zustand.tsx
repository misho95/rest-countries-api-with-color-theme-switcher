import { create } from "zustand";
import data from "./data.json";

interface FlagsType {
  flagsDefault: any;
  flagsRender: any;
  filterFlags: (arg: any) => void;
  resetFlags: () => void;
}

export const flags = create<FlagsType>((set) => ({
  flagsDefault: data,
  flagsRender: data,
  filterFlags: (filterData: any) => set(() => ({ flagsRender: filterData })),
  resetFlags: () => set(() => ({ flagsRender: data })),
}));
