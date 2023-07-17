import { Drawer, DrawerHeader } from '@app/layouts/sidebar/components/sidebarContainer';
import { SideBarIcon } from '@app/layouts/sidebar/components/sidebarIcon';
import useSidebarIcons from '@app/layouts/sidebar/sidebarIcons';
import { MenuOutlined } from '@mui/icons-material';
import { Box, CssBaseline, Divider, IconButton, List, Typography } from '@mui/material';
import { useState } from 'react';

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const icons = useSidebarIcons({ open });
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} PaperProps={{ sx: { backgroundColor: 'black', color: 'white' } }}>
        <DrawerHeader open={open}>
          {open && <Typography fontSize="1.5rem">Taskade</Typography>}

          <IconButton onClick={handleDrawerOpen}>
            <MenuOutlined style={{ color: '#f1f2f3' }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div>
            {icons.map((sidebaritem, index) => {
              return <SideBarIcon {...sidebaritem} key={index} />;
            })}
          </div>
        </List>
      </Drawer>
    </Box>
  );
}
