import { Card } from '@app/features/dashboards/components/dashboardCard/card';
import { IconButton, SvgIconProps } from '@mui/material';

interface dashboardCardInterface {
  icon: SvgIconProps;
  smallText: string;
  bigText: string;
}
export default function DashboardCard(props: dashboardCardInterface) {
  const colors = ['#3EBF09', '#10F6AE', '#4E7BF3', '#EC4EF3'];
  const color = colors[Math.floor(Math.random() * 4)];
  return (
    <Card>
      <IconButton className="icon" sx={{ backgroundColor: color }}>
        <>{props.icon}</>
      </IconButton>
      <div className="smalltext">{props.smallText}</div>
      <div className="bigtext">{props.bigText}</div>
    </Card>
  );
}
