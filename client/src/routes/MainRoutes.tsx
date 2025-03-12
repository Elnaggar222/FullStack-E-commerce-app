import { Route, Routes } from "react-router";
import HomePage from "../pages";
import AboutPage from "../pages/About";
import MainLayout from "../pages/Layout";
import ProductsPage from "../pages/Products";
import ProductDetailsPage from "../pages/ProductDetails";
import ErrorHandler from "../components/errors/ErrorHandler";
import NotFoundPage from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import { useSelector } from "react-redux";
import { userAuthSelector } from "../app/features/AuthSlice";

const MainRoutes = () => {
  const { jwt } = useSelector(userAuthSelector);
  const isLoggedIn = !!jwt;
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
      </Route>
      <Route
        path="/signUp"
        element={
          <ProtectedRoute isAllowed={!isLoggedIn} redirectPath={"/"}>
            <SignUp />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signIn"
        element={
          <ProtectedRoute isAllowed={!isLoggedIn} redirectPath={"/"}>
            <SignIn />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
