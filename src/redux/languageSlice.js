import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  language: "en",
  country: "English",
  isLoading: false,
  isError: false,
};
export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguageStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    changeLanguageSuccess: (state, action) => {
      console.log("check aciton");
      state.isLoading = false;
      state.language = action.payload.languge;
      state.country = action.payload.country;
      state.isError = false;
    },
    changeLanguageFail: (state) => {
      state.isError = true;
    },
  },
});
export const {
  changeLanguageStart,
  changeLanguageFail,
  changeLanguageSuccess,
} = languageSlice.actions;
export default languageSlice.reducer;
