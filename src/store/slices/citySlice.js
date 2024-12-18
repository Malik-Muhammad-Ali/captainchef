import axios from "axios";

const citySlice = (set) => ({
    city: null,
    cities:[],
    fetchCities: async()=>{
      const response= await axios.get(`https://appv2.captainchef.net/AppV2/public/get-cities`);      
      const data = await response.data.data;
      set({
        cities: data,
      });
    },
    
    setCity: (city) =>
      set(() => ({
        city,
      })),
  });
  
  export default citySlice;
  