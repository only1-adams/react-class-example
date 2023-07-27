import { useRouteLoaderData } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

export default function NavigationGuard({ children }) {
	const { isLoggedIn, token } = useRouteLoaderData("auth");
	const { dispatch } = useContext(AuthContext);

	useEffect(() => {
		if (isLoggedIn) {
			dispatch({ type: "userLoggedIn", token: token });
		}
	}, [isLoggedIn, token, dispatch]);
	return children;
}
