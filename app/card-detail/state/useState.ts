import { create } from 'zustand';

interface State {
  id: number;
  setId: (id: number) => void;
}

export { useState as useCardDetailState };

const useState = create<State>(set => ({
  id: 1,
  setId: (id: number) => set({ id })
}));
