import React from "react";
import DetailOverlay from "../components/DetailOverlay";
import ProductBanner from "../components/ProductBanner";

const Details = () => {
	return (
		<div className="container mx-auto">
			<ProductBanner />
			<DetailOverlay />
		</div>
	);
};

export default Details;
