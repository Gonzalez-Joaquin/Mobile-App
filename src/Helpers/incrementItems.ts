import { Dispatch } from "@reduxjs/toolkit"
import { CarritoItems } from "../Interfaces/AppInterface"
import { incrementItem } from "../App/Slices/App/AppSlice"
import getItemQuantity from "../Hooks/getItemsQuantity"

const incrementItems = (id: number, counter: number, cart: CarritoItems[], dipatch: Dispatch) => {
    for (let i = getItemQuantity(id, cart); i < counter; i++) {
        dipatch(incrementItem(id))
    }
}

export default incrementItems