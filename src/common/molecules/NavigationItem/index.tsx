import { NavLinkProps, NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

export interface NavigationItemProps {
  to: NavLinkProps['to'];
  icon: React.ReactNode;
  label: string;
}

const MyNavLink = styled(NavLink)({
  textDecoration: 'none',
  color: 'inherit',
});

export default function NavigationItem({ to, icon, label }: NavigationItemProps) {
  return (
    <MyNavLink to={to}>
      {({ isActive }) => (
        <ListItemButton selected={isActive}>
          <ListItemIcon sx={{ minWidth: 36 }}>{icon}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      )}
    </MyNavLink>
  );
}
