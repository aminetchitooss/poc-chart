import * as React from 'react';

interface LegendProps {
  data: LegendData[];
}

export interface LegendData {
  label: string;
  color: string;
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
            <div className="tooltip__data" style={{ color: d.color }} key={index.toString()}>
              {d.label}
            </div>
          ))}
      </div>
    );
  }
}
