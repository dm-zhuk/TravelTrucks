import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./common/components/Loader/Loader";
import SharedLayout from "./common/layouts/LayoutHeader";

const App = () => {
  const HomePage = lazy(() => import("pages/HomePage"));
  const CatalogPage = lazy(() => import("pages/CatalogPage"));
  const FavoritesPage = lazy(() => import("pages/FavoritesPage"));

  return (
    <Suspense fallback={<Loader isLoading={true} />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="catalog" element={<CatalogPage />} /> */}
          {/* <Route path="favorites" element={<FavoritesPage />} /> */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
