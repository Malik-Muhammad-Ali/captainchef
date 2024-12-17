import { create } from 'zustand';
import userSlice from './slices/userSlice';
import citySlice from './slices/citySlice';
import subscriptionCategories from './slices/subscriptionCategories';
import languageSlice from './slices/languageSlice';
import mealsSlice from './slices/mealsSlice';

const useAppStore = create((set) => ({
    ...userSlice(set),
    ...citySlice(set),
    ...subscriptionCategories(set),
    ...languageSlice(set),
    ...mealsSlice(set),
  }));
  
  export default useAppStore;