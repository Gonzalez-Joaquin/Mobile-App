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
        decrementItem: (state, acttion) => {
            state.carrito.filter(item => item.id === acttion.payload)
        }
    }
})

export const { incrementItem, decrementItem } = appSlice.actions