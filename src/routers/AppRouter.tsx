import { Route, Routes } from "react-router-dom"
import { LoadingScreen } from "../Page/LoadingScreen/LoadingScreen"
import { Login } from "../Pages/Login/Login"
import { WelcomePage } from "../Page/WelcomePage/WelcomePage"
import { BranchCard } from "../Components/BranchCard/BranchCard"

const branch = {
  company: "Giannoni",
  branch: "Sucursal 2 - Longchamps",
  imagesrc: "./Png/giannoniimg.png",
  address: "Av. Hipólito Yrigoyen 18329",
  addressmore: "Longchamps (1854) Buenos Aires.",
  phonenumber: "11 3039 9525",
  schedule: "Lunes a Viernes 8:00 a 12:30 - 14:00 a 18:30 Sábado 8:00 a 13:00",
  email: "longchampas02@pintureriagiannoni.com"
}

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<BranchCard branch={branch} />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}
