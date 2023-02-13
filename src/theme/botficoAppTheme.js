import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const botficoAppTheme = createTheme({
  palette: {
    primary: {
      main: '#1e4f79',
      secondary: '#1c4c74',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    textcolor: {
      main: '#686868',
      secondary: '#909090',
      thirdcolor: '#F9C14A'
    },
    selectedbutton: {
      main: '#D3CFC6'
    },
    dashboardtextcolors: {
      main: '#E3E1DC',
    }
  }
})

//NOTE: Añadir colores predeterminados de la interfaz aqui 🥸