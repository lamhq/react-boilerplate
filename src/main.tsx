import 'reflect-metadata';
import { container } from 'tsyringe';

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { ApiProvider } from './api/ApiProvider';
import { ApiService } from './api/ApiService';
// import App from './App';
import Demo from './DemoSuspense';

const apiService = container.resolve(ApiService);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider service={apiService}>
      <Demo />
    </ApiProvider>
  </React.StrictMode>,
);
