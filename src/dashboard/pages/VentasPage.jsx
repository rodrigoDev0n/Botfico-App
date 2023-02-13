import Icon from '@mui/material/Icon'
import { DashBoardLayout } from "../layout/DashBoardLayout"
import { VentasView } from "../views/views"

export const VentasPage = () => {
  return (
    <DashBoardLayout>
      <VentasView />
      <Icon>shopping_cart</Icon>
    </DashBoardLayout>
  )
}
