import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"

export const AppRouter = () => {
  return (
   <Routes>
    {/*Contiene la ruta del login*/}
    <Route path="/auth/*" element={<AuthRoutes />} />
    {/*Contiene la ruta de la app principal*/}
    <Route path="/*" element={<DashboardRoutes />} />
   </Routes> 
  )
}
