import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import ProductInformation from "./pages/ProductInformation/ProductInformation";
import Search from "./pages/Search/Search";
import Cart from "./pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/productInformation/:id",
        element: <ProductInformation />,
      },
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
  },
]);
