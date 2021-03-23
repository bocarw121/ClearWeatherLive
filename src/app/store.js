import { configureStore } from "@reduxjs/toolkit";
import backgroundImageReducer from "../features/backgroundImage/backgroundImageSlice";

export default configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
  },
});
