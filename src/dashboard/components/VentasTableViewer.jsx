import { ArrowDropDown } from '@mui/icons-material'
import { Button, Divider, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import { columns, rows } from '../helpers/exampleDataTable'

export const VentasTableViewer = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Grid item sx={{
        p: 2,
        alignItems: 'center',
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button variant='outlined' sx={{
          color: 'textcolor.main',
          borderColor: 'textcolor.main'
        }}>
           Batch functions
           <ArrowDropDown />
        </Button>
        <Button variant='contained' sx={{
          backgroundColor: 'green',
          color: '#fff'
        }}>
          NEW INVOICE
        </Button>
      </Grid>
      <Divider />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
