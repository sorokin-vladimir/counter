import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'

type Counter = {
  id: number;
  name: string;
  count: number;
};

interface BearState {
  counters: Counter[]
  add: (name?: string) => void
  increase: (id: number) => void
  decrease: (id: number) => void
}

export const useCounters = create<BearState>()(devtools(persist((set, get) => ({
  counters: [],
  add: (name) => set((s) => ({ counters: [...s.counters, { id: Date.now(), count: 0, name: name ?? 'counter ' + (s.counters.length + 1) }] })),
  increase: (id) => set((s) => {
    const updatedCounters = s.counters.map((c) => {
      if (c.id === id) c.count += 1;
      return c;
    });
    return { counters: updatedCounters };
  }),
  decrease: (id) => set((s) => {
    const updatedCounters = s.counters.map((c) => {
      if (c.id === id && c.count > 0) c.count -= 1;
      return c;
    });
    return { counters: updatedCounters };
  }),
}), { name: 'counter-storage' })))
