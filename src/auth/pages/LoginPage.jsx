import { Google } from "@mui/icons-material"
import { Link as RouterLink, Navigate } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useState } from "react"

export const LoginPage = () => {
 
  const [loginUser, setloginUser] = useState(false)
  const onLogin = () => setloginUser(true)

  return (
    <AuthLayout title="Login">
      {
        loginUser
        && <Navigate to='/' replace={true} />
      }
      <form>
        <Grid container>
         <Grid item xs={12} sx={{marginTop: 2}}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Ingresa tu email"
              fullWidth
            />
         </Grid> 
         <Grid item xs={12} sx={{marginTop: 2}}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="********"
              fullWidth
            />
         </Grid>
         <Grid container spacing={2} sx={{mb: 2, mt: 2}}>
            <Grid item xs={12} sm={6}>
              <Button onClick={onLogin} variant="contained" fullWidth>
                Login
              </Button>
            </Grid  >
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
               <Google />
               <Typography sx={{ml: 1}}>
                Google
               </Typography>
              </Button>
            </Grid>
         </Grid>
         <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} color="inherit" to="/auth/register">
            Crear una cuenta
          </Link>
         </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
