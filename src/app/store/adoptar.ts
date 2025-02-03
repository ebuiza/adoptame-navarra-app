import { create } from "zustand";

export const useAdoptar = create((set) => ({
  items: [],
  addToAdoptar: (perro) => set((state) => ({ items: [...state.items, perro] })),
  removeFromAdoptar: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));
