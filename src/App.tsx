import PathName from 'constants/PathName';
import LoginPage from 'pages/LoginPage';
import MapPage from 'pages/MapPage';
import ProfilePage from 'pages/ProfilePage';
import ShopPage from 'pages/ShopPage';
import SignUpPage from 'pages/SignUpPage';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryCache = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryCache}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path={PathName.MAP_PAGE} element={<MapPage />} />
            <Route path={PathName.LOGIN_PAGE} element={<LoginPage />} />
            <Route path={PathName.SIGNUP_PAGE} element={<SignUpPage />} />
            <Route path={PathName.PROFILE_PAGE} element={<ProfilePage />} />
            <Route path={PathName.SHOP_PAGE} element={<ShopPage />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </QueryClientProvider>
  );
}

export default App;
