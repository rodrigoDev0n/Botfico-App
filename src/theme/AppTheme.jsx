import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/system"
import { useEffect, useState } from "react"
import { useDarkMode } from "../hooks/useDarkMode"
import { botficoAppTheme } from "./botficoAppTheme"
import { botficoDarkTheme } from "./botficoDarkTheme"

export const AppTheme = ({children}) => {
  const {themeData} = useDarkMode()
  
  return (
    <ThemeProvider theme={botficoDarkTheme}>
     <CssBaseline />
     {children} 
    </ThemeProvider>
  )
}
