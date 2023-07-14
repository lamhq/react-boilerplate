import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { container } from 'tsyringe';

import { DIProvider } from './di';
import router from './router';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DIProvider container={container}>
        <CssBaseline />
        <RouterProvider router={router} />
      </DIProvider>
    </ThemeProvider>
  </React.StrictMode>
);
