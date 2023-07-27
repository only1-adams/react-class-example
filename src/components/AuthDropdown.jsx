import { useState, useContext } from "react";
import { logUserOut } from "../libs/authentication";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

export default function AuthDropdown() {
	const [isShowing, setIsShowing] = useState(false);

	function toggleDropdown() {
		setIsShowing(!isShowing);
	}

	return (
		<li className="nav-item dropdown position-relative">
			<span onClick={toggleDropdown} className="nav-link dropdown-toggle">
				<img src="/img/avatar.png" style={{ height: "30px" }} alt="" />
				<span>Hi! Tomiwa</span>
			</span>
			{isShowing && <DropdownContent />}
		</li>
	);
}

function DropdownContent() {
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	function logOut() {
		logUserOut();
		dispatch({ type: "logUserOut" });
		navigate("/");
	}

	return (
		<ul
			className="position-absolute bg-light rounded shadow py-5"
			style={{
				top: "100%",
				zIndex: 99999,
				width: "200px",
			}}>
			<li className="list-unstyled">
				<a href="/profile.html">Profile</a>
			</li>
			<li onClick={logOut} className="list-unstyled">
				<button href="#">Logout</button>
			</li>
		</ul>
	);
}
