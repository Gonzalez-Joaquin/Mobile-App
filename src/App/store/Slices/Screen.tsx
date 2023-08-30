import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ScreenState {
    value: string
} 

const initialState: ScreenState = {
    value: "LoadingScreen",
}

export const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        setScreen: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { setScreen } = screenSlice.actions