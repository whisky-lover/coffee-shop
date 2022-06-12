import React from "react";

const Ingredient = ({ img, name, isLast }) => {
	return (
		<div
			className={`flex items-center justify-start px-3 space-x-2 ${
				!isLast ? "border-r" : ""
			}`}
		>
			<div className="w-[24px]">
				<img src={img} alt="" className="w-full" />
			</div>

			<h3 className="text-lg font-semibold">{name}</h3>
		</div>
	);
};

export default Ingredient;
