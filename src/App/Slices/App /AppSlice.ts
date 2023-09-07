import { createSlice } from "@reduxjs/toolkit"
import { appState } from "../../../Interfaces/AppInterface"

const initialState: appState = {
    carrito: []
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        incrementItem: (state, action) => {
            state.carrito.push(action.payload)
        },
        decrementItem: (state, action) => {
            const index = state.carrito.indexOf(action.payload);
            state.carrito.splice(index, 1);
        },
        deleteItem: (state, action) => {
            const index = state.carrito.indexOf(action.payload);
            state.carrito.splice(index);
        }
    }
})

export const { incrementItem, decrementItem, deleteItem } = appSlice.actions