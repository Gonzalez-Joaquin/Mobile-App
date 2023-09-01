import { Route, Routes } from "react-router-dom"
import { StartScreen } from "../Pages/StartScreen/StartScreen"
import { Login } from "../Pages/Login/Login"
import { Companys } from "../Pages/Companys/Companys"
import { Welcome } from "../Pages/Welcome/Welcome"
import { Product } from "../Pages/Product/Product"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Welcome" element={<Welcome />} />
      <Route path="/Company" element={<Companys />} />
      <Route path="/ProductPreview" element={<Product type={'view'} />} />
    </Routes>
  )
}
