import React from "react";
import cart from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
import location from "../../assets/location.svg";
import Icon from "../Utility/Icon";

const NavBar = () => {
	const locationText = (
		<span className="font-[300] md:text-xl">Saigon, Vietnam</span>
	);

	return (
		<div className="flex justify-between px-3 py-4 text-lg md:py-10">
			<Icon icon={cart} width={8} />

			<div>
				<h1 className="flex items-center">
					<Icon icon={location} width={6} dsc={locationText} />
				</h1>
			</div>

			<Icon icon={heart} width={8} />
		</div>
	);
};

export default NavBar;
