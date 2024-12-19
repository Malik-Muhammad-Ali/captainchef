import axios from "axios";

const deliveryAddressSlice = (set) => ({
  address: [],
  fetchAddress: async () => {
    const response = await axios.get(
      `https://appv2.captainchef.net/AppV2/public/contact/get-contact-addresses?contact_id=1`
    );
    const data = await response.data.data;
    console.log(data);
    
    set({
      address: data,
    });
  },
});

export default deliveryAddressSlice;
