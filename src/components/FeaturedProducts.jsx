import { Link } from "react-router-dom";

export default function FeaturedProducts({ featuredProducts }) {
	const products = featuredProducts.map((product) => {
		return (
			<div key={product.id} className="col-12 col-md-4 mt-5 fprod">
				<div className="card">
					<Link to={`/product/${product.id}`}>
						<img
							src={product.image}
							className="card-img-top"
							alt={product.title}
						/>
					</Link>
					<div className="card-body">
						<div className="row">
							<div className="col-8">
								<h5 className="card-title">{product.title}</h5>
								<p className="card-text">{product.category}</p>
							</div>
							<div className="col-4">
								<h5 className="card-title float-end">₦{product.price}</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="container">
			<h1 className="title">featured products</h1>
			<div className="row mt-5 mb-5">{products}</div>
		</div>
	);
}
