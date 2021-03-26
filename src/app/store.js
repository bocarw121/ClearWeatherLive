import { configureStore } from "@reduxjs/toolkit";
import backgroundImageReducer from "../features/backgroundImage/backgroundImageSlice";
import weatherReducer from "../features/weather/weatherSlice";
import journalReducer from "../features/journal/journalSlice";
import quoteReducer from "../features/quote/quoteSlice";

export default configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
    weather: weatherReducer,
    journal: journalReducer,
    quote: quoteReducer,
  },
});
