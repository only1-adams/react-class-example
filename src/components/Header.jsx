import AuthDropdown from "./AuthDropdown";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

export default function Header() {
	const { authStatus, dispatch } = useContext(AuthContext);
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img src="/img/logo.png" alt="" style={{ height: "50px" }} />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="/index.html">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/products.html">
								Products
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Category
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="/interior.html">
										Interior Decor
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Kitchen and Wardrobe
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Office Furniture
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										School Furniture
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/contact.html">
								Contact
							</a>
						</li>
						{!authStatus.isLoggedIn && (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="login">
										Login
									</Link>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/signup.html">
										register
									</a>
								</li>
							</>
						)}
						<li className="nav-item">
							<a className="nav-link" href="/cart.html">
								<div className="wrapper">
									<i className="bi bi-cart4"></i>
									<span className="badge">0</span>
								</div>
							</a>
						</li>
						{authStatus.isLoggedIn && <AuthDropdown />}
					</ul>
					{authStatus.isLoggedIn && (
						<form className="d-flex search" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success" type="submit">
								Search
							</button>
						</form>
					)}
					<div className="samson">
						<i className="bi bi-moon-fill"></i>
						{/* <i className="bi bi-brightness-high-fill"></i> */}
					</div>
				</div>
			</div>
		</nav>
	);
}
