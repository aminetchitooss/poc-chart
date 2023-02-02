import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CHART_COLORS, transformedData } from '../RechartsExample/RechartsExample';

import './ChartJsExample.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const options = {
  tension: 0.4,
  responsive: true,
  interaction: {
    intersect: false
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      fill: true,
      label: 'Offer',
      data: [0, 20, 20, 57, 38, 83],
      borderColor: CHART_COLORS.firstLineColor,
      backgroundColor: CHART_COLORS.firstLineColor
    },
    {
      fill: true,
      label: 'Vehicle 2',
      data: [50, 33, 80, 39, 48, 58],
      borderColor: CHART_COLORS.secondLineColor,
      backgroundColor: CHART_COLORS.secondLineColor
    }
  ]
};

export default function ChartJsExample() {
  return (
    <>
      <p>ChartJsExample</p>
      <Line options={options} data={data} />
    </>
  );
}
