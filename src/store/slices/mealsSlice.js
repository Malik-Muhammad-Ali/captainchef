import axios from "axios";

const mealsSlice = (set) => ({
  meals: [],
  mealsByDay: [],
  finalDeliveryType: null,
  setFinalDeliveryType: (type) => {
    set({ deliveryType: type });
  },
  setMealsByDay: (meals) => {
    set({ mealsByDay: meals });
  },
  fetchMeals: async (mealList) => { 
    console.log('Fetching Meals')
    const response = await axios.get(
      `https://portal.captainchef.net/public/get-meal/${mealList}`
    );
    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    const selectedProductsDetails = response.data.data.selected_products_details;
    const mealsForToday = selectedProductsDetails[dayName.toLowerCase()] || [];
    set({
      meals: selectedProductsDetails,
      mealsByDay: mealsForToday,
    });
    return {message: "success"}
  },
});

export default mealsSlice;
