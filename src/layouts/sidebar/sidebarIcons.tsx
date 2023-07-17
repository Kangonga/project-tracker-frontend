import { SvgIconProps } from '@mui/material';
import { BallotOutlined, EngineeringOutlined, Home, LogoutOutlined, Person3Outlined } from '@mui/icons-material';

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
      icon: <Home sx={{ color: '#f1f2f3' }} />,
      open: open,
    },
    {
      displayText: 'Projects',
      route: 'projects',
      icon: <BallotOutlined sx={{ color: '#f1f2f3' }} />,
      open: open,
    },

    {
      displayText: 'Developers',
      route: 'profile',
      icon: <EngineeringOutlined sx={{ color: '#f1f2f3' }} />,
      open: open,
    },
    {
      displayText: 'Profile',
      route: 'profile',
      icon: <Person3Outlined sx={{ color: '#f1f2f3' }} />,
      open: open,
    },
    {
      displayText: 'Log Out',
      route: 'profile',
      icon: <LogoutOutlined sx={{ color: '#f1f2f3' }} />,
      open: open,
    },
  ];
  return sidebaritems;
}
