import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'index.css';
import 'utils/i18n';
import { worker } from 'mocks/browser';

if (import.meta.env.MODE === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
