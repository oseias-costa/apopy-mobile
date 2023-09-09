import { createSlice } from "@reduxjs/toolkit"

export const initialUserState = { 
    user: {
        _id: "",
        createAt: null,
        email: "",
        name: "",
        phone: ""
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        fetchUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { fetchUser } = userSlice.actions
export default userSlice.reducer