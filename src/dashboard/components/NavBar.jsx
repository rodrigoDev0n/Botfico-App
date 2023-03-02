import { useTheme } from "@mui/material"
import { Grid } from "@mui/material"
import { DarkModeButton } from "../../components/DarkModeButton"
import { tokens } from "../../theme/botficoAppTheme"

export const NavBar = ({drawerWidth}) => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Grid container
      position="fixed"
      sx={{
        display: 'flex',
        alignContent: 'space-between',
        backgroundColor: colors.blue.default,
        height: '45px',
        width: { sm: `calc(100% - ${ drawerWidth }px)` },
        ml: { sm: `${drawerWidth}` }
      }}
    >
      <Grid item
        sx={{
          padding: 2,
          ml: '94%',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <DarkModeButton />
      </Grid>
    </Grid>
  )
}
