import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../domain/entities/product";

interface ProductState {
  products: Product[]
}

const initialState: ProductState = {
  products: []
}

const productSlice = createSlice({
  initialState: initialState,
  name: "Products",
  reducers: {
    fetchProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    createProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.map((item) => {
        if(item._id === action.payload._id){
          item.name = action.payload.name 
          item.category = action.payload.category 
          item.subcategory = action.payload.subcategory 
          item.suplier = action.payload.suplier 
        }
        return item
      })
    },
    deleteProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter( (product) =>  
        product._id !== action.payload._id
      )
    }
  },
});

export const { fetchProducts, createProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
