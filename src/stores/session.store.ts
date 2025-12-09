import create from "zustand";

interface SessionState {
  user: {
    id: string;
    email: string;
  } | null;
  setUser: (user: { id: string; email: string }) => void;
  clearUser: () => void;
}

const useSessionStore = create<SessionState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useSessionStore;
