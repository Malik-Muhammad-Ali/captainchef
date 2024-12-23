import axios from "axios";

const cartSlice = (set) => ({
  cartData: [],
  totalPrice: 0,
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
      console.log(response)
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

      set({ totalPrice: total });
    } catch (error) {
      console.error(error);
    }
  },
});

export default cartSlice;
