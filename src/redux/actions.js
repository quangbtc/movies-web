import {
  changeLanguageStart,
  changeLanguageSuccess,
  changeLanguageFail,
} from "./languageSlice";
export const changeLanguage = (dispatch, payload) => {
  dispatch(changeLanguageStart());
  try {
    dispatch(changeLanguageSuccess(payload));
  } catch (error) {
    dispatch(changeLanguageFail());
  }
};
