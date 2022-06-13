import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, icon }) => {
	return (
		<h3 className="flex items-center py-8 space-x-2 text-2xl font-semibold md:space-x-3 lg:space-x-4 md:text-4xl">
			<span>{title}</span>
			{icon}
		</h3>
	);
};

Title.propTypes = {
	title: PropTypes.string,
};

Title.defaultProps = {
	title: "Title",
};

export default Title;
