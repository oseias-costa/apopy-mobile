import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Stock } from "../../../domain/entities/stock";

interface StockState {
  stock: Stock[];
}

const initialState: StockState = {
  stock: [],
};

export const stockSlice = createSlice({
  name: "stock",
  initialState: initialState,
  reducers: {
    fetchStock: (state, action: PayloadAction<Stock[]>) => {
      state.stock = action.payload;
    },
    createStock: (state, action: PayloadAction<Stock>) => {
      state.stock.push(action.payload);
    },
    updateStock: (state, action: PayloadAction<Stock>) => {
      state.stock = state.stock.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
        }
        return item;
      });
    },
    deleteStock: (state, action: PayloadAction<{ _id: string }>) => {
      state.stock = state.stock.filter(
        (item) => item._id !== action.payload._id
      );
    },
    transferStockToSale: (state, action: PayloadAction<Stock>) => {
      const itemStock: Stock = state.stock.filter(
        (item) => item._id === action.payload._id
      )[0];
      const verifyQuantity = itemStock.quantity - action.payload.quantity;
      if (verifyQuantity === 0) {
        state.stock = state.stock.filter(
          (stock) => stock._id !== action.payload._id
        );
      } else {
        state.stock = state.stock.map((item) => {
          const newQuantity = item.quantity - action.payload.quantity
          if (item._id === action.payload._id) {
            item = {
              ...action.payload,
              quantity: newQuantity,
              total: newQuantity * item.costPrice
            };
          }
          return item;
        });
      }
    },
    reverseToStock: (state, action: PayloadAction<Stock>) => {
      const itemStock: Stock = state.stock.filter(
        (item) => item._id === action.payload._id
      )[0];

      if(itemStock){
        state.stock = state.stock.map((item) => {
          if (item._id === action.payload._id) {
            item.quantity = item.quantity + action.payload.quantity
            item.total = item.quantity  * item.costPrice
          }
          return item
        })
      } else {
        state.stock.push(action.payload)
      }
    }
  },
});

export const {
  fetchStock,
  createStock,
  updateStock,
  deleteStock,
  transferStockToSale,
  reverseToStock
} = stockSlice.actions;
export default stockSlice.reducer;
