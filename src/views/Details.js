import React from "react";
import DetailOverlay from "../components/Detail/DetailOverlay";
import ProductBanner from "../components/Detail/ProductBanner";

const Details = () => {
	return (
		<div className="container mx-auto">
			<ProductBanner />
			<DetailOverlay />
		</div>
	);
};

export default Details;
