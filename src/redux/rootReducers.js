import { combineReducers } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
const rootReducers = combineReducers({
  language: languageSlice,
});
export default rootReducers;
