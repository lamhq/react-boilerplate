import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { ServiceProvider, services } from 'src/services';
import router from 'src/router';
import theme from 'src/theme';

export default function App() {
  return (
    <ServiceProvider services={services}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ServiceProvider>
  );
}
