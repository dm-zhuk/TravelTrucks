import React from 'react';
import { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useErrorBoundary } from 'react-error-boundary';
import Loader from 'components//Loader/Loader';
import SharedLayout from '../../../layouts/SharedLayout';

const App = () => {
  const HomePage = lazy(() => import('pages/HomePage'));
  const CatalogPage = lazy(() => import('pages/CatalogPage'));
  const FavoritesPage = lazy(() => import('pages/FavoritesPage'));

  const { showBoundary } = useErrorBoundary();
  useEffect(() => {
    try {
    } catch (err) {
      showBoundary(err);
    }
  }, [showBoundary]);

  return (
    <Suspense fallback={<Loader isLoading={true} />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
