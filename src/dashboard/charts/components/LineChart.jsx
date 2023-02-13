import { Grid } from '@mui/material'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

export const LineChart = () => {

  const data = {
    labels: ['Mon', 'Tues', 'Wed', 'Mon'],
    datasets: [
        {
            label: 'Ventas de la semana',
            data: [6,3,9,1],
            backgroundColor: 'aqua',
            borderColor: 'black',
            pointBorderColor: 'aqua',
            fill: true,
            tension: 0.4,
        }
    ]
  }

  const options = {
    plugins: {
        legend: true,
    }
  }

  return (
    <Grid display="flex" justifyContent="center" alignItems="center" sx={{
        width: '100%',
        height: '150px'
    }}>
        <Line
            data={data}
            options={options}
        >

        </Line>
    </Grid>
  )
}
