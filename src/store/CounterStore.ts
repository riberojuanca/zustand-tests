import { create } from "zustand";

interface CounterState {
  count: number;
  title: string;
  increment: (value: number) => void;
  decrement: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 20,
  title: "Some Title",
  increment: (value: number) =>
    set((state) => ({
      count: state.count + value,
    })),
  decrement: (value: number) =>
    set((state) => ({
      count: state.count - value,
    })),
}));
