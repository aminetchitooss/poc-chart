import * as React from 'react';
import { TooltipProps } from 'recharts';
import { TooltipState } from 'recharts';
import { format, parseISO } from 'date-fns';

export interface ToolTipProps extends TooltipProps<number, string> {}
export interface ToolTipState {}

export class TraderTooltip extends React.Component<TooltipProps, TooltipState> {
  render(): false | JSX.Element {
    if (this.props.active && this.props.payload && this.props.payload.length) {
      return (
        <div className="customTooltip">
          <p className="customTooltip__label">{format(parseISO(this.props.label), 'dd MMMM yyyy')}</p>
          {this.props.payload &&
            this.props.payload.map((data, index) => (
              <div className="customTooltip__data" style={{ color: data.color }} key={index.toString()}>
                {data.value}
              </div>
            ))}
        </div>
      );
    }
    return null;
  }
}
