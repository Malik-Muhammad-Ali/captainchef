const userSlice = (set) => ({
  user: null,
  authenticated: false,
  planDetailUrl: null,
  setUser: (user) =>
    set(() => ({
      user,
      authenticated: !!user,
    })),
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
