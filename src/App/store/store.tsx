import { configureStore } from "@reduxjs/toolkit";
import { screenSlice } from "./Slices/Screen";

export const store = configureStore({
    reducer:{
        screen: screenSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch