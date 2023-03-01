import { useEffect } from "react"
import { useDarkMode } from "../../hooks/useDarkMode"
import { DashBoardLayout } from "../layout/DashBoardLayout"
import { VentasView } from "../views/views"

export const VentasPage = () => {

  const {textcolor, state} = useDarkMode()

  return (
    <DashBoardLayout>
      <VentasView />
    </DashBoardLayout>
  )
}
