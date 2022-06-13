import React from "react";
import PropTypes from "prop-types";
import coldbrew from "../../assets/coldbrew.svg";
import Icon from "../Utility/Icon";

const CartegoryTag = ({ isActive, name, icon }) => {
	const description = (
		<h3 className={`${isActive ? "text-white" : "text-black"}`}>{name}</h3>
	);
	return (
		<div
			className={`flex snap-start items-center cursor-pointer justify-center py-2 space-x-2 font-semibold rounded-full ${
				isActive ? "bg-brown text-white" : "bg-white text-black"
			} min-w-[120px] md:min-w-[200px] md:py-3 md:text-xl md:px-2`}
		>
			<Icon icon={icon} dsc={description} />
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
