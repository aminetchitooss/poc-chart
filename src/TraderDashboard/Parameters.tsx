import * as React from 'react';

export interface ParametersData {
  id: number;
  label: string;
  value: number;
  isActive?: boolean;
  color?: string;
}

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
interface ParameterCardState {
  isActive: boolean;
}

class ParameterCard extends React.Component<ParameterCardProps, ParameterCardState> {
  constructor(props: ParameterCardProps) {
    super(props);
    this.state = {
      isActive: !!props.data.isActive
    };
  }

  render() {
    return (
      <article className={this.state.isActive ? 'active' : undefined}>
        <h3>{this.props.data.label}</h3>
        <p style={{ color: this.props.data.color }}>{this.props.data.value}</p>
      </article>
    );
  }
}