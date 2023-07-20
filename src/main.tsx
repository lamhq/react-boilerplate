import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { container } from 'tsyringe';
import { SnackbarProvider } from 'notistack';

import config from './config';
import router from './router';
import theme from './theme';
import { DIProvider } from './di';
import { AuthProvider } from './auth';
import { ConfigProvider } from './configuration';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={1}
        autoHideDuration={8000}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <DIProvider container={container}>
          <ConfigProvider config={config}>
            <AuthProvider>
              <CssBaseline />
              <RouterProvider router={router} />
            </AuthProvider>
          </ConfigProvider>
        </DIProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
