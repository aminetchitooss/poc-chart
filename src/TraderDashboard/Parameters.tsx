import * as React from 'react';

export enum ParameterKeys {
  BIDS = 'bids',
  LOT_BIDDED = 'lotsBidded',
  ORDERS_WON = 'ordersWon',
  ORDERS_LOST = 'ordersLost'
}
export interface ParametersData {
  key: ParameterKeys;
  label: string;
  value: number;
  isActive?: boolean;
  color?: string;
}

export const defaultParameters: ParametersData[] = [
  // { key: ParameterKeys.ORDERS_LOST, label: 'Vehicles lost', value: 0 },
  // { key: ParameterKeys.ORDERS_WON, label: 'Vehicles awarded', value: 0 },
  // { key: ParameterKeys.LOT_BIDDED, label: 'Vehicles offered', value: 0 },
  { key: ParameterKeys.BIDS, label: 'Offers sent', value: 0 }
];

interface ParametersProps {
  data: ParametersData[];
  chooseParam: (_id: number) => void;
}
export default class Parameters extends React.Component<ParametersProps, any> {
  constructor(props: ParametersProps) {
    super(props);
  }

  selectParam(id: number) {
    this.props.chooseParam(id);
  }

  render() {
    return <div className="ParamsFrame">{this.props.data && this.props.data.map((item, i) => <ParameterCard key={i} data={item} />)}</div>;
  }
}

interface ParameterCardProps {
  data: ParametersData;
}
interface ParameterCardState {}

class ParameterCard extends React.Component<ParameterCardProps, ParameterCardState> {
  constructor(props: ParameterCardProps) {
    super(props);
  }

  render() {
    return (
      <article className={this.props.data.isActive ? 'active' : undefined}>
        <h3>{this.props.data.label}</h3>
        <p style={{ color: this.props.data.color }}>{this.props.data.value}</p>
      </article>
    );
  }
}
