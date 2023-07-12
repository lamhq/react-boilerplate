import { NavLinkProps, NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export interface NavigationItemProps {
  to: NavLinkProps['to'];
  icon: React.ReactNode;
  label: string;
}

export default function NavigationItem({ to, icon, label }: NavigationItemProps) {
  return (
    <ListItemButton component={NavLink} to={to}>
      <ListItemIcon sx={{ minWidth: 36 }}>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}
