import axios from "axios";

const pickupSlice = (set) => ({
  pickupAddress: [],
  fetchPickupAddress: async () => {
    const response = await axios.get(
      "https://portal.captainchef.net/public/get-branches"
    );    
    const data = await response.data.data;
    // console.log(data);
    set({
      pickupAddress: data,
    });
  },
});

export default pickupSlice;
