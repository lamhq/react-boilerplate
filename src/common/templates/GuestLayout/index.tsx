import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { ErrorFallback } from 'src/error-handler';

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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Outlet />
        </ErrorBoundary>
      </Box>
    </Container>
  );
}
