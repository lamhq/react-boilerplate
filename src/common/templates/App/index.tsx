import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ServiceProvider, services } from 'src/services';
import { router } from 'src/router';
import { theme } from 'src/theme';
import { CssBaseline } from '@mui/material';

export function App() {
  return (
    <ServiceProvider services={services}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ServiceProvider>
  );
}
