import { format, parseISO } from 'date-fns';
import { TooltipProps } from 'recharts';
import './CustomTooltip.scss';

export const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    // debugger;
    return (
      <div className="customTooltip">
        <p className="customTooltip__label">{format(parseISO(label), 'd, MMMM yyyy')}</p>
        {/* <p className="customTooltip__label">{label}</p> */}
        {payload &&
          payload.map((data, index) => (
            <div className="customTooltip__data" style={{ color: data.color }} key={index.toString()}>
              {data.value}
            </div>
          ))}
      </div>
    );
  }

  return null;
};
