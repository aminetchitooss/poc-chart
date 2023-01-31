import { TooltipProps } from 'recharts';
import './CustomTooltip.scss';

export const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    // debugger;
    return (
      <div className="tooltip">
        <p className="tooltip__label">{payload[0].payload.toolTipLabel}</p>
        {payload &&
          payload.map((data, index) => (
            <div className="tooltip__data" style={{ color: data.color }} key={index.toString()}>
              {data.value}
            </div>
          ))}
      </div>
    );
  }

  return null;
};