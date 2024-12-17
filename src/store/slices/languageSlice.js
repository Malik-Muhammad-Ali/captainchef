const languageSlice = (set) => ({
  language: "en",
  setLanguage: (lang) => {
    set(() => ({
      language: lang,
    }));
  },
});

export default languageSlice;
