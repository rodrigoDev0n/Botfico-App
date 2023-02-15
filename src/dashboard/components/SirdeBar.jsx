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
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { DashboArdButtons } from "./DashboArdButtons"

export const SirdeBar = ({ drawerWidth = 240 }) => {

  const [loginUser, setloginUser] = useState(false)
  const logOut = () => setloginUser(true)

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
      {
        loginUser
        && <Navigate to='auth/login' replace={true} />
      }
      <Drawer
        variant="persistent"
        open
        sx={{
          display: { xs: `none`, sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: '#fff'/* 'primary.main' */
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
            <Typography sx={{ color: '#000', fontWeight: 'bold', mt: 1 }}>
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
            <Button
              onClick={logOut}
              variant="contained"
              fullWidth
              sx={{ backgroundColor: 'error.main', borderRadius: 5 }}
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
