import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ServiceProvider, services } from './provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ServiceProvider services={services}>
      <App />
    </ServiceProvider>
  </React.StrictMode>
);
