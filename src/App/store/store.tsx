import { configureStore } from "@reduxjs/toolkit";
import { ItemsSlice } from "./Slices/Items";

export const store = configureStore({
    reducer:{
        screen: ItemsSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch