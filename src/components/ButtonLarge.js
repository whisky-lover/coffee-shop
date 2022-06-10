import React from "react";
import PropTypes from "prop-types";

const ButtonLarge = ({ title }) => {
	return (
		<button className="hover:-translate-y-2 shadow-stone-800 shadow-lg transition-all duration-300 flex justify-center items-center select-none outline-none border-none cursor-pointer text-lightGray bg-brown w-4/5 lg:w-1/4 font-bold py-5 px-16 text-2xl capitalize rounded-full">
			{title}
		</button>
	);
};

ButtonLarge.propTypes = { title: PropTypes.string };
ButtonLarge.defaultProps = { title: "Click me" };

export default ButtonLarge;
