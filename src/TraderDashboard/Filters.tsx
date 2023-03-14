import * as React from 'react';

interface FilterProps {
  chooseFilter: (_id: number) => void;
}
export default class Filter extends React.Component<FilterProps, any> {
  constructor(props: FilterProps) {
    super(props);
  }

  selectFilter() {
    console.log('oiiii');
    this.props.chooseFilter(1);
  }
  render() {
    return (
      <div className="filterFrame">
        <div className="container">
          <button onClick={() => this.selectFilter()}>Filter</button>
        </div>
      </div>
    );
  }
}
