import axios from "axios";

const paymentSlice = (set) => ({
  postUrl: '',
  returnUrl: '',
  paymentResult: '',
  setPaymentResult: (result) => set({paymentResult: result}),
  paymentNoon: async (addedPlans, totalPaid, couponData) => {
    try {
      const response = await axios.post(
        "https://portal.captainchef.net/public/api/ver2/save-purchased-subscription-with-noon",
        {
          user_id: 31163,
          total_amount: totalPaid,
          payment_mode: "noon",
          total_paid: totalPaid,
          added_palns: addedPlans,
          status: "waiting_for_payment",
          wallet_amount: "0",
          //   transaction_channel: "buy_subscription",
            coupon_code: couponData?.data?.code,
            coupon_name: couponData?.data?.title,
          //   discount_via: null,
          //   comment: "",
          payment_status: "unpaid",
          discount: null,
          locale: "en",
          noon_category: "pay",
        }
      );
      // console.log(response.data.data.noon_order_id);
      if(response.data.status === "success" && response.data.data.status === "INITIATED"){
        console.log('Success');
        const post_url = response?.data?.data?.checkout_data?.postUrl;
        const return_url = response?.data?.data?.return_url;
        const noon_order_id = response.data.data.noon_order_id;
        console.log(noon_order_id)
        set({postUrl: response?.data?.data?.checkout_data?.postUrl});
        set({returnUrl: response?.data?.data?.return_url});
        return {post_url, return_url, noon_order_id};
      }else{
        console.log('No Resoponse')
        set({postUrl: ''});
        set({returnUrl: ''});
      }
      // console.log(response.data.data.checkout_data.postUrl);
    } catch (error) {
      console.log(error);
    }
  },
});

export default paymentSlice;
