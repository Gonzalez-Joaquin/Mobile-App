import { createSlice } from "@reduxjs/toolkit"
import { Branch } from "../../../Interfaces/BranchInterface"

const initialState: Branch = {
    company: "Giannoni",
    branch: "Sucursal 2 - Longchamps",
    imagesrc: "https://scontent.fmdq7-1.fna.fbcdn.net/v/t39.30808-6/350144100_607674941323893_5182398170446628475_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=AhkG2DkAg-AAX9UVbYG&_nc_ht=scontent.fmdq7-1.fna&oh=00_AfBsJGYaJCFhld7YV6N_Uy7L8wV7w4PAntTA-XWBQf0kPQ&oe=64FE2927",
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