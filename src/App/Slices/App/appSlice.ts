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
            if (state.carrito.find(item => item.id === action.payload) == undefined) {
                state.carrito = [...state.carrito, { id: action.payload, cantidad: 1 }]
            } else {
                state.carrito = state.carrito.map(item => {
                    if (item.id === action.payload) {
                        return { ...item, cantidad: item.cantidad + 1 }
                    }
                    return item
                })
            }
        },
        decrementItem: (state, action) => {
            if (state.carrito.find(item => item.id === action.payload)?.cantidad === 1) {
                state.carrito = state.carrito.filter(item => item.id !== action.payload)
            } else {
                state.carrito = state.carrito.map(item => {
                    if (item.id === action.payload) {
                        return { ...item, cantidad: item.cantidad - 1 }
                    }
                    return item
                })
            }
        },
        removeItem: (state, action) => {
            state.carrito = state.carrito.filter(item => item.id !== action.payload)
        }
    }
})

export const { incrementItem, decrementItem, removeItem } = appSlice.actions