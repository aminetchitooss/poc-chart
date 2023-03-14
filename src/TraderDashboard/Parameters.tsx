import * as React from 'react';

interface ParametersProps {
  chooseParam: (_id: number) => void;
}
export default class Parameters extends React.Component<ParametersProps, any> {
  constructor(props: ParametersProps) {
    super(props);
  }

  select(id: number) {
    console.log('oiiii');
    this.props.chooseParam(id);
  }
  render() {
    return (
      <div className="ParamsFrame">
        <button onClick={() => this.select(1)}>Choose 1</button>
        <button onClick={() => this.select(2)}>Choose 2</button>
        <button onClick={() => this.select(3)}>Choose 3</button>
        <button onClick={() => this.select(4)}>Choose 4</button>
      </div>
    );
  }
}
