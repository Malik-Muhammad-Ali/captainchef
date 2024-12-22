import { create } from "zustand";
import userSlice from "./slices/userSlice";
import citySlice from "./slices/citySlice";
import subscriptionCategories from "./slices/subscriptionCategories";
import languageSlice from "./slices/languageSlice";
import mealsSlice from "./slices/mealsSlice";
import PlansSlice from "./slices/plansSlice";
import { persist } from "zustand/middleware";
import deliveryAddressSlice from './slices/deliveryAddressSlice';
import cartSlice from "./slices/cartSlice";

const useAppStore = create(
  persist(
    (set, get) => ({
      ...userSlice(set, get),
      ...citySlice(set, get),
      ...subscriptionCategories(set, get),
      ...languageSlice(set, get),
      ...mealsSlice(set, get),
      ...PlansSlice(set, get),
    ...deliveryAddressSlice(set),
    ...cartSlice(set, get),
    }),
    {
      name: "app-storage",
      partialize: (state) => ({
        user: state.user,
        currentPlan: state.currentPlan,
        authenticated: state.authenticated,
        city: state.city,
        cartData: state.cartData,
      }),
    }
  )
);

export default useAppStore;
