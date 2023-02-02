import './App.scss';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
import { CustomTooltip } from './components/CustomTooltip/CustomTooltip';
import { useState } from 'react';

function generateData(dayNumber: number) {
  const data: any = [];
  for (let num = dayNumber; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      offer: Math.round(10 * Math.random()),
      vehicle: Math.round(10 * Math.random())
    });
  }
  return data;
}

const defaultDays = 10;
function App() {
  const [graphData, setgraphData] = useState(generateData(defaultDays));
  const [days, setdays] = useState(defaultDays);

  function changeView() {
    setgraphData(generateData(days));
  }

  function changeDays(element: any) {
    const value = element.target.value;
    if (isNaN(value)) return;
    setdays(value);
  }

  return (
    <div className="container">
      <div className="form">
        <label htmlFor="days">Days</label>
        <input type="number" value={days} onChange={value => changeDays(value)} />
      </div>

      <button onClick={() => changeView()}>UpdateView</button>

      <div className="frame">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={graphData}>
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
            <YAxis tick={AxisStyle} />

            <XAxis
              tick={AxisStyle}
              dataKey="date"
              // tickLine={false}
              tickFormatter={str => {
                const date = parseISO(str);
                // debugger;
                if (date.getDate() % 2 === 0) {
                  return format(date, 'MMM, d');
                }
                return '';
              }}
            />

            <CartesianGrid stroke={CHART_COLORS.GridLine} strokeWidth={2} />
            <Tooltip content={<CustomTooltip />} />

            <Area type="monotone" dataKey="offer" strokeWidth={2} stroke={CHART_COLORS.firstLineColor} fillOpacity={0.2} fill="url(#firstColor)" />
            <Area
              type="monotone"
              dataKey="vehicle"
              strokeWidth={2}
              stroke={CHART_COLORS.secondLineColor}
              fillOpacity={0.2}
              fill="url(#secondColor)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;

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
  fontSize: '14px'
};
