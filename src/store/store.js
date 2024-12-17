import { create } from 'zustand';
import userSlice from './slices/userSlice';
import citySlice from './slices/citySlice';
import subscriptionCategories from './slices/subscriptionCategories';
import languageSlice from './slices/languageSlice';
import mealsSlice from './slices/mealsSlice';
import PlansSlice from './slices/plansSlice';

const useAppStore = create((set) => ({
    ...userSlice(set),
    ...citySlice(set),
    ...subscriptionCategories(set),
    ...languageSlice(set),
    ...mealsSlice(set),
    ...PlansSlice(set),
  }));
  
  export default useAppStore;