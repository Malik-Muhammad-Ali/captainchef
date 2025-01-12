import { create } from "zustand";
import userSlice from "./slices/userSlice";
import citySlice from "./slices/citySlice";
import subscriptionCategories from "./slices/subscriptionCategories";
import languageSlice from "./slices/languageSlice";
import mealsSlice from "./slices/mealsSlice";
import PlansSlice from "./slices/plansSlice";
import { persist } from "zustand/middleware";
import deliveryAddressSlice from "./slices/deliveryAddressSlice";
import cartSlice from "./slices/cartSlice";
import pickupSlice from "./slices/pickupSlice";
import paymentSlice from "./slices/paymentSlice";
import colorSlice from "./slices/colorSlice";

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
      ...pickupSlice(set),
      ...cartSlice(set, get),
      ...paymentSlice(set, get),
      ...colorSlice(set,get),
    }),
    {
      name: "app-storage", // Name of localStorage or sessionStorage key
    },
    {
      name: "app-session",
      storage: {
        getItem: (key) => {
          try {
            const value = sessionStorage.getItem(key);
            return value ? JSON.parse(value) : undefined;
          } catch (error) {
            console.error("Failed to retrieve sessionStorage item", error);
            return undefined;
          }
        },
        setItem: (key, value) => {
          try {
            sessionStorage.setItem(key, JSON.stringify(value));
          } catch (error) {
            console.error("Failed to set sessionStorage item", error);
          }
        },
        removeItem: (key) => {
          try {
            sessionStorage.removeItem(key);
          } catch (error) {
            console.error("Failed to remove sessionStorage item", error);
          }
        },
      },
      partialize: (state) => ({
        user: state.user,
        currentPlan: state.currentPlan,
        authenticated: state.authenticated,
        city: state.city,
        cartData: state.cartData,
        cities: state.cities,
        selectedDeliveryAddress: state.selectedDeliveryAddress,
        totalPrice: state.totalPrice,
        totalPriceWithVAT: state.totalPriceWithVAT,
        selectedPickupAddress: state.selectedPickupAddress,
        planAvailableDays: state.planAvailableDays,
        meals: state.meals,
        mealsByDay: state.mealsByDay,
        finalDeliveryType: state.finalDeliveryType,
        mobile_number: state.mobile_number,
      }),
    }
  )
);

export default useAppStore;
