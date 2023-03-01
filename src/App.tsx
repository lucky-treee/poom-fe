import React from 'react';
import PathName from 'constants/PathName';
import AuthPage from 'pages/AuthPage';
import NotFoundErrorPage from 'pages/error/NotFoundErrorPage';
import LoginPage from 'pages/LoginPage';
import MapPage from 'pages/MapPage';
import ProfilePage from 'pages/ProfilePage';
import ShopPage from 'pages/ShopPage';
import SignUpPage from 'pages/SignUpPage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={PathName.MAP_PAGE} element={<MapPage />} />
        <Route path={PathName.LOGIN_PAGE} element={<LoginPage />} />
        <Route path={PathName.AUTH_PAGE} element={<AuthPage />} />
        <Route path={PathName.SIGNUP_PAGE} element={<SignUpPage />} />
        <Route path={PathName.PROFILE_PAGE} element={<ProfilePage />} />
        <Route path={PathName.SHOP_PAGE} element={<ShopPage />} />
        <Route path="*" element={<NotFoundErrorPage />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
