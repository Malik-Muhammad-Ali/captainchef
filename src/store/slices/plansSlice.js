import axios from "axios";

const PlansSlice = (set) => ({
    plans: [],
    currentPlan: null,
    error: null,
    planAvailableDays: [],
    setPlanAvailableDays: (days) => {
        set({ planAvailableDays: days });
    },
    setCurrentPlan: (plan) => set({ currentPlan: plan }),
    fetchPlans: async (cat_id) => {
        console.log('Plans API Hit')
        set({ error: null });
        try {
            const response = await axios.get(`https://portal.captainchef.net/public/get-plans?subscription_cat=${cat_id}`);
            const data = response.data.data;
            set({ plans: data });
            return {data: data, message: 'success'};
        } catch (error) {
            console.log('Error')
            set({ error: error.message });
        }
    },
});

export default PlansSlice;
