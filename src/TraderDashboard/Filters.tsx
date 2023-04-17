import * as React from 'react';

export type PropsWithChildren<P> = P & { children?: React.ReactNode };
interface FilterProps {
  chooseFilter: (_id: number) => void;
}
export default class Filter extends React.Component<PropsWithChildren<FilterProps>, any> {
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
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
