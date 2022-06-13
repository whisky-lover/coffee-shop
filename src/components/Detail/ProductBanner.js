import React from "react";
import detail from "../../assets/detail.jpeg";
import { AiFillCaretLeft } from "react-icons/ai";
import star from "../../assets/star.svg";
import { Link } from "react-router-dom";
import Image from "../Utility/Image";
import Icon from "../Utility/Icon";

const ProductBanner = () => {
	return (
		<div className="relative">
			<Image img={detail} alt="product detail" rounded={false} />

			<Link to="/home">
				<div className="absolute flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-lightGray left-4 top-4">
					<AiFillCaretLeft className="text-2xl text-brown" />
				</div>
			</Link>

			<div className="absolute bottom-0 flex items-center justify-between w-full px-4 py-2 bg-black md:px-10 text-lightGray h-3/5 md:h-2/5 md:py-8 bg-opacity-30">
				<div>
					<h3 className="py-2 text-3xl font-semibold">Cappucino</h3>
					<p className="font-[300] text-md">With Chocolate</p>
				</div>
				<div className="bg-white bg-opacity-30 text-lightGray w-[80px] p-2 flex justify-center items-center space-x-2 rounded-full">
					<Icon icon={star} width={4} dsc={<span>4.9</span>} />
				</div>
			</div>
		</div>
	);
};

export default ProductBanner;
