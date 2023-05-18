import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ApiService } from './api/ApiService';
import { ApiProvider } from './api/ApiProvider';
import { CacheService } from './common/CacheService';

const cacheService = new CacheService();
const apiService = new ApiService(cacheService);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider service={apiService}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
);
