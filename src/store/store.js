import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
  },
});

export default store;
