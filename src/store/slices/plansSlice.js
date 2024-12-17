import axios from "axios";

const PlansSlice = (set) => ({
    plans: [],
    error: null,
    fetchPlans: async (cat_id) => {
        set({ plans: [], error: null }); // Reset state before fetching
        try {
            const response = await axios.get(`https://appv2.captainchef.net/AppV2/public/get-plans?subscription_cat=${cat_id}`);
            const data = response.data.data;
            console.log(response)
            set({ plans: data });
        } catch (error) {
            set({ error: error.message });
        }
    },
});

export default PlansSlice;
