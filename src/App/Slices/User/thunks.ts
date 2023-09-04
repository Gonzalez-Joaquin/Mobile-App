import { fakeStoreApi } from "../../../Api/fakeStoreApi"
import { setUsers, startLoadingUsers } from "./userSlice"

export const fetchUsers = () => {
    return async (dispatch, getState) => {
        dispatch((startLoadingUsers()))

        const { data } = await fakeStoreApi.get('users')

        dispatch(setUsers({ users: data }))
    }
}