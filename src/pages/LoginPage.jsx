import { useSubmit, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LoginPage() {
	const errors = useActionData();
	const submit = useSubmit();
	const [loginData, setLoginData] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState({
		show: false,
		message: "",
	});

	function loginDataHandler(property, value) {
		setLoginData((draft) => ({
			...draft,
			[property]: value,
		}));
	}

	function logUserIn() {
		submit(loginData, {
			method: "post",
			action: "/login",
		});
	}

	useEffect(() => {
		if (errors !== undefined) {
			setError((draft) => {
				return {
					...draft,
					show: errors.hasError,
					message: errors.message,
				};
			});
		}
	}, [errors, setError]);

	return (
		<>
			<div className="container-fluid">
				<div className="row banner">
					<div className="col-12">
						<p>
							<a href="/index.html">Home </a>
							<span>/ Log in</span>
						</p>
					</div>
				</div>
			</div>
			<div
				style={{
					position: "relative",
				}}
				className="container mt-5 mb-5">
				{error.show && (
					<div
						style={{
							position: "absolute",
							backgroundColor: "red",
							padding: "8px",
							borderRadius: "8px",
							color: "white",
							left: 0,
							right: 0,
							top: 0,
							margin: "auto",
							width: "max-content",
							height: "max-content",
						}}>
						{error.message}
					</div>
				)}
				<h1 className="title">Login Here</h1>
				<div className="row mt-5">
					<div className="col-12 fsign">
						<div className="mb-3">
							<label htmlFor="exampleFormControlInput1" className="form-label">
								Username
							</label>
							<input
								type="text"
								className="form-control"
								id="exampleFormControlInput1"
								name="username"
								placeholder=""
								onChange={(event) =>
									loginDataHandler("username", event.target.value)
								}
							/>
						</div>
						<div className="mb-3 pass">
							<label htmlFor="exampleFormControlInput1" className="form-label">
								Password
							</label>
							<input
								type="password"
								className="form-control input"
								id="exampleFormControlInput1"
								name="password"
								placeholder=""
								onChange={(event) =>
									loginDataHandler("password", event.target.value)
								}
							/>
							<div className="see">
								<i className="bi bi-eye"></i>
								<i className="bi bi-eye-slash"></i>
							</div>
						</div>
						<div className="mb-3">
							<button onClick={logUserIn} className="btn">
								Login
							</button>
						</div>
						<p>
							{"Don't have an account"}
							<span>
								<a href="/signup.html">Register here</a>
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
