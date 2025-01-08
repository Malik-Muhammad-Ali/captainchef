import axios from "axios";
const BASE_URL = "https://portal.captainchef.net/public";

const userSlice = (set) => ({
  user: null,
  authenticated: false,
  otp: null,
  mobile_number: null,
  planDetailUrl: "/subscriptions",
  setAuthenticated: (authenticated) => set({ authenticated }),
  loginUser: async (mobileNumber) => {
    const response = await axios.post(
      `${BASE_URL}/api/webapi/check-contact-exists-or-not`,
      {
        mobile_number: mobileNumber,
      }
    );
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
    const response = await axios.post(`${BASE_URL}/api/ver2/contact/register`, {
      first_name: createUser.firstName,
      last_name: createUser.lastName,
      email: createUser.email,
      mobile: createUser.mobileNumber,
      password: createUser.password,
      country_code: 966,
      business_id: 100,
    });
    console.log(response.data);
    if (response.data.status === "success") {
      set(() => ({
        user: response.data.user_info,
      }));
      return {
        message: "Registration Successful!",
        status: true,
      };
    }
  },
});

export default userSlice;
