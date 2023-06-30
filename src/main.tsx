import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import { ServiceProvider, services } from './services';
import { router } from './router';
// import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ServiceProvider services={services}>
      <RouterProvider router={router} />
    </ServiceProvider>
  </React.StrictMode>
);
