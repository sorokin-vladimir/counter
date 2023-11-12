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
  remove: (id: number) => void
  increase: (id: number) => void
  decrease: (id: number) => void
  reset: () => void
}

export const useCounters = create<BearState>()(devtools(persist((set) => ({
  counters: [],
  add: (name) => set((s) => ({ counters: [...s.counters, { id: Date.now(), count: 0, name: name ?? 'counter ' + (s.counters.length + 1) }] })),
  remove: (id) => set((s) => {
    const updatedCounters = s.counters.filter((c) => c.id !== id);
    return { counters: updatedCounters };
  }),
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
  reset: () => set((s) => ({counters: s.counters.map(c => ({...c, count: 0}))}))
}), { name: 'counter-storage' })))
