import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { useAuthActions } from 'src/auth';

export default function SignoutMenuItem() {
  const { logout } = useAuthActions();
  return (
    <MenuItem onClick={logout}>
      <Typography textAlign="center">Sign out</Typography>
    </MenuItem>
  );
}
