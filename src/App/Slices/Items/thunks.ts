import { startLoadingItems } from "./ItemSlice"

export const getItems = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingItems())
    }
}