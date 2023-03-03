import { colors, useTheme } from "@mui/material"
import { LogoutOutlined } from "@mui/icons-material"

import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  Toolbar,
  Typography
} from "@mui/material"

import { useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext"
import { DarkModeButton } from "../../components/DarkModeButton"
import { useDarkMode } from "../../hooks/useDarkMode"
import { darkModeReducer } from "../../reducer/darkModeReducer"
import { DashboArdButtons } from "./DashboArdButtons"
import { tokens } from "../../theme/botficoAppTheme"

// NOTE: Eliminar codigo comentado

/* const init = () => {
  return {
    theme: 'DarkMode',
    active: false,
  }
} */
export const SirdeBar = ({drawerWidth = 240}) => {
  const {logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const theme = useTheme()
  const color = tokens(theme.palette.mode)

  const logOut = () => {
    logout()
    navigate('/login', {
        replace: true,
    });
  }

  return (
    <Box
      component='nav'
      sx={{
        width: {
          xs: 0,
          sm: drawerWidth
        },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="persistent"
        open
        sx={{
          display: { xs: `none`, sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'primary.main',
          },
        }}
      >
        <Grid
          item
          sx={{
            mt:'15%',
            p: 2
          }}
        >
          <Grid
            item
            className="container-custom"
            sx={{
              backgroundColor: '',//'#1e4f78',
              borderRadius: '20px'
            }}
          >
            <List>
              <DashboArdButtons />
            </List>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  )
}
