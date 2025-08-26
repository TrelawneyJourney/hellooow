import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
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
      ],
    },
  ],
  { basename: "/hellooow" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
