import React from "react";

const Image = ({ img, alt, rounded }) => {
	return (
		<div
			className={`w-full mx-auto overflow-hidden ${
				rounded ? "rounded-2xl" : ""
			} `}
		>
			<img src={img} alt={alt} className="object-cover w-full h-full" />
		</div>
	);
};

export default Image;
