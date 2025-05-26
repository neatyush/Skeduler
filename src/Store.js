import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStaffStore = create(
  persist(
    (set) => ({
      staff: [],
      setStaff: (newStaff) => set({ staff: newStaff }),
      addStaff: (newStaff) => set((state) => ({ staff: [...state.staff, newStaff] })),
      removeStaff: (staffId) => set((state) => ({
        staff: state.staff.filter((staff) => staff.id !== staffId)
      })),
    }),
    {
      name: "staff-storage", // unique name for the storage
      getStorage: () => localStorage, // use localStorage as the storage
    }
)
  );
export default useStaffStore;