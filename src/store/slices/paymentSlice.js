import axios from "axios";
const BASE_URL = "https://portal.captainchef.net/public";

const paymentSlice = (set) => ({
  postUrl: "",
  paymentResult: "",
  setPaymentResult: (result) => set({ paymentResult: result }),
  paymentNoon: async (addedPlans, totalPaid, couponData, user) => {
    console.log(addedPlans);
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
      console.log(response?.data);
      if (
        response.data.status === "success" &&
        response.data.data.status === "INITIATED"
      ) {
        console.log("Success");
        const post_url = response?.data?.data?.checkout_data?.postUrl;
        const noon_order_id = response.data.data.noon_order_id;
        console.log(noon_order_id);
        set({ postUrl: response?.data?.data?.checkout_data?.postUrl });
        console.log(post_url);
        return { post_url, noon_order_id, message: "success" };
      } else {
        console.log("No Resoponse");
        set({ postUrl: "" });
        return { message: "failed" };
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
    console.log(totalPaid);
    if (user?.wallet_balance < totalPaid) {
      return "failed";
    }
    try {
      const response = await axios.post(
        `${BASE_URL}/api/ver2/save-purchased-subscription-with-noon`,
        {
          user_id: 5,
          total_amount: totalPaid,
          payment_mode: "wallet",
          tabby_percentage: null,
          total_paid: totalPaid,
          added_palns: addedPlans,
          status: "inactive",
          wallet_amount: totalPaid,
          transaction_channel: "buy_subscription",
          coupon_code: couponData?.data?.code,
          coupon_name: couponData?.data?.title,
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
        return { message: "success" };
      } else {
        console.log("No Resoponse");
        return { message: "failed" };
      }
    } catch (error) {
      console.log(error);
      return { message: "failed" };
    }
  },
});

export default paymentSlice;
