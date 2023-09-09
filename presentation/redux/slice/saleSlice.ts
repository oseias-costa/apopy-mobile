import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sale } from "../../../domain/entities/sale";

interface SaleState {
    sales: Sale[]
}

const initialValueSale: SaleState = {
    sales: []
}

export const saleSlice = createSlice({
    initialState: initialValueSale,
    name: 'sale',
    reducers: {
        fetchSales: (state, action: PayloadAction<Sale[]>) => {
            state.sales = action.payload
        },
        transferSale: (state, action: PayloadAction<Sale>) => {
            state.sales.push(action.payload)
        },
        reverseSale: (state, action: PayloadAction<Sale>) => {
            state.sales = state.sales.filter(item => item._id !== action.payload._id)
        }
    }
})

export const { fetchSales, transferSale, reverseSale } = saleSlice.actions
export default saleSlice.reducer