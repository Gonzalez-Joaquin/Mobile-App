import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./Slices/Items/ItemSlice";
import { userSlice } from "./Slices/User/userSlice";

export const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        users: userSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch