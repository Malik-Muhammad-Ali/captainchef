import axios from "axios";

const PlansSlice = (set) => ({
    plans: [],
    error: null,
    fetchPlans: async (subscriptionCat) => {
        set({ plans: [], error: null }); // Reset state before fetching
        try {
            const response = await axios.get('https://appv2.captainchef.net/AppV2/public/get-plans', {
                params: {
                    subscription_cat: subscriptionCat,
                },
            });
            const data = response.data.data;
            set({ plans: data });
            console.log(data);
            
        } catch (error) {
            set({ error: error.message });
        }
    },
});

export default PlansSlice;