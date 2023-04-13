import * as React from 'react';
import Chart, { ChartData } from './Chart/Chart';
import Filter from './Filters';
import Legend, { LegendData } from './Legend';
import Parameters, { ParameterKeys, ParametersData, defaultParameters } from './Parameters';
import Scale, { SCALE_CHOICE } from './Scale';
import { CartMesure, getReporting } from '../services/ReportingService';

interface TraderDashboardState {
  reportingData: CartMesure | null;
  legendData: LegendData[];
  chartData: ChartData[];
  paramData: ParametersData[];
  isPrimaryOnly: boolean;
}

export default class TraderDashboard extends React.Component<any, TraderDashboardState> {
  constructor() {
    super(undefined);
    this.state = {
      reportingData: null,
      legendData: [],
      chartData: [],
      paramData: [],
      isPrimaryOnly: false
    };
  }

  async componentDidMount(): Promise<void> {
    const data = await getReporting();
    this.setState({ reportingData: data });
    this.setChartData(data, ParameterKeys.ORDERS_LOST, ParameterKeys.ORDERS_WON);
  }

  setChartData(reportingData: CartMesure, primaryParameter: ParameterKeys, secondaryParameter?: ParameterKeys) {
    const paramData = defaultParameters
      .map(d => ({
        ...d,
        value: reportingData[d.key].reduce((a, c) => a + c.value, 0),
        isActive: false,
        color: undefined
      }))
      .map(d => {
        if (primaryParameter == d.key) {
          return { ...d, isActive: true, color: '#0BCBFB' };
        } else if (secondaryParameter == d.key) {
          return { ...d, isActive: true, color: '#644AF3' };
        }
        return d;
      });

    let chartData: ChartData[] = reportingData[primaryParameter].map(d => ({ date: d.date, primary: d.value, secondary: 0 }));
    if (!!secondaryParameter) chartData = chartData.map((d, index) => ({ ...d, secondary: reportingData[secondaryParameter][index].value }));

    console.log(chartData);
    this.setState({
      legendData: paramData.filter(d => d.isActive),
      paramData,
      chartData,
      isPrimaryOnly: !secondaryParameter
    });
  }

  getDataByParam(id: number) {
    console.log('Root', id);
  }

  selectScale(scale: SCALE_CHOICE) {
    console.log('Root scale', scale);
  }

  chooseFilter(id: number) {
    console.log('Root Filter', id);
  }

  render() {
    return (
      <div className="traderDash">
        <Filter chooseFilter={this.chooseFilter} />
        <div className="container chartFrame">
          <h3 className="legendText">{this.state.legendData.map(d => d.label).join(' - ')} </h3>
          <Legend data={this.state.legendData} />
          <Scale selectScale={this.selectScale} />
          <Parameters data={this.state.paramData} chooseParam={this.getDataByParam} />
          <Chart data={this.state.chartData} isPrimaryOnly={this.state.isPrimaryOnly} />
        </div>
      </div>
    );
  }
}
