import axios from "axios";

const userSlice = (set) => ({
  user: null,
  authenticated: false,
  otp: null,
  mobile_number: null,
  planDetailUrl: "/subscriptions",
  loginUser: async (mobileNumber) => {
    console.log(mobileNumber);
    const response = await axios.post(
      `https://portal.captainchef.net/public/api/webapi/check-contact-exists-or-not`,
      {
        mobile_number: mobileNumber,
      }
    );
    console.log(response.data);
    if (response.data.status === "success") {
      set(() => ({
        user: response.data.data,
        otp: response.data.otp,
        message: response.data.message,
        authenticated: true,
        mobile_number: mobileNumber,
      }));
    }
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
    const response = await axios.post(
      `https://portal.captainchef.net/public/api/ver2/contact/register`,
      {
        first_name: createUser.firstName,
        last_name: createUser.lastName,
        email: createUser.email,
        mobile: createUser.mobileNumber,
        password: createUser.password,
        country_code: 966,
        business_id: 100,
      }
    );
    console.log(response.data);
    if (response.data.status === "success") {
      set(() => ({
        user: response.data.user_info,
        authenticated: true,
      }));
      return {
        message: "Registration Successful!",
        status: true,
      };
    }
  },
});

export default userSlice;
