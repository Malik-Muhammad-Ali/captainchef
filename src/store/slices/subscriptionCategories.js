import axios from "axios";
const BASE_URL = "https://portal.captainchef.net/public";

const subscriptionCategories = (set) => ({
  categories: [],
  categoryId: null,
  error: null,
  setCategoryId: () => {},
  fetchCategories: async () => {
    console.log("Categories API Hit");
    set({ error: null });
    try {
      const response = await axios.get(
        `${BASE_URL}/get-subscription-categories`
      );
      const data = response?.data?.data;
      set({ categories: data });
    } catch (error) {
      set({ error: error?.message });
    }
    return "success";
  },
});

export default subscriptionCategories;
