import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Menu as MenuIcon } from '@mui/icons-material';

import Navigation from './Navigation';

const sidebarWidth = 256;
const leftStyle = {
  width: { sm: sidebarWidth },
  flexShrink: { sm: 0 },
};
const rightStyle = {
  ml: { sm: `${sidebarWidth}px` },
  width: { sm: `calc(100% - ${sidebarWidth}px)` },
};

export default function MainLayout() {
  const [isSidebarOpen, setDrawerOpen] = useState<boolean>(false);
  const handleSidebarToggle = useCallback(() => {
    setDrawerOpen((isOpen) => !isOpen);
  }, []);
  const drawerContent = (
    <Box sx={leftStyle} aria-label="main links">
      <Navigation />
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Header */}
      <AppBar position="fixed" sx={rightStyle}>
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

      {/* Main content */}
      <Box component="main" sx={{ ...rightStyle, flexGrow: 1, p: 3, pt: '48px' }}>
        <Outlet />
      </Box>
    </Box>
  );
}
