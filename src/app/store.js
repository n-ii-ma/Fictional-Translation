import { configureStore } from "@reduxjs/toolkit";
import translationReducer from "../features/translation/translationSlice";

const store = configureStore({
  reducer: {
    translation: translationReducer,
  },
});

export default store;
