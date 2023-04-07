import React from 'react';
import PathName from 'constants/PathName';
import ToastProvider from 'components/ToastProvider';
import AuthPage from 'pages/AuthPage';
import BookmarkManagePage from 'pages/BookmarkManagePage';
import NotFoundErrorPage from 'pages/error/NotFoundErrorPage';
import LoginPage from 'pages/LoginPage';
import MapPage from 'pages/MapPage';
import ProfilePage from 'pages/ProfilePage';
import ReviewManagePage from 'pages/ReviewManagePage';
import ShopPage from 'pages/ShopPage';
import ShopRegisterPage from 'pages/ShopRegisterPage';
import SignUpPage from 'pages/SignUpPage';
import SignUpSuccessPage from 'pages/SignUpSuccessPage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ToastProvider>
        <Routes>
          <Route path={PathName.MAP_PAGE} element={<MapPage />} />
          <Route path={PathName.LOGIN_PAGE} element={<LoginPage />} />
          <Route path={PathName.AUTH_PAGE} element={<AuthPage />} />
          <Route
            path={PathName.SIGNUP_SUCCESS_PAGE}
            element={<SignUpSuccessPage />}
          />
          <Route path={PathName.SIGNUP_PAGE} element={<SignUpPage />} />
          <Route path={PathName.PROFILE_PAGE} element={<ProfilePage />} />
          <Route
            path={PathName.BOOKMARK_MANAGE_PAGE}
            element={<BookmarkManagePage />}
          />
          <Route
            path={PathName.REVIEW_MANAGE_PAGE}
            element={<ReviewManagePage />}
          />
          <Route path={PathName.SHOP_PAGE} element={<ShopPage />} />
          <Route
            path={PathName.SHOP_REGISTER_PAGE}
            element={<ShopRegisterPage />}
          />
          <Route path="*" element={<NotFoundErrorPage />} />
        </Routes>
      </ToastProvider>
    </React.Suspense>
  );
}

export default App;
