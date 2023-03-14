import * as React from 'react';

export enum SCALE_CHOICE {
  MONTHLY = 'MONTH',
  WEEKLY = 'WEEK',
  DAILY = 'DAY'
}

interface ScaleProps {
  selectScale: (choice: SCALE_CHOICE) => void;
}

export default class Scale extends React.Component<ScaleProps, any> {
  constructor(props: ScaleProps) {
    super(props);
  }

  changeScale(choice: React.ChangeEvent<HTMLSelectElement>) {
    const tt: SCALE_CHOICE = choice.target.value as SCALE_CHOICE;
    this.props.selectScale(tt);
  }

  render() {
    return (
      <select aria-label="Scale" className="scaleFrame" onChange={d => this.changeScale(d)}>
        <option value={SCALE_CHOICE.MONTHLY}>Monthly</option>
        <option value={SCALE_CHOICE.WEEKLY}>Weekly</option>
        <option value={SCALE_CHOICE.DAILY}>Daily</option>
      </select>
    );
  }
}
