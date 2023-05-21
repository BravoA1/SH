import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import ProductInformation from "./pages/ProductInformation/ProductInformation";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import { userLoader } from "./loaders/userLoader";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Cart from "./pages/Cart/Cart";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { cartLoader } from "./loaders/cartLoader";

export const router = createBrowserRouter([
	{
		path: "",
		element: <App />,
		loader: userLoader,
		children: [
			{
				path: "productInformation/:id",
				element: <ProductInformation />,
			},
			{
				index: true,
				element: <Homepage />,
			},
			{
				path: "search",
				element: <Search />,
				children: [
					{
						path: ":gender",
						element: <Search />,
					},
				],
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "forgotpassword",
				element: <ForgotPassword />,
			},
			{
				path: "profile",
				element: (
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>
				),
			},
		],
	},

]);
