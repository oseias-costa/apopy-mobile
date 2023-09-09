import {createSlice} from '@reduxjs/toolkit'

const modalSplice = createSlice({
    initialState: {
        openModal: false
    },
    name: 'modal',
    reducers: {
        openModal: (state) => {
            state.openModal = true
        },
        closeModal: (state) => {
            state.openModal = false
        }
    }
})

export const { openModal, closeModal } = modalSplice.actions
export default modalSplice.reducer