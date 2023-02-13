import { Grid } from "@mui/material"
import { Box } from "@mui/system"

export const VentasView = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        width: '100%',
        height: {
          xs: '100%',
          sm: '95%',
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: '300px',
          }}
        >
          <Grid item className="box-shadow animated_view_component"
          ></Grid>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  )
}
