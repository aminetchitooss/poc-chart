import * as React from 'react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from 'recharts';
import { format } from 'date-fns';
import { TraderTooltip } from '../TraderToolTip';

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
  isError: boolean;
  Y_AxisMaxValue: number;
}
interface ChartState {
  isSmallScreen: boolean;
}
export interface ChartData {
  date: string;
  primary: number;
  secondary: number;
}
export default class Chart extends React.Component<ChartProps, ChartState> {
  constructor(props: ChartProps) {
    super(props);
    this.state = {
      isSmallScreen: window.matchMedia('(max-height: 700px)').matches
    };
  }

  render() {
    return (
      <div className={this.props.Y_AxisMaxValue.toString().length <= 2 ? 'chart underDoubleDigits' : 'chart'}>
        {this.props.data?.length > 0 ? (
          <ResponsiveContainer width="100%" height={this.state.isSmallScreen ? 260 : 410}>
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

              <XAxis
                tick={AxisStyle}
                dataKey="date"
                tickLine={false}
                axisLine={true}
                tickFormatter={str => {
                  const date = new Date(str);
                  return format(date, 'MMM');
                }}
              />

              <Tooltip cursor={{ stroke: '#444D58', strokeWidth: 2 }} content={<TraderTooltip />} />
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
        ) : this.props.isError ? (
          <div className="loadingChart">Error in fetching data</div>
        ) : this.props.data.length == 0 ? (
          <div className="loadingChart">No data Found</div>
        ) : (
          <div className="loadingChart">Fetching data ...</div>
        )}
      </div>
    );
  }
}
