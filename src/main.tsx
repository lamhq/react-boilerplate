import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { ServiceProvider, services } from './services';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ServiceProvider services={services}>
      <App />
    </ServiceProvider>
  </React.StrictMode>
);
