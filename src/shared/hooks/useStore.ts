import { create } from "zustand";

interface StoreState {
  leverage: number;
  amount: string;
  setAmount: (amount: string) => void;
  setLeverage: (leverage: number) => void;
}

export const useStore = create<StoreState>()((set) => ({
  amount: '0',
  leverage: 1,
  setAmount: (amount) => set(() => ({ amount })),
  setLeverage: (leverage) => set(() => ({ leverage })),
}))
