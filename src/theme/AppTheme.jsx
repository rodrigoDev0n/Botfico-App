import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/system"
import { useEffect, useState } from "react"
import { useDarkMode } from "../hooks/useDarkMode"
import { botficoAppTheme } from "./botficoDarkTheme"

export const AppTheme = ({children}) => {
  const {checked} = useDarkMode()

  return(
    <ThemeProvider theme={botficoAppTheme}>
     <CssBaseline />
     {children} 
    </ThemeProvider>
  )
}
