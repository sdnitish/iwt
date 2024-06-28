import React, { lazy, Suspense } from 'react';
import PreLoader from './components/PreLoader';
import { BrowserRouter } from 'react-router-dom';
// import AdminLayout from './layouts/AdminLayout';
// import SiteLayout from './layouts/SiteLayout';
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const SiteLayout = lazy(() => import('./layouts/SiteLayout'));

function App() {
  return (
    <BrowserRouter>
      {
        window.location.href.includes('admin') || window.location.href.includes('login')
          ?
          <Suspense
            fallback={<PreLoader />}>
            <AdminLayout />
          </Suspense>
          :
          <Suspense
            fallback={<PreLoader />}>
            <SiteLayout />
          </Suspense>
      }
    </ BrowserRouter>
  );
}

export default App;
