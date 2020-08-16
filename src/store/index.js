import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import formReducer from "../features/bookHoliday/holidaySlice";

const middleware = [...getDefaultMiddleware(), logger];
export default configureStore({
  reducer: {
    form: formReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});
