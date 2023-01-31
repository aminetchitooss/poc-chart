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

const labels = transformedData.map(d => d.name);

// ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const values = transformedData.map(d => d.offer);
const values2 = transformedData.map(d => d.vehicle);
// [120, 300, 50, 400, 700, 600, 850];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 1',
      data: values,
      borderColor: CHART_COLORS.firstLineColor,
      backgroundColor: CHART_COLORS.firstLineColor
    },
    {
      fill: true,
      label: 'Dataset 2',
      data: values2,
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
