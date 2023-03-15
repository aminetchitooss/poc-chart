import * as React from 'react';

export enum SCALE_CHOICE {
  MONTHLY = 'Monthly',
  WEEKLY = 'Weekly',
  DAILY = 'Daily'
}

interface ScaleProps {
  selectScale: (choice: SCALE_CHOICE) => void;
}
interface ScaleState {
  isOpen: boolean;
  value: SCALE_CHOICE;
}

export default class Scale extends React.Component<ScaleProps, ScaleState> {
  constructor(props: ScaleProps) {
    super(props);
    this.state = {
      isOpen: false,
      value: SCALE_CHOICE.MONTHLY
    };
  }

  changeScale(choice: SCALE_CHOICE) {
    this.props.selectScale(choice);
    this.setState({ value: choice, isOpen: false });
  }

  toggleScale() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="scale" onClick={() => this.toggleScale()}>
        <div className={this.state.isOpen ? 'scaleFrame' : 'closed scaleFrame'}>{this.state.value}</div>
        {this.state.isOpen && (
          <div className="scaleList">
            <span className="emptySpan"></span>
            <span onClick={() => this.changeScale(SCALE_CHOICE.MONTHLY)}>{SCALE_CHOICE.MONTHLY}</span>
            <span onClick={() => this.changeScale(SCALE_CHOICE.WEEKLY)}>{SCALE_CHOICE.WEEKLY}</span>
            <span onClick={() => this.changeScale(SCALE_CHOICE.DAILY)}>{SCALE_CHOICE.DAILY}</span>
          </div>
        )}
      </div>
    );
  }
}
