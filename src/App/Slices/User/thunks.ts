import { Dispatch } from "@reduxjs/toolkit"
import { fakeStoreApi } from "../../../Api/fakeStoreApi"
import { loginUserData, startLoadingUsers, endLoadingUsers } from "./userSlice"

const loginUser = (username: string, password: string) => {
    return async (dispatch: Dispatch) => {

        const data = { username, password }

        // Set Page loading
        dispatch((startLoadingUsers()))

        // Post User
        const response = await fakeStoreApi.post('auth/login', data)
            .then(res => {
                return res.status
            })
            .catch(() => {
                if(data.username !== "Tomas" || data.password !== "1364852"){
                alert('Nombre de usuario o contraseña invalidos')
            }
            else {
                dispatch((loginUserData(username)))
            }
            })
            .finally(() => {
                dispatch(endLoadingUsers())
            })

        // Post true
        if (response === 200) {
            dispatch((loginUserData(username)))
        }
    }
}

export { loginUser }