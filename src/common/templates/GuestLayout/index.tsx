import { ErrorBoundary } from 'react-error-boundary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { ErrorFallback } from 'src/error-handler';
import { PropsWithChildren } from 'react';

export default function GuestLayout({ children }: PropsWithChildren) {
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
        <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
      </Box>
    </Container>
  );
}
