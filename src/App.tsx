import './App.scss';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, Legend } from 'recharts';
import { format, parseISO, addDays } from 'date-fns';
import { CustomTooltip } from './components/CustomTooltip/CustomTooltip';
import { useState } from 'react';
import dash from './assets/dashboards.png';
import settings from './assets/settings.png';
import chat from './assets/chat.png';
import logout from './assets/logout.png';
import videoLink from './assets/mobile.mp4';

const pattern = [20, 40, 53, 63, 53, 63, 43, 53, 63, 53];
const flatPattern = [55, 56, 57, 58, 59, 60, 59, 58, 57, 56, 55];
const columns = 12;
const defaultDays = 59;

function generateData(dayNumber: number) {
  const data: any = [];
  let countPattern = 0;
  let countFlatPattern = 0;
  let varianceStep = 0;
  let offer = 0;

  for (let index = 0; index <= dayNumber; index++) {
    // if (countPattern == 0) countPattern++;
    // else if (countPattern < pattern.length) {
    //   offer = pattern[countPattern];
    //   countPattern++;
    // } else if (countFlatPattern < flatPattern.length) {
    //   offer = flatPattern.map(d => varianceStep + d)[countFlatPattern];
    //   countFlatPattern++;
    // } else {
    //   // if (varianceStep >= dayNumber / columns) {
    //   //   // debugger;
    //   // }
    //   countPattern = 1;
    //   // varianceStep += 2;
    //   countFlatPattern = 0;
    // }
    data.push({
      date: addDays(new Date('1/1/2022'), index).toISOString().substr(0, 10),
      vehicle: 0,
      // offer: Math.abs(Math.sin(index / dayNumber)) //+ Math.exp(index)
      // offer: 1 - Math.exp(-index / 10) * Math.cos(index) //+ Math.exp(index)
      offer:
        index < dayNumber / 3
          ? Math.sin(index / 100) //1 - Math.exp(-index / 10) * Math.cos(index)
          : index < (2 * dayNumber) / 3
          ? Math.sin(index / 100)
          : 1.86 - Math.sin((index - (2 * dayNumber) / 3 / 200) / 5)
    });
  }

  return data;
}

const data = [
  { date: '2022-01-01T04:00:00Z', offer: 0, vehicle: 50 },
  { date: '2022-02-01T04:00:00Z', offer: 20, vehicle: 33 },
  { date: '2022-03-01T04:00:00Z', offer: 40, vehicle: 80 },
  { date: '2022-04-01T04:00:00Z', offer: 53, vehicle: 58 },
  { date: '2022-05-01T04:00:00Z', offer: 63, vehicle: 18 },
  { date: '2022-06-01T04:00:00Z', offer: 53, vehicle: 28 },
  { date: '2022-07-01T04:00:00Z', offer: 63, vehicle: 38 },
  { date: '2022-08-01T04:00:00Z', offer: 43, vehicle: 88 },
  { date: '2022-09-01T04:00:00Z', offer: 53, vehicle: 58 },
  { date: '2022-10-01T04:00:00Z', offer: 63, vehicle: 68 },
  { date: '2022-11-01T04:00:00Z', offer: 53, vehicle: 78 },
  { date: '2022-12-01T04:00:00Z', offer: 55, vehicle: 28 }
];
const dataMobile = [
  { date: '2022-01-01T04:00:00Z', offer: 0, vehicle: 50 },
  { date: '2022-02-01T04:00:00Z', offer: 20, vehicle: 33 },
  { date: '2022-03-01T04:00:00Z', offer: 25, vehicle: 50 },
  { date: '2022-04-01T04:00:00Z', offer: 53, vehicle: 58 },
  { date: '2022-05-01T04:00:00Z', offer: 63, vehicle: 60 }
];

const initData = document.body.clientWidth < 700 ? dataMobile : data;
const ticksData = document.body.clientWidth < 700 ? ['Jan 22', 'Apr  23', 'Jul 23'] : undefined;
function App() {
  // const [graphData, setgraphData] = useState(generateData(defaultDays));
  const [graphData1, setgraphData1] = useState(initData);
  const [days, setdays] = useState(defaultDays);

  // function changeView() {
  //   setgraphData(generateData(days));
  // }

  // function changeDays(element: any) {
  //   const value = element.target.value;
  //   if (isNaN(value)) return;
  //   setdays(value);
  // }

  return (
    <div className="container">
      {/* <div className="form">
        <label htmlFor="days">Days</label>
        <input type="number" value={days} onChange={value => changeDays(value)} />
      </div>

      <button onClick={() => changeView()}>UpdateView</button> */}
      <nav className="desktop">
        <h1 className="logo">ALD</h1>
        <div className="link">
          <img src={dash} />
        </div>
        <div className="link">
          <img src={settings} />
        </div>
        <div className="link">
          <img src={chat} />
        </div>
        <div className="link logout">
          <img src={logout} />
        </div>
      </nav>
      <div className="content">
        <h2 className="desktop">DeskTop view</h2>
        <div className="frame">
          <ResponsiveContainer width="100%" height={500}>
            <AreaChart data={graphData1} margin={{ top: 0, left: -30, right: 0, bottom: 0 }}>
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
              <CartesianGrid stroke={CHART_COLORS.GridLine} strokeWidth={2} />

              <YAxis tick={AxisStyle} />

              <XAxis
                tick={AxisStyle}
                dataKey="date"
                tickLine={false}
                axisLine={true}
                tickFormatter={str => {
                  const date = new Date(str);
                  // debugger;
                  // console.log(date.getDate());
                  return format(date, 'MMM yy');
                  // if (date.getDate() % 2 === 0) {
                  // }
                  // return '';
                }}
                // ticks={ticksData}
              />

              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="top" height={36} />
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
        <h2 className="desktop">Phone view</h2>
        <div className="player desktop">
          <video width="320" height="240" controls>
            <source src={videoLink} />
          </video>
        </div>
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
