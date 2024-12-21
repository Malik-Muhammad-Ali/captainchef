import axios from "axios";

const userSlice = (set) => ({
  user: null,
  authenticated: false,
  planDetailUrl: '/subscriptions',
  loginUser: async (email, password) => {
    const response = await axios.post(
      `https://appv2.captainchef.net/AppV2/public/contacts/login?username=${email}&password=${password}`
    );
    console.log("Api Hit");
    if (response.data.status === "success") {
      set(() => ({
        user: response.data.user_info,
        authenticated: true,
      }));
    }
    return response.data.user_info;
  },
  logout: () =>
    set(() => ({
      user: null,
      authenticated: false,
    })),
  setPlanDetailUrl: (route) =>
    set(() => ({
      planDetailUrl: route,
    })),
  registerUser: async (createUser) => {
    const countryCode = createUser.mobileNumber.substring(0, 3);
    if (countryCode !== "966") {
      return {
        message: "Enter Correct Number with Country Code 966",
        status: false,
      };
    }
    const response = await axios.post(
      `https://appv2.captainchef.net/AppV2/public/api/ver2/contact/register?business_id=100&first_name=${createUser.firstName}&last_name=${createUser.lastName}&email=${createUser.email}&mobile=${createUser.mobileNumber}&password=${createUser.password}&country_code=${countryCode}`
    );
    console.log(response);
    return {
      message: "Registration Successful!",
      status: true,
    };
  },
});

export default userSlice;
