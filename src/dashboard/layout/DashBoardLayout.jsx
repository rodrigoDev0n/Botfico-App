import { useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import { ThemeCustomProvider } from "../../context/ThemeCustomProvider"
import { useDarkMode } from "../../hooks/useDarkMode"
import { tokens } from "../../theme/botficoAppTheme"
import { NavBar } from "../components/NavBar"
import { SirdeBar } from "../components/SirdeBar"

const drawerWidth = 270

//TODO: El contenedor principal debe abarcar toda la pantalla

export const DashBoardLayout = ({ children }) => {

  const colortheme = useTheme()
  const colors = tokens(colortheme.palette.mode)

  return (
    <ThemeCustomProvider>
      <Box sx={{ display: 'flex', backgroundColor: 'primary.main', color: 'textcolor.main' }}>
        <NavBar />
        <SirdeBar drawerWidth={drawerWidth} />
        <Box
          component='main'
          sx={{
            flexGrow: 1, p: 2, mt: 5,
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeCustomProvider>
  )
}
