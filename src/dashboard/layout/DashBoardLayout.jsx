import { Box } from "@mui/system"
import { useEffect } from "react"
import { useDarkMode } from "../../hooks/useDarkMode"
import { NavBar } from "../components/NavBar"
import { SirdeBar } from "../components/SirdeBar"

const drawerWidth = 270

export const DashBoardLayout = ({children}) => {
  const {
    disableDarkMode, 
    setDarkMode, 
    primary, 
    secondary,
    textcolor, 
    state, 
    theme
  } = useDarkMode()

  return (
    <Box sx={{display: 'flex', backgroundColor: primary, color: textcolor}}>
      {/* <NavBar /> */}
      <SirdeBar 
        drawerWidth={drawerWidth} 
        disableDarkMode={disableDarkMode}
        setDarkMode={setDarkMode}
        state={state}
        primary={primary}
        textcolor={textcolor}
      />
      <Box
        component='main'
        sx={{
          flexGrow: 1, p: 2, mt: 0,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
