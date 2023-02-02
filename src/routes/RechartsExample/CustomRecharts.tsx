import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea, ResponsiveContainer } from 'recharts';

const initialData = [
  { name: 1, cost: 4.11, impression: 100 },
  { name: 2, cost: 2.39, impression: 120 },
  { name: 3, cost: 1.37, impression: 150 },
  { name: 4, cost: 1.16, impression: 180 },
  { name: 5, cost: 2.29, impression: 200 },
  { name: 6, cost: 3, impression: 499 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 2.52, impression: 100 },
  { name: 15, cost: 2, impression: 300 },
  { name: 16, cost: 9, impression: 400 },
  { name: 17, cost: 3, impression: 200 },
  { name: 18, cost: 2, impression: 50 },
  { name: 19, cost: 3, impression: 100 },
  { name: 20, cost: 7, impression: 100 }
];

const initialState = {
  data: initialData,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  top2: 'dataMax+20',
  bottom2: 'dataMin-20',
  animation: true
};

const data: any = initialData;
export default function CustomRecharts() {
  return (
    <div className="highlight-bar-charts" style={{ userSelect: 'none', width: '100%' }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" type="number" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="cost" stroke="#8884d8" animationDuration={300} />
        </LineChart>
      </ResponsiveContainer>

      <p>oiiiiii</p>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickCount={3} type="number" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="cost" stroke="#8884d8" />
          {/* <Line type="monotone" dataKey="impression" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>

      {/* <ResponsiveContainer width="100%" height={400}>
          <LineChart width={800} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis allowDataOverflow dataKey="name" />
            <YAxis allowDataOverflow domain={[bottom, top]} type="number" />
            <Tooltip />
            <Line type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
          </LineChart>
        </ResponsiveContainer> */}
    </div>
  );
}
