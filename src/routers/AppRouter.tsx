import { Route, Routes } from "react-router-dom"
import { LoadingScreen } from "../Page/LoadingScreen/LoadingScreen"
import { Login } from "../Pages/Login/Login"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}
