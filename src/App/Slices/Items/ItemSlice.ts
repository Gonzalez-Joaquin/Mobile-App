
import { createSlice } from '@reduxjs/toolkit'

import { items_state } from '../../../Interfaces/ItemsInterface'

const item_intital_state: items_state = {
    isLoading: false,
    items: [{ id: 0, title: '', price: 0, category: '', description: '', image: '' }]
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState: item_intital_state,
    reducers: {
        startLoadingItems: (state) => {
            state.isLoading = true
        },
        setItems: (state, action) => {
            state.isLoading = true
            state.items = action.payload.items
        },
    }
})

export const { startLoadingItems, setItems } = itemsSlice.actions