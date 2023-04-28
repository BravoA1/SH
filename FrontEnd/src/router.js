import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import ProductInformation from "./pages/ProductInformation/ProductInformation";
import Search from "./pages/Search/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/productInformation",
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
    ],
  },
]);
