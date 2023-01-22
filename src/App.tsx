import PathName from 'constants/PathName';
import MapPage from 'pages/MapPage';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path={PathName.MAP_PAGE} element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
