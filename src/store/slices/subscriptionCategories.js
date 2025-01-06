import axios from "axios";

const subscriptionCategories =(set) =>({
    categories : [],
    categoryId:null,
    error:null,
    setCategoryId:()=>{},
    fetchCategories : async () => {
        console.log("Categories API Hit")
        set({error:null});
        try {
            const response = await axios.get(
                'https://portal.captainchef.net/public/get-subscription-categories'
            );
            const data = response.data.data;
            set({categories: data});
        } catch (error) {
            set({error:error.message});
        }
    },
}) ;

export default subscriptionCategories