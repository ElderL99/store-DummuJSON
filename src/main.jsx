import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import MainLayout from "./layouts/mainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
    ],
  },
  {
    path: "/auth",
    children: [{ path: "login", element: <LoginPage /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
