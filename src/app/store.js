import { configureStore } from "@reduxjs/toolkit";
// const reduxLogger = require("redux-logger");
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";
import userReducer from "../features/user/userSlice";

// const logger = reduxLogger.createLogger();

const store = configureStore({
  //instead of createstore,configurestore method used in rtk
  //configureStore can be used as a combineReducer
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
