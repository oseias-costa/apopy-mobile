import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryInterface } from "../../../domain/category";

interface CategoryState {
  categories: CategoryInterface[]
}

interface CategoryState {
  categories: CategoryInterface[];
}

interface UpdateSubcategoryPayload {
  _id: string;
  oldSubcategory: string;
  newSubcategory: string;
}

interface DeleteSubcategoryPayload {
  _id: string;
  oldSubcategory: string;
}

interface CreateSubcategoryPayload {
  _id: string;
  newSubcategory: string;
}


const initialState: CategoryState  = {
  categories: []
}

const categorySlice = createSlice({
  name: "categoty",
  initialState: initialState,
  reducers: {
    fetchCategories: (state, action: PayloadAction<CategoryInterface[]>) => {
      state.categories = action.payload;
    },
    createCategory: (state, action: PayloadAction<CategoryInterface>) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action: PayloadAction<CategoryInterface>) => {
      const { _id, name } = action.payload;

      const updateCategory = state.categories.map((item) => {
        if (item._id === _id) {
          item.name = name;
        }
      });
      state = updateCategory;
    },
    deleteCategory: (state, action: PayloadAction<Omit<CategoryInterface, "name">>) => {
      state.categories = state.categories.filter(
        (item) => item._id !== action.payload._id
      );
    },

    updateSubcategory: (state, action: PayloadAction<UpdateSubcategoryPayload>) => {
      const updateSubcategory = state.categories.map((item) => {
        if (item._id === action.payload._id) {
          const i = item.subcategory?.indexOf(action.payload.oldSubcategory);
          item.subcategory[i] = action.payload.newSubcategory;
        }
      });
      state = updateSubcategory;
    },
    deleteSubcategory: (state, action: PayloadAction<DeleteSubcategoryPayload>) => {
      const newState = state.categories.map((item) => {
        if (item._id === action.payload._id) {
          if (item.subcategory?.length === 1) {
            item.subcategory = [];
          } else {
            const i = item.subcategory?.indexOf(action.payload.oldSubcategory);
            item.subcategory?.splice([i], [i]);
          }
        }
      });
      state = newState;
    },
    createSubcategory: (state, action: PayloadAction<CreateSubcategoryPayload>) => {
      const newState = state.categories.map((item) => {
        if (item._id === action.payload._id) {
          if (!item.subcategory) {
            item.subcategory = [action.payload.newSubcategory];
          } else {
            item.subcategory.push(action.payload.newSubcategory);
          }
        }
      });
      state = newState;
    },
  },
});

export const {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  updateSubcategory,
  deleteSubcategory,
  createSubcategory,
} = categorySlice.actions;
export default categorySlice.reducer;
