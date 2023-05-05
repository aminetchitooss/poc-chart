import * as React from 'react';
import { CHART_COLORS } from './Chart/Chart';

export enum ParameterKeys {
  BIDS = 'bids',
  LOT_BIDDED = 'lotsBidded',
  ORDERS_WON = 'ordersWon',
  ORDERS_LOST = 'ordersLost'
}

export const PARAMETER_LIST: ParametersData[] = [
  { key: ParameterKeys.ORDERS_LOST, label: 'Vehicles lost', value: 0 },
  { key: ParameterKeys.ORDERS_WON, label: 'Vehicles awarded', value: 0 },
  { key: ParameterKeys.LOT_BIDDED, label: 'Vehicles offered', value: 0 },
  { key: ParameterKeys.BIDS, label: 'Offers sent', value: 0 }
];

export interface ParametersData {
  key: ParameterKeys;
  label: string;
  value: number;
  isActive?: boolean;
  color?: string;
}

interface ParametersProps {
  data: ParametersData[];
  chooseParam: (primaryParameter: ParameterKeys, secondaryParameter?: ParameterKeys) => void;
}

export default class Parameters extends React.Component<ParametersProps, unknown> {
  constructor(props: ParametersProps) {
    super(props);
  }

  selectParam(selectedIndex: number) {
    const selectedParam: ParametersData = this.props.data[selectedIndex];
    const currentActiveParams = this.props.data.filter(d => d.isActive);

    if (selectedParam.key === ParameterKeys.BIDS) return this.props.chooseParam(ParameterKeys.BIDS);

    if (currentActiveParams.length === 1) {
      if (currentActiveParams[0].key === selectedParam.key) return;
      if (currentActiveParams[0].key === ParameterKeys.BIDS) return this.props.chooseParam(selectedParam.key);
      return this.props.chooseParam(currentActiveParams[0].key, selectedParam.key);
    }

    if (currentActiveParams.some(p => p.key === selectedParam.key)) {
      if (selectedParam.color === CHART_COLORS.firstLineColor) {
        const currentSecondaryChoice = currentActiveParams.find(p => p.key !== selectedParam.key);
        if (currentSecondaryChoice) return this.props.chooseParam(currentSecondaryChoice.key);
      }
      const currentPrimaryChoice = currentActiveParams.find(p => p.key !== selectedParam.key);
      if (currentPrimaryChoice) return this.props.chooseParam(currentPrimaryChoice.key);
    }

    const currentPrimaryChoice = currentActiveParams.find(p => p.color === CHART_COLORS.firstLineColor);
    if (currentPrimaryChoice) return this.props.chooseParam(currentPrimaryChoice.key, selectedParam.key);
  }

  render() {
    return (
      <div className="ParamsFrame">
        {this.props.data &&
          this.props.data.map((item, index) => {
            return (
              <article key={index} className={item.isActive ? 'active' : undefined} onClick={() => this.selectParam(index)}>
                <h3>{item.label}</h3>
                <p style={{ color: item.color }}>{item.value}</p>
              </article>
            );
          })}
      </div>
    );
  }
}
