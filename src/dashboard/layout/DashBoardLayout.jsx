import { useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import { ThemeCustomProvider } from "../../context/ThemeCustomProvider"
import { useDarkMode } from "../../hooks/useDarkMode"
import { tokens } from "../../theme/botficoAppTheme"
import { NavBar } from "../components/NavBar"
import { SirdeBar } from "../components/SirdeBar"

const drawerWidth = 270

export const DashBoardLayout = ({ children }) => {
  const {
    disableDarkMode,
    setDarkMode,
    primary,
    secondary,
    textcolor,
    state,
    theme
  } = useDarkMode()

  const colortheme = useTheme()
  const colors = tokens(colortheme.palette.mode)

  return (
    <ThemeCustomProvider>
      <Box sx={{ display: 'flex', backgroundColor: 'primary.main', color: 'textcolor.main' }}>
        <NavBar />
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
            flexGrow: 1, p: 2, mt: 5,
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeCustomProvider>
  )
}
