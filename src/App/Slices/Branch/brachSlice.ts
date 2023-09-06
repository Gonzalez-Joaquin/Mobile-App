import { createSlice } from "@reduxjs/toolkit"
import { Branch } from "../../../Interfaces/BranchInterface"

const initialState: Branch = {
    company: "Giannoni",
    branch: "Sucursal 2 - Longchamps",
    imagesrc: "./Png/giannoniimg.png",
    address: "Av. Hipólito Yrigoyen 18329",
    addressmore: "Longchamps (1854) Buenos Aires.",
    phonenumber: "11 3039 9525",
    schedule: "Lunes a Viernes 8:00 a 12:30 - 14:00 a 18:30 Sábado 8:00 a 13:00",
    email: "longchampas02@pintureriagiannoni.com"
}

export const branchSlice = createSlice({
    name: 'branch',
    initialState,
    reducers: {}
})