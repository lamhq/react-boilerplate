import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Menu as MenuIcon } from '@mui/icons-material';

import Navigation from 'src/common/organisms/Navigation';

const sidebarWidth = 256;
const sidebarStyle = {
  width: sidebarWidth,
  display: { xs: 'none', sm: 'block' },
  flexShrink: 0,
};
const appbarStyle = {
  ml: { sm: `${sidebarWidth}px` },
  width: { sm: `calc(100% - ${sidebarWidth}px)` },
};
const drawerContent = <Navigation />;

export default function MainLayout() {
  const [isSidebarOpen, setDrawerOpen] = useState<boolean>(false);
  const handleSidebarToggle = useCallback(() => {
    setDrawerOpen((isOpen) => !isOpen);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
      {/* Header */}
      <AppBar position="fixed" sx={appbarStyle}>
        <Toolbar variant="dense">
          <IconButton
            size="small"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' }, boxShadow: 'none' }}
            onClick={handleSidebarToggle}
            aria-label="open drawer"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h1" align="center" component="h1">
            React Boilerplate
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 2, pt: 6 }}>
        <Outlet />
      </Box>

      <Box component="aside" sx={sidebarStyle}>
        {/* Mobile navigation */}
        <Drawer
          variant="temporary"
          open={isSidebarOpen}
          anchor="left"
          onClose={handleSidebarToggle}
          ModalProps={{
            // Better open performance on mobile.
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Default navigation */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>
    </Box>
  );
}
