import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { CustomTooltip } from '../../components/CustomTooltip/CustomTooltip';
import './RechartsExample.scss';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

enum CHART_COLORS {
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

export default function RechartsExample() {
  return (
    <>
      <h1>second</h1>

      <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={CHART_COLORS.firstColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={CHART_COLORS.firstColor} stopOpacity={0} />
          </linearGradient> */}
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor={CHART_COLORS.secondLineColor} stopOpacity={0.8} />
            <stop offset="100%" stopColor={CHART_COLORS.secondLineColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis tick={AxisStyle} dataKey="name" />
        <YAxis tick={AxisStyle} />
        <CartesianGrid stroke={CHART_COLORS.GridLine} strokeWidth={2} />
        <Tooltip content={<CustomTooltip />} />
        {/* <Area type="monotone" dataKey="uv" stroke={CHART_COLORS.firstColor} fillOpacity={0.2} fill="url(#colorUv)" /> */}
        <Area type="monotone" dataKey="pv" strokeWidth={2} stroke={CHART_COLORS.secondLineColor} fillOpacity={0.2} fill="url(#colorPv)" />
      </AreaChart>
    </>
  );
}
