import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

export default function GuestLayout() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
}
