import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ServiceProvider } from './provider';
import { CacheService } from './common';
import { ApiService } from './user';

// init all services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cacheStore = new Map<string, Promise<any>>();
const cacheService = new CacheService(cacheStore);
const apiService = new ApiService(cacheService);
const services = { apiService };

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ServiceProvider services={services}>
      <App />
    </ServiceProvider>
  </React.StrictMode>
);
