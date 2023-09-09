import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dashboardInitialState: DashboardInitialState = {
    products: 0,
    totalItems: 0,
    totalValue: 0
}

interface DashboardInitialState {
    products: number;
    totalItems: number;
    totalValue: number;
}

const dasboardSlice = createSlice({
    initialState: dashboardInitialState,
    name: 'dashboard',
    reducers: {
        fetchDashboardData: (state, action: PayloadAction<DashboardInitialState>) => {
            state.products = action.payload.products
            state.totalItems = action.payload.totalItems
            state.totalValue = action.payload.totalValue
        }   
    }
})

export const { fetchDashboardData } = dasboardSlice.actions
export default dasboardSlice.reducer