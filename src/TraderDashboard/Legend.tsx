import * as React from 'react';
import { ParametersData } from './Parameters';

export type LegendData = Omit<ParametersData, 'isActive' | 'value' | 'id'>;

interface LegendProps {
  data: LegendData[];
}

export default class Legend extends React.Component<LegendProps, any> {
  constructor(props: LegendProps) {
    super(props);
  }

  render() {
    return (
      <div className="legendFrame">
        {this.props.data &&
          this.props.data.map((d, index) => (
            <div className="customTooltip__data" style={{ color: d.color }} key={index.toString()}>
              {d.label}
            </div>
          ))}
      </div>
    );
  }
}
