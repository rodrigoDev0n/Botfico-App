import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from 'chart.js'

ChartJS.register (
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

export const BankLineChart = () => {

  const data = {
    labels: ['Feb 12', 'Feb 13', 'Feb 14', 'Feb 15', 'Feb 16', 'Feb 17'],
    datasets: [{
        label: 'Bank balance',
        data: [8,7,8,7,6,4,5,8],
    }]
  }
  
  const options = {}

  return (
    <Line data={data} options={options}></Line>
  )
}
