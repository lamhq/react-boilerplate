import { Menu as MenuIcon } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';

interface HeaderProps {
  sx: SxProps<Theme>;
  onSidebarToggle: () => void;
}

export default function Header({ sx, onSidebarToggle }: HeaderProps) {
  return (
    <AppBar position="fixed" sx={sx}>
      <Toolbar variant="dense">
        <IconButton
          size="small"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' }, boxShadow: 'none' }}
          onClick={onSidebarToggle}
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
  );
}
