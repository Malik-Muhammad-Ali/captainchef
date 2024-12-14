import { create } from 'zustand';
import userSlice from './slices/userSlice';
import citySlice from './slices/citySlice';

const useAppStore = create((set) => ({
    ...userSlice(set),
    ...citySlice(set),
  }));
  
  export default useAppStore;