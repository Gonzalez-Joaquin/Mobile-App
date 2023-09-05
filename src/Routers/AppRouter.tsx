import { Route, Routes } from "react-router-dom"
import { StartScreen } from "../Pages/StartScreen/StartScreen"
import { Login } from "../Pages/Login/Login"
import { Companys } from "../Pages/Companys/Companys"
import { Welcome } from "../Pages/Welcome/Welcome"
import { Product } from "../Pages/Product/Product"
import { Catalogue } from "../Pages/Catalogue/Catalogue"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Welcome" element={<Welcome />} />
      <Route path="/Company" element={<Companys />} />
      <Route path="/Catalogue" element={<Catalogue />} />
      <Route path="/ProductPreview" element={<Product type={'view'} />} />
    </Routes>
  )
}
