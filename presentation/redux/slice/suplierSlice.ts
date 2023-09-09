import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Suplier } from "../../../domain/entities/suplier";

interface SuplierState {
  supliers: Suplier[];
}

const initialState: SuplierState = {
  supliers: []
}

const suplierSlice = createSlice({
  name: "suplier",
  initialState: initialState,
  reducers: {

    fetchData: (state, action: PayloadAction<Suplier[]>) => {
      state.supliers = action.payload;
    },
    createSuplier: (state, action: PayloadAction<Suplier>) => {
      state.supliers.push(action.payload);
    },
    removeSuplier: (state, action: PayloadAction<Suplier>) => {
      state.supliers = state.supliers.filter(
        (suplier) => suplier._id !== action.payload._id
      );
    },
    updateSuplier: (state, action: PayloadAction<Suplier>) => {
      state.supliers = state.supliers.map((suplier) => {
        if (suplier._id === action.payload._id) {
          suplier.name = action.payload.name;
        }
        return suplier;
      });
    },
  },
});

export const { createSuplier, removeSuplier, updateSuplier, fetchData } =
  suplierSlice.actions;
export default suplierSlice.reducer;
