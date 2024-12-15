import { create } from 'zustand';
import userSlice from './slices/userSlice';
import citySlice from './slices/citySlice';
import subscriptionCategories from './slices/subscriptionCategories';

const useAppStore = create((set) => ({
    ...userSlice(set),
    ...citySlice(set),
    ...subscriptionCategories(set),
  }));
  
  export default useAppStore;