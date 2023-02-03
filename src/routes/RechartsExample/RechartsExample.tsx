import { useState } from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { CustomTooltip } from '../../components/CustomTooltip/CustomTooltip';
import './RechartsExample.scss';
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const data = [
  { date: '2022-01-01T04:00:00Z', offer: 0, vehicle: 50 },
  { date: '2022-02-01T04:00:00Z', offer: 20, vehicle: 33 },
  { date: '2022-03-01T04:00:00Z', offer: 20, vehicle: 80 },
  { date: '2022-04-01T04:00:00Z', offer: 83, vehicle: 58 },
  { date: '2022-05-01T04:00:00Z', offer: 83, vehicle: 58 },
  { date: '2022-06-01T04:00:00Z', offer: 83, vehicle: 58 },
  { date: '2022-07-01T04:00:00Z', offer: 83, vehicle: 58 },
  { date: '2022-08-01T04:00:00Z', offer: 23, vehicle: 88 },
  { date: '2022-09-01T04:00:00Z', offer: 33, vehicle: 58 },
  { date: '2022-10-01T04:00:00Z', offer: 93, vehicle: 68 },
  { date: '2022-11-01T04:00:00Z', offer: 13, vehicle: 78 },
  { date: '2022-12-01T04:00:00Z', offer: 23, vehicle: 28 }
];

function trasnformIt(data: any) {
  return data.map((d: any) => {
    const [year, month, day] = d.date.split('T')[0].split('-');
    return {
      ...d,
      toolTipLabel: `${day} ${monthNames[Number(month) - 1]} ${year}`,
      name: `${monthNames[Number(month) - 1]?.substring(0, 3)} ${year?.substring(2, 4)}`
    };
  });
}
export const transformedData = trasnformIt(data);
export enum CHART_COLORS {
  firstLineColor = '#0BCBFB',
  secondLineColor = '#644AF3',
  GridLine = '#EDF2F8',
  AxisText = '#6D7988'
}
const AxisStyle = {
  fill: CHART_COLORS.AxisText,
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '13px'
};

export default function RechartsExample() {
  const [graphData, setgraphData] = useState(transformedData);
  function changeView(view: 'Daily' | 'Weekly' | 'Monthly') {
    if (view == 'Daily') {
      setgraphData(
        trasnformIt([
          { date: '2022-01-01T04:00:00Z', offer: 0, vehicle: 50 },
          { date: '2022-02-01T04:00:00Z', offer: 20, vehicle: 33 },
          { date: '2022-03-01T04:00:00Z', offer: 20, vehicle: 80 },
          { date: '2022-04-01T04:00:00Z', offer: 57, vehicle: 39 },
          { date: '2022-05-01T04:00:00Z', offer: 38, vehicle: 48 },
          { date: '2022-06-01T04:00:00Z', offer: 83, vehicle: 58 }
        ])
      );
    } else if (view == 'Weekly') {
      setgraphData(
        trasnformIt([
          { date: '2022-01-01T04:00:00Z', offer: 0, vehicle: 50 },
          { date: '2022-02-01T04:00:00Z', offer: 20, vehicle: 33 },
          { date: '2022-03-01T04:00:00Z', offer: 20, vehicle: 80 },
          { date: '2022-04-01T04:00:00Z', offer: 57, vehicle: 39 },
          { date: '2022-05-01T04:00:00Z', offer: 38, vehicle: 48 },
          { date: '2022-06-01T04:00:00Z', offer: 83, vehicle: 58 }
        ])
      );
    } else setgraphData(transformedData);
  }

  return (
    <>
      {/* <button onClick={() => changeView('Daily')}>Daily</button>
      <button onClick={() => changeView('Weekly')}>Weekly</button>
      <button onClick={() => changeView('Monthly')}>Monthly</button> */}

      <AreaChart width={900} height={380} data={graphData}>
        <defs>
          <linearGradient id="firstColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor={CHART_COLORS.firstLineColor} stopOpacity={0.8} />
            <stop offset="100%" stopColor={CHART_COLORS.firstLineColor} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="secondColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor={CHART_COLORS.secondLineColor} stopOpacity={0.8} />
            <stop offset="100%" stopColor={CHART_COLORS.secondLineColor} stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis tickLine={false} tick={AxisStyle} dataKey="name" />
        <YAxis tickCount={10} tick={AxisStyle} />

        <CartesianGrid stroke={CHART_COLORS.GridLine} strokeWidth={2} />
        <Tooltip content={<CustomTooltip />} />

        <Area type="monotone" dataKey="offer" strokeWidth={2} stroke={CHART_COLORS.firstLineColor} fillOpacity={0.2} fill="url(#firstColor)" />
        <Area type="monotone" dataKey="vehicle" strokeWidth={2} stroke={CHART_COLORS.secondLineColor} fillOpacity={0.2} fill="url(#secondColor)" />
      </AreaChart>
    </>
  );
}
