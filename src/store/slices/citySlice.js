const citySlice = (set) => ({
    city: null,
    setCity: (city) =>
      set(() => ({
        city,
      })),
  });
  
  export default citySlice;
  