import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuthLayout title="Registrate">
     <form>
      <Grid container>
        <Grid item xs={12} sx={{marginTop: 2}}>
          <TextField
            label="Nombre"
            type="text"
            placeholder="Ingresa tu nombre"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{marginTop: 2}}>
          <TextField
            label="Correo"
            type="email"
            placeholder="Ingresa un correo"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{marginTop: 2}}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Crea una contraseña"
            fullWidth
          />
        </Grid>
        <Grid container spacing={2} sx={{mb: 2, mt: 2}}>
          <Grid item xs={12} sm={12}>
            <Button variant="contained" fullWidth>
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Typography sx={{mr: 1}}>
            ¿Ya tienes una cuenta?
          </Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            inicia sesión
          </Link>
        </Grid>
      </Grid>
     </form> 
    </AuthLayout>
  )
}
