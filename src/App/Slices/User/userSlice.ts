import { createSlice } from "@reduxjs/toolkit"

import { userState } from "../../../Interfaces/userInterface"

const initialState: userState = {
    isLoading: false,
    login: false,
    users: {
        id: 0,
        email: '',
        phone: '',
        password: '',
        username: '',
        name: { firstname: '', lastname: '', },
        address: { city: '', geolocation: { lat: '', long: '' }, number: 0, street: '', zipcode: '' },
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startLoadingUsers: (state) => {
            state.isLoading = true
        },
        endLoadingUsers: (state) => {
            state.isLoading = false
        },
        loginUserData: (state, action) => {
            state.users.username = action.payload
            state.isLoading = false
            state.login = true
            localStorage.setItem("login", "true")
        }
    }
})

export const { startLoadingUsers, endLoadingUsers, loginUserData } = userSlice.actions