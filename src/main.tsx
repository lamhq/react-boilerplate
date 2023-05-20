import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ApiService, ApiProvider } from './api';
import { CacheService } from './common';

// init all services
const cacheService = new CacheService();
const apiService = new ApiService(cacheService);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider service={apiService}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
);
