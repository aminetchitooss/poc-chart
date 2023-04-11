import * as React from 'react';
import Chart from './Chart/Chart';
import Filter from './Filters';
import Legend, { LegendData } from './Legend';
import Parameters, { ParametersData } from './Parameters';
import Scale, { SCALE_CHOICE } from './Scale';
import { getReporting } from '../services/ReportingService';

interface TraderDashboardState {
  legendData: LegendData[];
}

export default class TraderDashboard extends React.Component<any, TraderDashboardState> {
  data: ParametersData[] = [
    { id: 1, label: 'Vehicles lost', value: 137, isActive: true, color: '#0BCBFB' },
    { id: 2, label: 'Vehicles awarded', value: 47, isActive: true, color: '#644AF3' },
    { id: 3, label: 'Vehicles offered', value: 184 },
    { id: 4, label: 'Offers sent', value: 259 }
  ];
  constructor() {
    super(undefined);
    this.state = {
      legendData: this.data.filter(d => d.isActive)
    };
  }

  async componentDidMount(): Promise<void> {
    const data = await getReporting();
    console.log(data);
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
          <Parameters data={this.data} chooseParam={this.getDataByParam} />
          <Chart />
        </div>
      </div>
    );
  }
}
