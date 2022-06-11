import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
	return (
		<div className="flex items-center py-3 space-x-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
			{Array(4)
				.fill()
				.map((item, index) => (
					<ProductCard key={index} />
				))}
		</div>
	);
};

export default Product;
