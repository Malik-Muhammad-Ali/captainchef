import axios from "axios";

const subscriptionCategories =(set) =>({
    categories : [],
    categoryId:null,
    error:null,
    setCategoryId:()=>{},
    fetchCategories : async () => {
        set({error:null});
        try {
            const response = await axios.get(
                'https://appv2.captainchef.net/AppV2/public/get-subscription-categories'
            );
            const data = response.data.data;
            set({categories: data});
        } catch (error) {
            set({error:error.message});
        }
    },
}) ;

export default subscriptionCategories