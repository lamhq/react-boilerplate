import ImageIcon from '@mui/icons-material/Image';
import LandscapeIcon from '@mui/icons-material/Landscape';
import SyncIcon from '@mui/icons-material/Sync';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Drawer from '@mui/material/Drawer';
import NavigationItem from '../NavigationItem';

export interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  width: number;
}

export default function Sidebar({ open, onToggle, width }: SidebarProps) {
  const drawerContent = (
    <Box sx={{ width: { sm: width }, flexShrink: { sm: 0 } }} aria-label="main links">
      <Toolbar variant="dense" />

      <Divider />

      <List>
        <NavigationItem to="/" label="Home" icon={<HomeIcon fontSize="small" />} />
      </List>

      <Divider />

      <List
        component="nav"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Demo
          </ListSubheader>
        }
      >
        <NavigationItem
          to="/demo/data-fetching"
          label="Data Fetching"
          icon={<SyncIcon fontSize="small" />}
        />
        <NavigationItem
          to="/demo/lazy-load-image-1"
          label="Image Lazy Loading (1)"
          icon={<ImageIcon fontSize="small" />}
        />
        <NavigationItem
          to="/demo/lazy-load-image-2"
          label="Image Lazy Loading (2)"
          icon={<LandscapeIcon fontSize="small" />}
        />
      </List>
    </Box>
  );

  return (
    <aside>
      {/* The mobile Drawer */}
      <Drawer
        variant="temporary"
        open={open}
        anchor="left"
        onClose={onToggle}
        ModalProps={{
          // Better open performance on mobile.
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* The desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </aside>
  );
}
