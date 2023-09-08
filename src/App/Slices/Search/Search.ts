import { createSlice } from "@reduxjs/toolkit"
import { ApiItem } from "../../../Interfaces/ItemsInterface"

const initialState = {
    searchedItems: [{} as ApiItem]
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchedItems: (state, action) => {
            state.searchedItems = action.payload
            console.log("setsearcheditems")
        }
    }
})

export const { setSearchedItems } = searchSlice.actions