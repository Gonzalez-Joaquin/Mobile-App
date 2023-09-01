import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Item {
        id: number,
        title: string,
        price: string,
        category: string,
        description: string,
        image: string
}

export interface ItemsState {
    Items: Item[]
    filter: Filter
}

export interface Filter {
    type: 'title' | 'default',
    value: string
}

const initialState: ItemsState = {
    Items: [],
    filter: { type: 'default', value: '' }
}

export const ItemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<Item[]>) => {
            state.Items = action.payload
        },
        addItem: (state, action: PayloadAction<Item>) => {
            state.Items.push(action.payload)
        }
    }
})

export const { setItems, addItem } = ItemsSlice.actions