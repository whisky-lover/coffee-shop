import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonLarge = ({ title }) => {
	return (
		<button className="flex items-center justify-center w-4/5 px-16 py-5 text-2xl font-bold capitalize transition-all duration-300 border-none rounded-full shadow-lg outline-none cursor-pointer select-none md:py-7 md:text-3xl hover:-translate-y-2 shadow-stone-800 text-lightGray bg-brown lg:w-1/4 md:landscape:w-1/2">
			<Link to="/home">{title}</Link>
		</button>
	);
};

ButtonLarge.propTypes = { title: PropTypes.string };
ButtonLarge.defaultProps = { title: "Click me" };

export default ButtonLarge;
