import { styled, Theme, CSSObject } from '@mui/material/styles';
import { Badge, ListItem, ListItemProps } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { HTMLAttributes } from 'react';

const drawerWidth = 240;
interface SideBarProps extends ListItemProps {
  open: boolean;
}
interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
}
export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')<DrawerHeaderProps>(({ open }) => ({
  display: 'flex',
  justifyContent: open ? 'space-between' : 'center',
  alignItems: 'center',
  paddingLeft: open ? '1rem' : '',
  height: '5.9rem',
  '.logotext': {
    display: 'flex',
    alignItems: 'center',
    gap: '.75rem',
  },
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const SideBarItem = styled(ListItem, { shouldForwardProp: prop => prop !== 'open' })<SideBarProps>(
  ({ open }) => ({
    display: 'block',
    padding: 0,
    '.icon': {
      color: 'white',
      marginLeft: open ? '0' : '.3rem',
    },
    '&: hover': {
      color: 'orange',
      backgroundColor: 'white',
      borderRadius: '25px',
      '.icon': {
        color: 'orange',
      },
    },
    ListItemButton: {
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    },
    ListItemIcon: {
      minWidth: 0,
      mr: open ? 3 : 'auto',
      justifyContent: 'center',
    },
  })
);

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
