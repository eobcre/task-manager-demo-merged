import { create } from 'zustand';

interface StoreProps {
  isNavOpen: boolean;
  auth: boolean;
  setNavOpen: (state: boolean) => void;
  setAuth: (state: boolean) => void;
}

const useStore = create<StoreProps>((set) => ({
  isNavOpen: false,
  auth: false,
  setNavOpen: (state) => set({ isNavOpen: state }),
  setAuth: (state) => set({ auth: state }),
}));

export default useStore;
