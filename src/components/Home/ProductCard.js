import React from "react";
import star from "../../assets/star.svg";
import { Link } from "react-router-dom";

const ProductCard = ({ img, name, dsc, rating, price }) => {
	return (
		<div className="shadow-md rounded-2xl min-w-[300px] px-4 snap-start relative py-3">
			<Link to="/product">
				<div className="w-full mx-auto overflow-hidden rounded-2xl">
					<img src={img} alt="illustration of product" />
				</div>
			</Link>

			<div>
				<h3 className="py-3 text-3xl tracking-wider">{name}</h3>
				<p className="font-[400] text-darkGray pb-3 text-lg">{dsc}</p>
				<h6 className="text-2xl">{price}</h6>
			</div>

			{/* Absolute components */}
			<div className="bg-brown text-lightGray w-[60px] p-2 flex items-center space-x-2 rounded-full absolute top-5 right-8">
				<div>
					<img src={star} alt="" />
				</div>
				<span>{rating}</span>
			</div>

			<div className="cursor-pointer absolute text-6xl text-white bg-brown w-[50px] h-[50px] rounded-full flex justify-center items-center p-3 right-4 bottom-4">
				+
			</div>
		</div>
	);
};

ProductCard.defaultProps = {
	img: "https://images.unsplash.com/photo-1523942839745-7848c839b661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
	name: "Cappucino",
	dsc: "coffee, fat milk",
	price: "50",
	rating: "5.0",
};

export default ProductCard;
