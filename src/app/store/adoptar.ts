import { create } from "zustand";
import React from "react";

interface Perro {
    id: number;
    nombre: string;
    edad: number;
}

interface AdoptarState {
    items: Perro[];
    addToAdoptar: (perro: Perro) => void;
    removeFromAdoptar: (id: number) => void;
}

export const useAdoptar = create<AdoptarState>((set) => ({
    items: [],
    addToAdoptar: (perro) => set((state) => ({ items: [...state.items, perro] })),
    removeFromAdoptar: (id) =>
        set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));
