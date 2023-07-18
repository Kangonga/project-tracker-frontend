import { SvgIconProps } from '@mui/material';
import {
  BallotOutlined,
  EngineeringOutlined,
  LogoutOutlined,
  Person3Outlined,
  SpaceDashboardOutlined,
} from '@mui/icons-material';

interface sidebarprops {
  open: boolean;
  displayText: string;
  route: string;
  icon: SvgIconProps;
}

interface drawerInterface {
  open: boolean;
}
export default function useSidebarIcons({ open }: drawerInterface) {
  const sidebaritems: sidebarprops[] = [
    {
      displayText: 'Dashboard',
      route: '',
      icon: <SpaceDashboardOutlined className="icon" />,
      open: open,
    },
    {
      displayText: 'Projects',
      route: 'projects',
      icon: <BallotOutlined className="icon" />,
      open: open,
    },

    {
      displayText: 'Developers',
      route: 'profile',
      icon: <EngineeringOutlined className="icon" />,
      open: open,
    },
    {
      displayText: 'Profile',
      route: 'profile',
      icon: <Person3Outlined className="icon" />,
      open: open,
    },
    {
      displayText: 'Log Out',
      route: 'profile',
      icon: <LogoutOutlined className="icon" />,
      open: open,
    },
  ];
  return sidebaritems;
}
