import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import AuthProvider from "../providers/AuthProvider";

export default function RootLayout() {
	return (
		<>
			<AuthProvider>
				<Header />
				<Outlet />
				<Footer />
			</AuthProvider>
		</>
	);
}
