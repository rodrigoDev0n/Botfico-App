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

import { deepOrange } from "@mui/material/colors"
import { useContext, useReducer, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext"
import { DarkModeButton } from "../../components/DarkModeButton"
import { useDarkMode } from "../../hooks/useDarkMode"
import { darkModeReducer } from "../../reducer/darkModeReducer"
import { DashboArdButtons } from "./DashboArdButtons"

// NOTE: Eliminar codigo comentado

/* const init = () => {
  return {
    theme: 'DarkMode',
    active: false,
  }
} */
export const SirdeBar = ({ 
  drawerWidth = 240, 
  disableDarkMode, 
  setDarkMode, 
  state, 
  primary, 
  textcolor 
}) => {
  /* const [state, dispatch] = useReducer(darkModeReducer, init) */
  const {logout} = useContext(AuthContext)
  const navigate = useNavigate()

/*   const setDarkMode = () => {
    const action = {
      type: '[Theme] Switch Theme',
      payload: true,
    }

    dispatch(action)
    console.log(state)
  }

  const disableDarkMode = () => {
    const action = {
      type: '[Theme] Light Theme',
      payload: false,
    }
  
    dispatch(action)
    console.log(state)
  } */

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
            backgroundColor: primary /* 'primary.main' */,
          },
        }}
      >
        <Toolbar>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <Avatar sx={{ bgcolor: deepOrange[500], mt: 3 }}>
              RP
            </Avatar>
            <Typography sx={{ color: textcolor, fontWeight: 'bold', mt: 1 }}>
              Rodrigo Poblete
            </Typography>
          </Grid>
        </Toolbar>
        <Divider sx={{ mt: 3 }} />
        <Grid
          item
          sx={{
            p: 2
          }}
        >
          <Grid
            item
            className="box-shadow"
            sx={{
              backgroundColor: 'primary.main',
              borderRadius: '20px'
            }}
          >
            <List>
              <DashboArdButtons />
            </List>
          </Grid>
        </Grid>
        <Divider />
        <Grid container alignItems="center" justifyContent="center" sx={{ mt: 1, p: 2 }}>
          <Grid item xs={12}>
            <Grid item sx={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <DarkModeButton 
                setDarkMode={setDarkMode} 
                disableDarkMode={disableDarkMode} 
                state={state} 
              />
            </Grid>
            <Button
              onClick={logOut}
              variant="contained"
              fullWidth
              sx={{ backgroundColor: 'red', borderRadius: 5 }}
            >
              <LogoutOutlined />
              <Typography sx={{ ml: 1 }}>
                Cerrar sesión
              </Typography>
            </Button>
          </Grid>
        </Grid>

      </Drawer>
    </Box>
  )
}
