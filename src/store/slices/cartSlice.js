import axios from "axios";

const cartSlice = (set) => ({
  cartData: [],
  totalPrice: 0,
  totalPriceWithVAT: 0,
  fetchCartData: async (userId) => {
    try {
      const response = await axios.get(
        "https://appv2.captainchef.net/AppV2/public/api/ver2/get-cart",
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

      console.log(total);
      const finalVAT = total * 0.05;
      set({ totalPrice: total.toFixed(2) });
      set({ totalPriceWithVAT: (total + finalVAT).toFixed(2) });
    } catch (error) {
      console.error(error);
    }
  },
  addToCart: async (cartItems) => {
    console.log(cartItems)
    try {
      const response = await axios.post(
        "https://appv2.captainchef.net/AppV2/public/api/ver2/add-to-cart",
        cartItems,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  },
});

export default cartSlice;
