import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LoginStoreProps {
  userLogin: boolean;
  userName: string;

  setUserLogin: (state: boolean) => void;
  setUserName: (name: string) => void;
  UserLogout: () => void;
}

const useStore = create<LoginStoreProps>()(
  persist(
    (set) => ({
      userLogin: false,
      userName: '',

      setUserLogin: (state) => set({ userLogin: state }),
      setUserName: (name) => set({ userName: name }),

      UserLogout: () => {
        set(() => ({
          userLogin: false,
          userName: '',
        }));
        localStorage.removeItem('auth-storage');
        localStorage.removeItem('token');
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useStore;
