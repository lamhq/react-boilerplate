import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ServiceProvider } from './provider';
import { CacheService } from './common';
import { ApiService } from './api';

// init all services
const cacheService = new CacheService();
const apiService = new ApiService(cacheService);
const services = { apiService };

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ServiceProvider services={services}>
      <App />
    </ServiceProvider>
  </React.StrictMode>
);
