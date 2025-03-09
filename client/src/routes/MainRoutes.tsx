import { Route, Routes } from "react-router";
import HomePage from "../pages";
import AboutPage from "../pages/About";
import MainLayout from "../pages/Layout";
import ProductsPage from "../pages/Products";
import ProductDetailsPage from "../pages/ProductDetails";
import ErrorHandler from "../components/errors/ErrorHandler";
import NotFoundPage from "../pages/NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
