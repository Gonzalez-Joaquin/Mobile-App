
import { createSlice } from '@reduxjs/toolkit'

import { items_state } from '../../../Interfaces/ItemsInterface'

const item_intital_state: items_state = {
    isLoading: false,
    items: [{ cod: 0, title: '', desc: '', price: 0, images: [{ id: 0, image: '' }] }]
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState: item_intital_state,
    reducers: {
        startLoadingItems: (state) => {
            state.isLoading = true
        },
        setItems: (state, action) => {
            console.log(action)
        },
    }
})

export const { startLoadingItems, setItems } = itemsSlice.actions