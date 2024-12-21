import { create } from "zustand";
import userSlice from "./slices/userSlice";
import citySlice from "./slices/citySlice";
import subscriptionCategories from "./slices/subscriptionCategories";
import languageSlice from "./slices/languageSlice";
import mealsSlice from "./slices/mealsSlice";
import PlansSlice from "./slices/plansSlice";
import { persist } from "zustand/middleware";

const useAppStore = create(
  persist(
    (set, get) => ({
      ...userSlice(set, get),
      ...citySlice(set, get),
      ...subscriptionCategories(set, get),
      ...languageSlice(set, get),
      ...mealsSlice(set, get),
      ...PlansSlice(set, get),
    }),
    {
      name: "app-storage",
      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
);

export default useAppStore;
