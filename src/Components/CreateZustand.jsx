import { create } from "zustand";

const useCountStore = create((set) => ({
    count: 0,
    name: "", 
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
    setName: (newName) => set({ name: newName }), 
}));

export default useCountStore;
