import * as React from 'react';
import Chart from './Chart/Chart';
import Filter from './Filters';
import Legend, { LegendData } from './Legend';
import Parameters from './Parameters';
import Scale, { SCALE_CHOICE } from './Scale';

interface TraderDashboardState {
  legendData: LegendData[];
}

export default class TraderDashboard extends React.Component<any, TraderDashboardState> {
  constructor() {
    super(undefined);
    this.state = {
      legendData: [
        { label: 'Vehicles lost', color: '#644AF3' },
        { label: 'Vehicles awarded', color: '#0BCBFB' }
      ]
    };
  }

  componentDidMount(): void {}

  getDataByParam(id: number) {
    console.log('Parent', id);
  }

  selectScale(scale: SCALE_CHOICE) {
    console.log('Parent scale', scale);
  }

  chooseFilter(id: number) {
    console.log('Parent Filter', id);
  }

  render() {
    return (
      <div className="traderDash">
        <Filter chooseFilter={this.chooseFilter} />
        <div className="container chartFrame">
          <h3 className="legendText">{this.state.legendData.map(d => d.label).join(' - ')} </h3>
          <Legend data={this.state.legendData} />
          <Scale selectScale={this.selectScale} />
          <Parameters chooseParam={this.getDataByParam} />
          <Chart />
        </div>
      </div>
    );
  }
}
