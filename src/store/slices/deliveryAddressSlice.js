import axios from "axios";

const deliveryAddressSlice = (set) => ({
  address: [],
  fetchAddress: async (userId) => {
    const response = await axios.get(
      `https://appv2.captainchef.net/AppV2/public/contact/get-contact-addresses?contact_id=${userId}`
    );
    const data = await response.data.data;
    console.log(data);
    
    set({
      address: data,
    });
  },
});

export default deliveryAddressSlice;
