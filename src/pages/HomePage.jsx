import InteriorDesigns from "../components/InteriorDesigns";
import FeaturedProducts from "../components/FeaturedProducts";
import { Suspense, useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import { Await, useLoaderData } from "react-router-dom";

const HomePage = () => {
	const { authStatus } = useContext(AuthContext);
	const { products } = useLoaderData();

	return (
		<>
			<div id="carouselExampleCaptions" className="carousel slide">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="/img/carousel - 1.jpg"
							className="d-block w-100"
							alt="..."
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5 className="text-capitalize text-warning fw-bold fs-4">
								sofa
							</h5>
							<p className="text-capitalize text-black fw-bold">
								made of classNameic materials
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src="/img/carousel - 2.jpg"
							className="d-block w-100"
							alt="..."
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5 className="text-capitalize text-warning fs-4">
								kitchen cabinet
							</h5>
							<p className="text-capitalize">
								full option: heat extractor, gas cooker and microwave
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src="/img/carousel - 3.jpg"
							className="d-block w-100"
							alt="..."
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5 className="text-capitalize text-warning fs-4">
								executive table
							</h5>
							<p className="text-capitalize text-black fw-bold">
								made with HDF laminated materials
							</p>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev">
					<span className="" aria-hidden="true">
						<i className="bi bi-arrow-left-circle-fill"></i>
					</span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next">
					<span className="" aria-hidden="true">
						<i className="bi bi-arrow-right-circle-fill"></i>
					</span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			{authStatus.isLoggedIn && <InteriorDesigns />}

			<Suspense fallback={<p>Loading featured products</p>}>
				<Await resolve={products}>
					{(featuredProducts) => {
						return <FeaturedProducts featuredProducts={featuredProducts} />;
					}}
				</Await>
			</Suspense>

			<div className="container-fluid ship">
				<div className="row">
					<div className="col-12 col-md-3">
						<div className="row">
							<div className="col-2">
								<i className="bi bi-truck"></i>
							</div>
							<div className="col-10">
								<h5 className="text-capitalize">free shipping</h5>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Possimus, rerum.
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-3">
						<div className="row">
							<div className="col-2">
								<i className="bi bi-credit-card"></i>
							</div>
							<div className="col-10">
								<h5 className="text-capitalize">secured payments</h5>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Possimus, rerum.
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-3">
						<div className="row">
							<div className="col-2">
								<i className="bi bi-cash"></i>
							</div>
							<div className="col-10">
								<h5 className="text-capitalize">14-days return</h5>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Possimus, rerum.
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-3">
						<div className="row">
							<div className="col-2">
								<i className="bi bi-telephone-fill"></i>
							</div>
							<div className="col-10">
								<h5 className="text-capitalize">24/7 support</h5>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Possimus, rerum.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
