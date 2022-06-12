import React from "react";
import PropTypes from "prop-types";
import coldbrew from "../../assets/coldbrew.svg";

const CartegoryTag = ({ isActive, name, icon }) => {
	return (
		<div
			className={`flex snap-start items-center cursor-pointer justify-center py-2 space-x-2 font-semibold rounded-full ${
				isActive ? "bg-brown text-white" : "bg-white text-black"
			}n min-w-[120px]`}
		>
			<div>
				<img src={icon} alt="" className="w-full" />
			</div>

			<h3 className={`${isActive ? "text-white" : "text-black"}`}>
				{name}
			</h3>
		</div>
	);
};

CartegoryTag.propsTypes = { isActive: PropTypes.bool, name: PropTypes.string };

CartegoryTag.defaultProps = {
	isActive: false,
	name: "Latte",
	icon: coldbrew,
};
export default CartegoryTag;
