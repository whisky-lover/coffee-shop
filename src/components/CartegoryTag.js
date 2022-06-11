import React from "react";

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

export default CartegoryTag;
