import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import App from './App';
import Demo from './DemoSuspense';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
);
