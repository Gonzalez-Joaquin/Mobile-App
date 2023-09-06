import { Dispatch } from "@reduxjs/toolkit"
import { fakeStoreApi } from "../../../Api/fakeStoreApi"
import { setItems, startLoadingItems } from "./ItemSlice"

export const fetchItems = () => {
    return async (dispatch: Dispatch) => {
        dispatch(startLoadingItems())

        const { data } = await fakeStoreApi.get('products')

        dispatch(setItems({ items: data }))
    }
}