import * as React from 'react';

interface FilterProps {
  chooseFilter: (_id: number) => void;
}
export default class Filter extends React.Component<FilterProps, any> {
  constructor(props: FilterProps) {
    super(props);
  }

  selectFilter() {
    this.props.chooseFilter(1);
  }
  render() {
    return (
      <div className="filterFrame">
        <div className="container">
          <div className="filterFrame__sub" onClick={() => this.selectFilter()}>
            ----- Filter area -----
          </div>
        </div>
      </div>
    );
  }
}
