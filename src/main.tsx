import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from 'App';
import ErrorBoundary from 'ErrorBoundary';
import { worker } from 'mocks/browser';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'utils/i18n';
import 'index.css';

if (import.meta.env.MODE === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

const queryCache = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <QueryClientProvider client={queryCache}>
          <App />
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
