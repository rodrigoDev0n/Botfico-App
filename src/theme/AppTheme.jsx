import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/system"
import { useEffect, useState } from "react"
import { useDarkMode } from "../hooks/useDarkMode"
import { botficoAppTheme, themes } from "./botficoAppTheme"
import { botficoDarkTheme } from "./botficoDarkTheme"

export const AppTheme = ({children}) => {
  const {themeData, checked} = useDarkMode()

  return (
    <ThemeProvider theme={checked ? themes[1] : themes[0]}>
     <CssBaseline />
     {children} 
    </ThemeProvider>
  )
}
