import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "products",
          element: <ProductsPage />,
        },
        {
          path: "products/:categoria",
          element: <ProductsPage />,
        },
        {
          path: "products/detail/:id",
          element: <ProductDetail />,
        },
      ],
    },
  ],
  { basename: "/hellooow" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
