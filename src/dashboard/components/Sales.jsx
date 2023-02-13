import { ArrowDropDown } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"
import { LineChart } from "../charts/components/LineChart"
import { PieChart } from "../charts/components/PieChart"

export const Sales = () => {
    return (
        <>
            <Grid item display="flex" justifyContent="space-between" alignItems="center" sx={{ p: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Sales
                </Typography>
                <Grid display="flex" justifyContent="space-around" alignItems="center">
                    <Typography variant="p" sx={{ color: '#b3b2b3', fontWeight: 'bold' }}>
                        Last month
                    </Typography>
                    <ArrowDropDown sx={{color: '#b3b2b3'}} />
                </Grid>
            </Grid>
            <Grid>
                <Typography variant="h5" sx={{ pl: 2, mt: 1, fontWeight: 'bold', fontSize: '15px' }}>
                    $6.666.666
                </Typography>
                <Typography variant="p" sx={{ color: '#aba4ac', pl: 2, fontWeight: 'bold', fontSize: '11px' }}>
                    LAST MONTH
                </Typography>
            </Grid>
            <Grid>
                <LineChart />
            </Grid>
        </>
    )
}
