import { createSlice } from "@reduxjs/toolkit"

import { userState } from "../../../Interfaces/userInterface"

const initialState: userState = {
    login: { username: '', password: '' },
    user: {
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
    reducers: {}
})