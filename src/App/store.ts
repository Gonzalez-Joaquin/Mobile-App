import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./Slices/Items/ItemSlice";
import { userSlice } from "./Slices/User/userSlice";
import { branchSlice } from "./Slices/Branch/brachSlice";
import { appSlice } from "./Slices/App /AppSlice";

export const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        users: userSlice.reducer,
        branch: branchSlice.reducer,
        app: appSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch