import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import ProductInformation from "./pages/ProductInformation/ProductInformation";
import Search from "./pages/Search/Search";
import SignUp from "./pages/SignUp/SignUp";
import Signin from "./pages/SignIn/Signin";
import { userLoader } from "./loaders/userLoader";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Cart from "./pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: userLoader,
    children: [
      {
        path: "/productInformation/:id",
        element: <ProductInformation />,
      },
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
