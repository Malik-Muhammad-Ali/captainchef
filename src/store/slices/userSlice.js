import axios from "axios";

const userSlice = (set) => ({
  user: null,
  otp: null,
  authenticated: false,
  planDetailUrl: null,
  checkUser: async (user) => {
    const response = await axios.post(
      `https://portal.captainchef.net/public/api/webapi/check-contact-exists-or-not`,
      {
        mobile_number: "966542391545",
      }
    );
    const userData = await response.data.data;
    const otp = response.data.otp;
    console.log(otp)
    set(()=> ({
      user: userData,
      otp: otp,
    }));
    return userData;
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
});

export default userSlice;
