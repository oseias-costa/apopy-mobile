import { configureStore } from "@reduxjs/toolkit";
import suplierReducer from "./slice/suplierSlice";
import modalReducer from "./slice/modalSlice";
import categoryReducer from "./slice/categorySlice";
import userReducer from "./slice/userSlice";
import productReducer from "./slice/productSlice";
import stockReducer from "./slice/stockSlice";
import saleReducer from "./slice/saleSlice";
import dashboardReducer from "./slice/dashboardSlice"

export const store = configureStore({
  reducer: {
    suplier: suplierReducer,
    modal: modalReducer,
    category: categoryReducer,
    user: userReducer,
    product: productReducer,
    stock: stockReducer,
    sale: saleReducer,
    dashboard: dashboardReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;