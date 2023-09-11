import { Dispatch } from "@reduxjs/toolkit"
import { CarritoItems } from "../Interfaces/AppInterface"
import getItemQuantity from "../Hooks/getItemsQuantity"
import { decrementItem } from "../App/Slices/App/AppSlice"

const decrementItems = (id: number, counter: number, cart: CarritoItems[], dispatch: Dispatch) => {
    for (let i = getItemQuantity(id, cart); i >= counter; i--) {
        dispatch(decrementItem(id))
    }
}

export default decrementItems