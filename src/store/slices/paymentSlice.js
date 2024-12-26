import axios from "axios";

const paymentSlice = (set) => ({
  postUrl: '',
  returnUrl: '',
  paymentNoon: async (addedPlans, totalPaid) => {
    console.log(addedPlans);
    try {
      const response = await axios.post(
        "https://appv2.captainchef.net/AppV2/public/api/ver2/save-purchased-subscription-with-noon",
        {
          user_id: 31163,
          total_amount: totalPaid,
          payment_mode: "noon",
          total_paid: totalPaid,
          added_palns: addedPlans,
          status: "waiting_for_payment",
          wallet_amount: "0",
          //   transaction_channel: "buy_subscription",
          //   coupon_code: null,
          //   coupon_name: null,
          //   discount_via: null,
          //   comment: "",
          payment_status: "unpaid",
          discount: null,
          locale: "en",
          noon_category: "pay",
        }
      );
      if(response.data.status === "success" && response.data.data.status === "INITIATED"){
        console.log('Success');
        const post_url = response?.data?.data?.checkout_data?.postUrl;
        const return_url = response?.data?.data?.return_url;
        set({postUrl: response?.data?.data?.checkout_data?.postUrl});
        set({returnUrl: response?.data?.data?.return_url});
        return {post_url, return_url};
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
