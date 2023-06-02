import * as React from 'react';
import Chart, { CHART_COLORS, ChartData } from './Chart/Chart';
import Filter from './Filters';
import Legend, { LegendData } from './Legend';
import Parameters, { ParameterKeys, ParametersData, PARAMETER_LIST } from './Parameters';
import {
  CartMesure as ChartMesure,
  getReporting,
  getReporting_UC1,
  getReporting_UC2,
  getReporting_UC3,
  getReporting_UC4,
  getReporting_UC5
} from '../services/ReportingService';
import LandscapeToggle from './LandscapeToggle';
import * as screenfull from 'screenfull';

interface TraderDashboardState {
  reportingData: ChartMesure | null;
  legendData: LegendData[];
  chartData: ChartData[];
  paramData: ParametersData[];
  isPrimaryOnly: boolean;
  Y_AxisMaxValue: number;
  isDataError: boolean;
  isScreenFull: boolean;
}

export default class TraderDashboard extends React.Component<unknown, TraderDashboardState> {
  constructor() {
    super(undefined);
    this.state = {
      reportingData: null,
      legendData: [],
      chartData: [],
      paramData: [],
      isPrimaryOnly: false,
      isDataError: false,
      Y_AxisMaxValue: 0,
      isScreenFull: screenfull.isFullscreen
    };
    this.chooseFilter = this.chooseFilter.bind(this);
    this.setDataByParam = this.setDataByParam.bind(this);
    this.updateScreenfull = this.updateScreenfull.bind(this);
  }

  async componentDidMount(): Promise<void> {
    const data = await getReporting_UC1();
    this.updateData(data);
  }

  setChartData(reportingData: ChartMesure, primaryParameter: ParameterKeys, secondaryParameter?: ParameterKeys) {
    const paramData = PARAMETER_LIST.map(p => ({
      ...p,
      value: reportingData[p.key].reduce((a, c) => a + c.value, 0),
      isActive: false,
      color: undefined
    })).map(d => {
      if (primaryParameter == d.key) {
        return { ...d, isActive: true, color: CHART_COLORS.firstLineColor };
      } else if (secondaryParameter == d.key) {
        return { ...d, isActive: true, color: CHART_COLORS.secondLineColor };
      }
      return d;
    });

    let chartData: ChartData[] = reportingData[primaryParameter].map(d => ({ date: d.date, primary: d.value, secondary: 0 }));
    if (!!secondaryParameter) chartData = chartData.map((d, index) => ({ ...d, secondary: reportingData[secondaryParameter][index].value }));

    const keys: ParameterKeys[] = [primaryParameter, ...(!!secondaryParameter ? [secondaryParameter] : [])]; // Object.keys(reportingData) as ParameterKeys[];
    const Y_AxisMaxValue =
      keys.length === 1 && reportingData[keys[0]].length == 1
        ? reportingData[keys[0]][0].value * 2
        : Math.ceil(Math.max(...keys.reduce((a: number[], k) => [...a, ...reportingData[k].map(d => d.value)], [])) * 1.1);

    this.setState({
      legendData: paramData.filter(d => d.isActive),
      paramData,
      chartData,
      Y_AxisMaxValue,
      isPrimaryOnly: !secondaryParameter
    });
  }

  updateData(data: ChartMesure): void {
    try {
      this.setChartData(data, ParameterKeys.BIDS);
      this.setState({ reportingData: data });
    } catch (error) {
      this.setState({ isDataError: true, chartData: [] });
    }
  }

  setDataByParam(primaryParameter: ParameterKeys, secondaryParameter?: ParameterKeys) {
    if (this.state.reportingData) this.setChartData(this.state.reportingData, primaryParameter, secondaryParameter);
  }

  chooseFilter(id: number) {
    console.log('Root Filter', id);
  }

  updateScreenfull(isScreenFull: boolean) {
    console.log('Root toggle landscape', isScreenFull);
    this.setState({ isScreenFull });
  }

  render() {
    return (
      <div className="traderDash">
        <Filter chooseFilter={this.chooseFilter} />
        <div className={`container chartFrame ${this.state.isScreenFull ? 'fullscreen' : ''}`}>
          <LandscapeToggle handleScreenChange={this.updateScreenfull} />
          <h3 className="legendText">{this.state.legendData.map(d => d.label).join(' - ')} </h3>
          <Legend data={this.state.legendData} />
          <Parameters data={this.state.paramData} chooseParam={this.setDataByParam} />
          <Chart
            Y_AxisMaxValue={this.state.Y_AxisMaxValue}
            isError={this.state.isDataError}
            data={this.state.chartData}
            isPrimaryOnly={this.state.isPrimaryOnly}
          />
        </div>
      </div>
    );
  }
}
