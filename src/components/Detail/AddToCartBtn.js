import React from "react";

const AddToCartBtn = ({ price }) => {
	return (
		<button className="flex items-center justify-around w-full px-3 py-5 mt-6 text-2xl font-bold text-white rounded-full cursor-pointer md:text-3xl md:mt-10 md:py-8 bg-brown lg:max-w-[400px] lg:mx-auto lg:mt-16">
			<span>Add to cart</span>
			<span className="flex space-x-4">
				<span>|</span> <span>{price}</span>
			</span>
		</button>
	);
};

AddToCartBtn.defaultProps = {
	price: 50,
};

export default AddToCartBtn;
