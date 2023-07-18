import { SideBarItem } from '@app/layouts/sidebar/components/sidebarContainer';
import { ListItemButton, ListItemIcon, ListItemText, SvgIconProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface sidebarprops {
  open: boolean;
  displayText: string;
  route: string;
  icon: SvgIconProps;
}

export const SideBarIcon = (props: sidebarprops) => {
  const handleLogOut = () => {};
  const navigate = useNavigate();
  return (
    <SideBarItem
      open={props.open}
      onClick={(): void => {
        navigate(props.route);
        props.displayText === 'Log Out' ? handleLogOut() : '';
      }}
    >
      <ListItemButton sx={{ mt: props.route === '/logout' ? '7rem' : '' }}>
        <ListItemIcon>
          <>{props.icon}</>
        </ListItemIcon>
        <ListItemText primary={props.displayText} />
      </ListItemButton>
    </SideBarItem>
  );
};
