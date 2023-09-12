import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { StartScreen } from "../Pages/StartScreen/StartScreen"
import { Login } from "../Pages/Login/Login"
import { Companys } from "../Pages/Companys/Companys"
import { Welcome } from "../Pages/Welcome/Welcome"
import { Product } from "../Pages/Product/Product"
import { Catalogue } from "../Pages/Catalogue/Catalogue"
import { Cart } from "../Pages/Cart/Cart"
import { SuccessScreen } from "../Pages/SuccessScreen/SuccessScreen"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../App/store"

export const AppRouter = () => {

  const PublicRoutes = ["/", "/Login"]

  const login = localStorage.getItem("login") === "true" ? true : false
  const navigate = useNavigate()

  const location = useLocation()

  useEffect(() => {

    if(login && PublicRoutes.includes(location.pathname)){
      navigate("/Welcome")
    }
    if(!login && !PublicRoutes.includes(location.pathname)){
      navigate("/Login")
    }
  }, [location])
  
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Welcome" element={<Welcome />} />
      <Route path="/Company" element={<Companys />} />
      <Route path="/Catalogue" element={<Catalogue />} />
      <Route path="/Company/Cart" element={<Cart prev="company" />} />
      <Route path="/Catalogue/Cart" element={<Cart prev="catalogue" />} />
      <Route path="/Preview/:id" element={<Product />} />
      <Route path="/Succes" element={<SuccessScreen />} />
    </Routes>
  )
}
