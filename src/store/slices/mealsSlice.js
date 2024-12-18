import axios from "axios";

const mealsSlice = (set) => ({
  meals: [],
  mealsByDay: [],
  fetchMeals: async (categoryId) => { 
    const response = await axios.get(
      `https://app.captainchef.net/api/v1/subscription/meals?subscription_category=${categoryId}`
    );
    const data = await response.data;
    set({
      meals: data,
      mealsByDay: data
        .filter((meal) => meal.meal_day === "Monday")
        .map((meal) => meal.selected_products)
        .flat(),
    });
  },
  setMealsByDay: (meals) => {
    set({ mealsByDay: meals });
  },
});

export default mealsSlice;
