import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/system"
import { botficoAppTheme } from "./botficoAppTheme"

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={botficoAppTheme}>
     <CssBaseline />
     {children} 
    </ThemeProvider>
  )
}
