import { ReactNode } from 'react';
import './iconToolTip.css';

interface IconToolTipProps {
  icon: ReactNode;
  tooltip: string;
}

export const IconToolTip = ({ icon, tooltip }: IconToolTipProps) => {
  return (
    <div className="icon-tooltip-container">
      <div className="icon">
        {icon}
      </div>
      <span className="tooltip">
        {tooltip}
      </span>
    </div>
  );
};
