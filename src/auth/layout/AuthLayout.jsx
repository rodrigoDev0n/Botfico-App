import {chipClasses, Divider, Grid, Typography } from "@mui/material"
import { color } from "@mui/system"

export const AuthLayout = ({children, title=''}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >
      <Grid
        item
        className="box-shadow animated_container"
        xs={3}
        sx={{
          width: {md: 450},
          backgroundColor: '#0c416b',
          padding: 3,
          borderRadius: 2,
        }}
      >
       <Grid container direction="row" alignItems="center">
        <Grid container sx={{width: 5, height: 50, backgroundColor: '#fff', borderRadius: 10}}>
        </Grid>
        <Typography variant="h2" sx={{fontWeight: 'bold', color: '#fff'}}>
          {title}
        </Typography>
       </Grid>
        <Divider sx={{marginTop: 1, backgroundColor: 'primary.main'}} />
          {children}
      </Grid>
    </Grid>
  )
}
