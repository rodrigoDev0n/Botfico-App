import { Box } from "@mui/system"
import { NavBar } from "../components/NavBar"
import { SirdeBar } from "../components/SirdeBar"

const drawerWidth = 270

export const DashBoardLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
      {/* <NavBar /> */}
      <SirdeBar drawerWidth={drawerWidth} />
      <Box
        component='main'
        sx={{
          flexGrow: 1, p: 2, mt: 0
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
