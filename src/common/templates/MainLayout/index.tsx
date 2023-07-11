import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import ScrollOnClick from 'src/common/atoms/ScrollOnClick';
import Sidebar from './Sidebar';
import Header from './Header';

const sidebarWidth = 256;

export default function MainLayout() {
  const [isSidebarOpen, setDrawerOpen] = useState<boolean>(false);
  const handleSidebarToggle = useCallback(() => {
    setDrawerOpen((isOpen) => !isOpen);
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Header
        sx={{
          width: { sm: `calc(100% - ${sidebarWidth}px)` },
          ml: { sm: `${sidebarWidth}px` },
        }}
        onSidebarToggle={handleSidebarToggle}
      />

      <Sidebar open={isSidebarOpen} onToggle={handleSidebarToggle} width={sidebarWidth} />

      <Box component="main" sx={{ ml: { sm: `${sidebarWidth}px` }, flexGrow: 1, p: 3, pt: '48px' }}>
        <Outlet />
      </Box>

      <ScrollOnClick anchorSelector="#back-to-top-anchor">
        <Fab color="inherit" size="small" sx={{ backgroundColor: 'transparent' }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollOnClick>
    </Box>
  );
}
