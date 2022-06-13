import React from "react";
import PropTypes from "prop-types";

const Icon = ({ icon, width, dsc }) => {
	return (
		<div className="flex items-center h-full space-x-2 cursor-pointer md:space-x-3 lg:space-x-4 jusitfy-center">
			<img
				src={icon}
				alt="cart icon"
				className={`md:w-${width} object-cover`}
			/>
			{dsc}
		</div>
	);
};

Icon.propTypes = {
	width: PropTypes.number,
};

Icon.defaultProps = {
	width: 8,
};

export default Icon;
