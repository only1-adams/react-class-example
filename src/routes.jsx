//PAGES
import HomePage from "./pages/HomePage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import ProductNotFound from "./components/ProductNotFound.jsx";
import LoginPage from "./pages/LoginPage.jsx";

//OTHER FUNCTIONS
import localStorageHelper from "./helpers/localstorage.js";
import { json, redirect, defer } from "react-router-dom";
import NavigationGuard from "./components/NavigationGuard.jsx";
import { getSingleProduct, getFeaturedProducts } from "./libs/product.js";
import { logUserIn } from "./libs/authentication.js";

const routes = [
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				id: "auth",

				loader: () => {
					const token = localStorageHelper.getFromLocalStorage("token");

					if (token !== null) {
						return json({ token: token, isLoggedIn: true });
					} else {
						return json({ token: null, isLoggedIn: false });
					}
				},

				children: [
					{
						index: true,
						loader: async () => {
							const featuredProductsPromise = getFeaturedProducts(
								`https://fakestoreapi.com/products`
							);

							return defer({ products: featuredProductsPromise });
						},
						element: (
							<NavigationGuard>
								<HomePage />
							</NavigationGuard>
						),
					},
					{
						path: "product/:productId",
						errorElement: <ProductNotFound />,
						loader: async ({ params }) => {
							const productDataPromise = getSingleProduct(
								`https://fakestoreapi.com/products/${params.productId}`
							);

							return defer({ productData: productDataPromise });
						},
						element: (
							<NavigationGuard>
								<ProductDetails />
							</NavigationGuard>
						),
					},
					{
						path: "login",
						action: async ({ _, request }) => {
							//get form data
							const formData = await request.formData();

							const loginData = {
								username: formData.get("username"),
								password: formData.get("password"),
							};

							// send login request
							const result = await logUserIn(
								"https://fakestoreapi.com/auth/login",
								loginData
							);

							// if there is an error stop and return the error
							if (result.hasError) {
								return result;
							}

							localStorageHelper.saveToLocalStorage("token", result.token);

							return redirect("/");
						},
						element: <LoginPage />,
					},
				],
			},
		],
	},
];

export default routes;
