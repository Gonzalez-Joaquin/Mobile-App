import { Route, Routes } from "react-router-dom"
import { StartScreen } from "../Pages/StartScreen/StartScreen"
import { Login } from "../Pages/Login/Login"
import { Companys } from "../Pages/Companys/Companys"
import { Welcome } from "../Pages/Welcome/Welcome"
import { Product } from "../Pages/Product/Product"
import { Catalogue } from "../Pages/Catalogue/Catalogue"
import { Cart } from "../Pages/Cart/Cart"
import { SuccessScreen } from "../Pages/SuccessScreen/SuccessScreen"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Welcome" element={<Welcome />} />
      <Route path="/Company" element={<Companys />} />
      <Route path="/Company/Catalogue" element={<Catalogue prev="company" />} />
      <Route path="/Cart/Catalogue" element={<Catalogue prev="cart" />} />
      <Route path="/Company/Cart" element={<Cart prev="company" />} />
      <Route path="/Catalogue/Cart" element={<Cart prev="catalogue" />} />
      <Route path="/Preview/:id" element={<Product />} />
      <Route path="/Succes" element={<SuccessScreen />} />
    </Routes>
  )
}
