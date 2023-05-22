import * as React from 'react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from 'recharts';
import { format, parseISO, parse } from 'date-fns';
import { TooltipProps } from 'recharts';

export const CHART_COLORS = {
  firstLineColor: '#0BCBFB',
  secondLineColor: '#644AF3',
  GridLine: '#EDF2F8',
  AxisText: '#6D7988'
};

const AxisStyle = {
  fill: CHART_COLORS.AxisText,
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '14px'
};


interface ChartProps {
  data: ChartData[];
  isPrimaryOnly: boolean;
  Y_AxisMaxValue: number;
  axisFormatter: AxisFormatter;
}

export interface ChartData {
  date: string;
  primary: number;
  secondary: number;
}

export default class Chart extends React.Component<ChartProps, unknown> {
  constructor(props: ChartProps) {
    super(props);
  }

  render() {
    return (
      <div className="chart">
        {this.props.data.length > 0 ? (
          <ResponsiveContainer width="100%" height={390}>
            <AreaChart data={this.props.data} margin={{ top: 0, left: -10, right: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="firstColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="50%" stopColor={CHART_COLORS.firstLineColor} stopOpacity={0.8} />
                  <stop offset="100%" stopColor={CHART_COLORS.firstLineColor} stopOpacity={0} />
                </linearGradient>
                {!this.props.isPrimaryOnly && (
                  <linearGradient id="secondColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor={CHART_COLORS.secondLineColor} stopOpacity={0.8} />
                    <stop offset="100%" stopColor={CHART_COLORS.secondLineColor} stopOpacity={0} />
                  </linearGradient>
                )}
              </defs>
              <CartesianGrid stroke={CHART_COLORS.GridLine} strokeWidth={2} />

              <YAxis tick={AxisStyle} domain={[0, this.props.Y_AxisMaxValue]} />

              {/* UC2 */}
              <XAxis
                tick={AxisStyle}
                dataKey="date"
                tickLine={false}
                axisLine={true}
                interval={'preserveStartEnd'}
                minTickGap={this.props.axisFormatter.minTickGap}
                allowDuplicatedCategory={false}
                tickFormatter={
                  str => {
                    const formater = this.props.axisFormatter.formatFunction(str, 0);
                    const label =  format(new Date(str), formater);
                    if(label.indexOf(' ')!== -1) {
                      return label.split(' ')[0] + '<br>' + label.split(' ')[1];
                    }
                    return label;
                  }}
              /> 
  
              {/* <Tooltip /> */}
              <Tooltip cursor={{ stroke: '#444D58', strokeWidth: 2 }} content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="primary"
                strokeWidth={2}
                stroke={CHART_COLORS.firstLineColor}
                fillOpacity={0.2}
                fill="url(#firstColor)"
                activeDot={{ r: 7 }}
              />
              {!this.props.isPrimaryOnly && (
                <Area
                  type="monotone"
                  dataKey="secondary"
                  strokeWidth={2}
                  stroke={CHART_COLORS.secondLineColor}
                  fillOpacity={0.2}
                  fill="url(#secondColor)"
                  activeDot={{ r: 7 }}
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="loadingChart">Fetching data ...</div>
        )}
      </div>
    );
  }
}

function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltip">
        <p className="customTooltip__label">{format(parseISO(label), 'd, MMMM yyyy')}</p>
        {payload &&
          payload.map((data, index) => (
            <div className="customTooltip__data" style={{ color: data.color }} key={index.toString()}>
              {data.value}
            </div>
          ))}
      </div>
    );
  }
  return null;
}
