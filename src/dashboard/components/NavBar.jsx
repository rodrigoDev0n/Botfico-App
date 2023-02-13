import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({drawerWidth}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${ drawerWidth }px)` },
        ml: { sm: `${drawerWidth}` }
      }}
    >
      <Toolbar>
       <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
       >
        <MenuOutlined />
       </IconButton> 
       <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
       >
       </Grid>
      </Toolbar>
    </AppBar>
  )
}
