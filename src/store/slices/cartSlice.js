import axios from "axios";

const cartSlice = (set) => ({
  cartData: [],
  totalPrice: 0,
  fetchCartData: async (userId) => {
    console.log("Inside Fetch Cart Data")
    try {
      const response = await axios.get(
        "https://portal.captainchef.net/public/api/ver2/get-cart",
        {
          params: {
            user_id: userId,
          },
        }
      );
      console.log(response.data.data);
      const data = response.data.data;
      set({ cartData: data });
      console.log(response.data.data);
      // Calculate total price here
      const total = data.reduce((acc, item) => {
        const basicAmount = parseFloat(item.plan.basic_amount);
        const discountAmount = parseFloat(item.plan.discounted_amount);
        const price =
          item.plan.discount_offer_only === "yes"
            ? discountAmount
            : basicAmount;
        return acc + price;
      }, 0);

      set({ totalPrice: total.toFixed(2) });
    } catch (error) {
      console.error(error);
    }
  },
  addToCart: async (cartItems) => {
    try {
      const response = await axios.post(
        "https://portal.captainchef.net/public/api/ver2/add-to-cart",
        cartItems,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  },
});

export default cartSlice;
