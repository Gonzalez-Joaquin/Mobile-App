import { Route, Routes } from "react-router-dom"
import { LoadingScreen } from "../Page/LoadingScreen/LoadingScreen"
import { Login } from "../Pages/Login/Login"
import { WelcomePage } from "../Page/WelcomePage/WelcomePage"
import { BranchCard } from "../Components/BranchCard/BranchCard"
import { ListItem } from "../Components/Item/ListItem"

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

const item = {
  id: 8383939,
  title: "Pintura Esmalte Pintulux Anticorrosivo Gris Litro",
  price: "$23.000,00",
  category: "",
  description: "Z10 super cubritivo interior mate es un recubrimiento para interiores formulado con emulsiones acrílicas, dióxido de titanio y pigmentos extendedo...",
  image: "./Png/Pintulux.png"
}

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<ListItem item={item} />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}
