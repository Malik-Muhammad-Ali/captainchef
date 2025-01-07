import axios from "axios";
const BASE_URL = "https://portal.captainchef.net/public";

const paymentSlice = (set) => ({
  postUrl: "",
  paymentResult: "",
  setPaymentResult: (result) => set({ paymentResult: result }),
  paymentNoon: async (addedPlans, totalPaid, couponData, user) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/ver2/save-purchased-subscription-with-noon`,
        {
          user_id: user?.id,
          total_amount: totalPaid,
          payment_mode: "noon",
          tabby_percentage: null,
          total_paid: totalPaid,
          added_palns: addedPlans,
          status: "waiting_for_payment",
          wallet_amount: null,
          transaction_channel: null,
          coupon_code: couponData?.data?.code,
          coupon_name: couponData?.data?.title,
          discount_via: "default",
          comment: "",
          payment_status: "unpaid",
          discount: 0.0,
          locale: "en",
          noon_category: "pay",
          payment_token: null,
        }
      );
      if (
        response.data.status === "success" &&
        response.data.data.status === "INITIATED"
      ) {
        console.log("Success");
        const post_url = response?.data?.data?.checkout_data?.postUrl;
        const return_url = response?.data?.data?.return_url;
        const noon_order_id = response.data.data.noon_order_id;
        console.log(noon_order_id);
        set({ postUrl: response?.data?.data?.checkout_data?.postUrl });
        return { post_url, noon_order_id };
      } else {
        console.log("No Resoponse");
        set({ postUrl: "" });
      }
      // console.log(response.data.data.checkout_data.postUrl);
    } catch (error) {
      console.log(error);
    }
  },
  paymentNoonSuccess: async (noon_order_id) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/ver2/save-purchased-subscription-with-noon`,
        {
          noon_order_id: noon_order_id,
          status: "completed",
          payment_status: "paid",
        }
      );
      console.log(response);
      if (response.data.status === "success") {
        set({ paymentResult: "success" });
      } else {
        set({ paymentResult: "failed" });
      }
    } catch (error) {
      console.log(error);
    }
  },
  paymentWallet: async (addedPlans, totalPaid, couponData, user) => {
    console.log(addedPlans);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/ver2/save-purchased-subscription-with-noon`,
        {
          user_id: 5,
          total_amount: 0.12,
          payment_mode: "wallet",
          tabby_percentage: null,
          total_paid: 0.12,
          added_palns: [
            {
              plan_id: 5,
              addon_ids: [],
              delivery_type: "pickup",
              city: "Madina",
              city_id: 2,
              delivery_charges: 0.0,
              delivery_address_id: null,
              delivery_address: null,
              branch_id: 3,
              branch_name: "Sultanah Branch",
              paid_amount_for_plan: 1376,
              discount_amount_for_plan: 1376,
              coupon_name_applied_for_plan: "zt1",
              coupon_percent_for_plan: 99.99,
              coupon_id: 2,
            },
          ],
          status: "inactive",
          wallet_amount: 0.12,
          transaction_channel: "buy_subscription",
          coupon_code: "zt1",
          coupon_name: "Test Coupon",
          discount_via: "default",
          comment: "",
          payment_status: "paid",
          discount: 0.0,
          locale: "en",
          noon_category: null,
          payment_token: null,
        }
      );
      console.log(response.data);
      if (response.data.status === "success") {
        console.log("Success");
      } else {
        console.log("No Resoponse");
      }
    } catch (error) {
      console.log(error);
    }
  },
});

export default paymentSlice;
