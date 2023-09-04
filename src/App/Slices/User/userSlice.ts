import { createSlice } from "@reduxjs/toolkit"

import { userState } from "../../../Interfaces/userInterface"

const initialState: userState = {
    isLoading: false,
    login: { username: '', password: '' },
    users: [{
        id: 0,
        email: '',
        phone: '',
        password: '',
        username: '',
        name: { firstname: '', lastname: '', },
        address: { city: '', geolocation: { lat: '', long: '' }, number: 0, street: '', zipcode: '' },
    }]
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startLoadingUsers: (state) => {
            state.isLoading = true
        },
        setUsers: (state, action) => {
            state.isLoading = false,
                state.users = action.payload.users
        },
    }
})

export const { setUsers, startLoadingUsers } = userSlice.actions