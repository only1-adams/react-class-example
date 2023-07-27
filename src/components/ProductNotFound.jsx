import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ProductNotFound() {
	const error = useRouteError();
	return (
		<>
			<div className="container-fluid">
				<div className="row banner">
					<div className="col-12">
						<p>
							<Link to="/">Home </Link>
							<span>/ Products</span>
						</p>
					</div>
				</div>
			</div>
			<div className="container mt-5 mb-5">
				<div>404</div>
				<div>{error.message}</div>
			</div>
		</>
	);
}
