import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import themeReducer from "./slices/themeSlice";
import modalReducer from "./slices/modalSlice";
import employeesReducer from "./slices/employeesSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
    modal: modalReducer,
    employees: employeesReducer,
  },
});

export default store;
