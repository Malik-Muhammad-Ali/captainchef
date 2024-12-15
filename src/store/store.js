import { create } from 'zustand';
import userSlice from './slices/userSlice';
import citySlice from './slices/citySlice';
import PlansSlice from './slices/plansSlice';

const useAppStore = create((set) => ({
    ...userSlice(set),
    ...citySlice(set),
    ...PlansSlice(set),
  }));
  
  export default useAppStore;