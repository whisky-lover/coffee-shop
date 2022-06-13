import React from "react";
import PropTypes from "prop-types";
import bean from "../../assets/coffee-bean.svg";

const Ingredient = ({ img, name, isLast }) => {
	return (
		<div
			className={`flex items-center justify-start px-3 md:px-5 space-x-2 ${
				!isLast ? "border-r" : ""
			}`}
		>
			<div className="w-[24px]">
				<img src={img} alt="" className="w-full" />
			</div>

			<h3 className="text-lg font-semibold text-center md:text-xl">
				{name}
			</h3>
		</div>
	);
};

Ingredient.propTypes = {
	name: PropTypes.string,
	isLast: PropTypes.bool,
};

Ingredient.defaultProps = {
	name: "Coffee",
	isLast: false,
	img: bean,
};

export default Ingredient;
