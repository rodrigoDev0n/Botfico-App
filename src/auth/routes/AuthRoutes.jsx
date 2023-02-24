import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes>
     <Route path="/*" element={<LoginPage />} /> 
     <Route path="register" element={<RegisterPage />} />
    </Routes>
  )
}
