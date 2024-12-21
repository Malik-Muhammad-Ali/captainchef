import axios from "axios";

const PlansSlice = (set) => ({
    plans: [],
    currentPlan: null,
    setCurrentPlan: (plan) => set({ currentPlan: plan }),
    error: null,
    fetchPlans: async (cat_id) => {
        set({ plans: [], error: null });
        try {
            const response = await axios.get(`https://appv2.captainchef.net/AppV2/public/get-plans?subscription_cat=${cat_id}`);
            const data = response.data.data;
            set({ plans: data });
        } catch (error) {
            set({ error: error.message });
        }
    },
});

export default PlansSlice;
